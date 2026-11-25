
const formularioOrden = document.getElementById("orden-form");
const selectClienteOrden = document.getElementById("orden-cliente");
const selectVehiculoOrden = document.getElementById("orden-vehiculo");
const inputFechaOrden = document.getElementById("orden-fecha");
const inputServicioOrden = document.getElementById("orden-servicio");
const inputDescripcionOrden = document.getElementById("orden-descripcion");
const tablaOrdenes = document.getElementById("ordenes-table-body");
const cantidadOrdenes = document.getElementById("cantidad-ordenes");
const mensajeSinOrdenes = document.getElementById("sin-ordenes");


// ===============================
// Estados disponibles
// ===============================

const ESTADOS_ORDEN = [
    "Recibido",
    "En diagnóstico",
    "En reparación",
    "Listo para entrega",
    "Entregado"
];


// ===============================
// Obtener y guardar órdenes
// ===============================

function obtenerOrdenes() {
    return JSON.parse(localStorage.getItem("ordenes")) || [];
}

function guardarOrdenes(ordenes) {
    try {
        localStorage.setItem(
            "ordenes",
            JSON.stringify(ordenes)
        );

        document.dispatchEvent(
            new Event("ordenesActualizadas")
        );

        return true;
    } catch {
        alert("No se pudieron guardar los cambios en el navegador.");
        return false;
    }
}


// ===============================
// Utilidades
// ===============================

function nombreVehiculoOrden(vehiculo) {
    return `${vehiculo.marca} ${vehiculo.modelo} - ${vehiculo.placa}`;
}

function cargarOpcionesOrden(select, registros, mensaje, etiqueta) {
    const valorAnterior = select.value;

    const opciones = registros.map(
        registro => new Option(etiqueta(registro), registro.id)
    );

    select.replaceChildren(
        new Option(mensaje, ""),
        ...opciones
    );

    if (registros.some(registro => registro.id === valorAnterior)) {
        select.value = valorAnterior;
    }
}


// ===============================
// Cargar vehículos del cliente
// ===============================

function cargarVehiculosOrden() {
    const clienteId = selectClienteOrden.value;

    const vehiculos = clienteId
        ? obtenerVehiculos().filter(
            vehiculo => vehiculo.propietarioId === clienteId
        )
        : [];

    let mensaje = "Seleccione un cliente primero";

    if (clienteId) {
        mensaje = vehiculos.length
            ? "Seleccione un vehículo"
            : "El cliente no tiene vehículos";
    }

    cargarOpcionesOrden(
        selectVehiculoOrden,
        vehiculos,
        mensaje,
        nombreVehiculoOrden
    );

    selectVehiculoOrden.disabled = vehiculos.length === 0;
}


// ===============================
// Cargar clientes
// ===============================

function cargarClientesOrden() {
    const clientes = obtenerClientes();

    const mensaje = clientes.length
        ? "Seleccione un cliente"
        : "No hay clientes registrados";

    cargarOpcionesOrden(
        selectClienteOrden,
        clientes,
        mensaje,
        cliente => cliente.nombre
    );

    cargarVehiculosOrden();
}


const CLASES_ESTADO_ORDEN = {
    "Recibido": "estado-recibido",
    "En diagnóstico": "estado-diagnostico",
    "En reparación": "estado-reparacion",
    "Listo para entrega": "estado-listo",
    "Entregado": "estado-entregado"
};

function crearEtiquetaEstadoOrden(estado) {
    const etiqueta = document.createElement("span");
    const claseEstado = CLASES_ESTADO_ORDEN[estado] || "estado-recibido";

    etiqueta.className = `estado-badge ${claseEstado}`;
    etiqueta.textContent = estado;

    return etiqueta;
}


// ===============================
// Mostrar órdenes registradas
// ===============================

function mostrarOrdenes() {
    const ordenes = obtenerOrdenes();

    tablaOrdenes.replaceChildren();

    cantidadOrdenes.textContent =
        `${ordenes.length} ${
            ordenes.length === 1 ? "orden" : "órdenes"
        }`;

    mensajeSinOrdenes.hidden = ordenes.length > 0;

    for (const orden of ordenes) {
        const fila = tablaOrdenes.insertRow();

        const estadoActual = ESTADOS_ORDEN.includes(orden.estado)
            ? orden.estado
            : "Recibido";

        // Identificador legible de la orden
        const celdaId = fila.insertCell();
        celdaId.className = "orden-id-cell";

        const codigoId = document.createElement("span");
        codigoId.className = "orden-id";
        codigoId.textContent = orden.id;
        codigoId.title = orden.id;
        celdaId.appendChild(codigoId);

        // Información de la orden
        fila.insertCell().textContent = orden.nombreCliente;
        fila.insertCell().textContent = orden.nombreVehiculo;

        const celdaFecha = fila.insertCell();
        celdaFecha.className = "fecha-cell";
        celdaFecha.textContent = formatearFecha(orden.fechaIngreso);

        fila.insertCell().textContent = orden.servicio;

        const celdaDescripcion = fila.insertCell();
        celdaDescripcion.className = "orden-descripcion-cell";
        celdaDescripcion.textContent = orden.descripcion;

        // Estado con etiqueta visual
        const celdaEstado = fila.insertCell();
        celdaEstado.className = "orden-estado-cell";
        celdaEstado.appendChild(crearEtiquetaEstadoOrden(estadoActual));

        // Columna de acciones
        const celdaAcciones = fila.insertCell();

        const contenedor = document.createElement("div");
        contenedor.className = "acciones-orden";

        // Selector de estado
        const selectEstado = document.createElement("select");
        selectEstado.className = "orden-estado-select";

        selectEstado.setAttribute(
            "aria-label",
            `Cambiar estado de orden ${orden.id}`
        );

        for (const estado of ESTADOS_ORDEN) {
            const opcion = new Option(
                estado,
                estado
            );

            selectEstado.appendChild(opcion);
        }

        selectEstado.value = estadoActual;

        // Botón para guardar el estado
        const botonGuardarEstado = document.createElement("button");

        botonGuardarEstado.type = "button";
        botonGuardarEstado.className =
            "secondary-button guardar-estado-orden";

        botonGuardarEstado.dataset.id = orden.id;
        botonGuardarEstado.textContent = "Guardar estado";

        contenedor.appendChild(selectEstado);
        contenedor.appendChild(botonGuardarEstado);

        celdaAcciones.appendChild(contenedor);
    }
}


// ===============================
// Validaciones de orden
// ===============================

function esFechaValidaOrden(fecha) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
        return false;
    }

    const [anio, mes, dia] = fecha.split("-").map(Number);
    const fechaObj = new Date(anio, mes - 1, dia);

    return (
        fechaObj.getFullYear() === anio &&
        fechaObj.getMonth() === mes - 1 &&
        fechaObj.getDate() === dia
    );
}


// ===============================
// Registrar nueva orden
// ===============================

formularioOrden.addEventListener("submit", event => {
    event.preventDefault();

    const clienteId = selectClienteOrden.value.trim();
    const vehiculoId = selectVehiculoOrden.value.trim();

    const cliente = obtenerClientes().find(
        registro => registro.id === clienteId
    );

    const vehiculo = obtenerVehiculos().find(
        registro => registro.id === vehiculoId
    );

    const fechaIngreso = inputFechaOrden.value.trim();
    const servicio = inputServicioOrden.value.trim();
    const descripcion = inputDescripcionOrden.value.trim();

    if (
        !cliente ||
        !vehiculo ||
        vehiculo.propietarioId !== cliente.id
    ) {
        alert(
            "Seleccione un cliente y uno de sus vehículos registrados."
        );

        cargarClientesOrden();
        return;
    }

    if (!fechaIngreso || !servicio || !descripcion) {
        alert(
            "Complete la fecha de ingreso, el servicio y la descripción sin dejar valores vacíos."
        );
        return;
    }

    if (!esFechaValidaOrden(fechaIngreso)) {
        alert(
            "Ingrese una fecha de ingreso válida."
        );
        return;
    }

    const estadoInicial = ESTADOS_ORDEN[0];

    if (!ESTADOS_ORDEN.includes(estadoInicial)) {
        alert("El estado inicial de la orden no es válido.");
        return;
    }

    const ordenes = obtenerOrdenes();

    const nuevaOrden = {
        id: crypto.randomUUID(),
        clienteId: cliente.id,
        vehiculoId: vehiculo.id,
        nombreCliente: cliente.nombre,
        nombreVehiculo: nombreVehiculoOrden(vehiculo),
        fechaIngreso,
        servicio,
        descripcion,
        estado: estadoInicial
    };

    ordenes.push(nuevaOrden);

    if (!guardarOrdenes(ordenes)) {
        return;
    }

    formularioOrden.reset();
    cargarVehiculosOrden();
    mostrarOrdenes();
});


// ===============================
// Actualizar estado de una orden
// ===============================

function actualizarEstadoOrden(id, nuevoEstado) {
    // Validar que el estado sea permitido
    if (!ESTADOS_ORDEN.includes(nuevoEstado)) {
        alert("El estado seleccionado no es válido.");
        return;
    }

    const ordenes = obtenerOrdenes();

    const orden = ordenes.find(
        registro => registro.id === id
    );

    if (!orden) {
        alert("No se encontró la orden seleccionada.");
        mostrarOrdenes();
        return;
    }

    // Evitar guardar si no hubo cambios
    if (orden.estado === nuevoEstado) {
        return;
    }

    orden.estado = nuevoEstado;

    if (!guardarOrdenes(ordenes)) {
        return;
    }

    // Refrescar el listado con el nuevo estado
    mostrarOrdenes();
}


// ===============================
// Acciones de la tabla
// ===============================

tablaOrdenes.addEventListener("click", event => {
    const boton = event.target.closest(
        ".guardar-estado-orden"
    );

    if (!boton) {
        return;
    }

    const idOrden = boton.dataset.id;

    const fila = boton.closest("tr");

    const selectEstado = fila.querySelector(
        ".orden-estado-select"
    );

    const nuevoEstado = selectEstado.value;

    actualizarEstadoOrden(
        idOrden,
        nuevoEstado
    );
});


// ===============================
// Eventos de sincronización
// ===============================

selectClienteOrden.addEventListener(
    "change",
    cargarVehiculosOrden
);

document.addEventListener(
    "clientesActualizados",
    cargarClientesOrden
);

document.addEventListener(
    "vehiculosActualizados",
    cargarVehiculosOrden
);


// ===============================
// Inicialización
// ===============================

cargarClientesOrden();
mostrarOrdenes();
