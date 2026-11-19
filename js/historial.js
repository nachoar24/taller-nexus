
// ===============================
// Historial de servicios por vehículo
// ===============================

const selectVehiculoHistorial =
    document.getElementById("historial-vehiculo");

const tablaHistorial =
    document.getElementById("historial-table-body");

const cantidadHistorial =
    document.getElementById("cantidad-historial");

const mensajeSinHistorial =
    document.getElementById("sin-historial");


// ===============================
// Cargar vehículos disponibles
// ===============================

function cargarVehiculosHistorial() {

    const vehiculos = obtenerVehiculos();
    const clientes = obtenerClientes();

    const seleccionAnterior =
        selectVehiculoHistorial.value;

    const mensaje = vehiculos.length
        ? "Seleccione un vehículo"
        : "No hay vehículos registrados";

    const opciones = vehiculos.map(vehiculo => {

        const propietario = clientes.find(
            cliente =>
                cliente.id === vehiculo.propietarioId
        );

        const nombrePropietario = propietario
            ? propietario.nombre
            : "Cliente no disponible";

        const etiqueta =
            `${vehiculo.marca} ${vehiculo.modelo} - ${vehiculo.placa} (${nombrePropietario})`;

        return new Option(etiqueta, vehiculo.id);

    });

    selectVehiculoHistorial.replaceChildren(
        new Option(mensaje, ""),
        ...opciones
    );

    // Mantener la selección si el vehículo existe
    if (vehiculos.some(
        vehiculo => vehiculo.id === seleccionAnterior
    )) {
        selectVehiculoHistorial.value =
            seleccionAnterior;
    }

    mostrarHistorial();
}


// ===============================
// Formatear fecha de ingreso
// ===============================

function formatearFechaHistorial(fecha) {

    if (!fecha) {
        return "";
    }

    const partes = fecha.split("-");

    if (partes.length !== 3) {
        return fecha;
    }

    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}


// ===============================
// Consultar servicios finalizados
// ===============================

function mostrarHistorial() {

    const vehiculoId =
        selectVehiculoHistorial.value;

    tablaHistorial.replaceChildren();

    // Sin vehículo seleccionado
    if (!vehiculoId) {

        cantidadHistorial.textContent = "0 servicios";

        mensajeSinHistorial.textContent =
            "Seleccione un vehículo para consultar su historial.";

        mensajeSinHistorial.style.display = "block";

        return;
    }

    // Filtrar órdenes entregadas del vehículo
    const servicios = obtenerOrdenes()
        .filter(orden =>
            orden.vehiculoId === vehiculoId &&
            orden.estado === "Entregado"
        )
        .sort((a, b) =>
            (b.fechaIngreso || "").localeCompare(
                a.fechaIngreso || ""
            )
        );

    // Actualizar contador
    cantidadHistorial.textContent =
        `${servicios.length} ${
            servicios.length === 1
                ? "servicio"
                : "servicios"
        }`;

    // Vehículo sin servicios finalizados
    if (servicios.length === 0) {

        mensajeSinHistorial.textContent =
            "Este vehículo aún no tiene servicios entregados.";

        mensajeSinHistorial.style.display = "block";

        return;
    }

    mensajeSinHistorial.style.display = "none";

    // Mostrar servicios del vehículo
    for (const orden of servicios) {

        const fila = tablaHistorial.insertRow();

        const valores = [
            formatearFechaHistorial(orden.fechaIngreso),
            orden.servicio,
            orden.descripcion,
            orden.estado,
            orden.id
        ];

        for (const valor of valores) {
            fila.insertCell().textContent = valor ?? "";
        }

    }
}


// ===============================
// Eventos de actualización
// ===============================

// Cambiar vehículo seleccionado
selectVehiculoHistorial.addEventListener(
    "change",
    mostrarHistorial
);

// Actualizar selector al modificar vehículos
document.addEventListener(
    "vehiculosActualizados",
    cargarVehiculosHistorial
);

// Actualizar nombres de propietarios
document.addEventListener(
    "clientesActualizados",
    cargarVehiculosHistorial
);

// Refrescar historial si cambia una orden
document.addEventListener(
    "ordenesActualizadas",
    mostrarHistorial
);


// ===============================
// Inicialización
// ===============================

cargarVehiculosHistorial();
