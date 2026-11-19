
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

        // Información de la orden
        const valores = [
            orden.id,
            orden.nombreCliente,
            orden.nombreVehiculo,
            formatearFecha(orden.fechaIngreso),
            orden.servicio,
            orden.descripcion,
            estadoActual
        ];

        for (const valor of valores) {
            fila.insertCell().textContent = valor;
        }

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
// Registrar nueva orden
// ===============================

formularioOrden.addEventListener("submit", event => {
    event.preventDefault();

    const cliente = obtenerClientes().find(
        registro => registro.id === selectClienteOrden.value
    );

    const vehiculo = obtenerVehiculos().find(
        registro => registro.id === selectVehiculoOrden.value
    );

    const fechaIngreso = inputFechaOrden.value;
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
            "Complete la fecha de ingreso, el servicio y la descripción."
        );
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
        estado: "Recibido"
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
