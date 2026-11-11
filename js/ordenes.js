const formularioOrden = document.getElementById("orden-form");
const selectClienteOrden = document.getElementById("orden-cliente");
const selectVehiculoOrden = document.getElementById("orden-vehiculo");
const inputFechaOrden = document.getElementById("orden-fecha");
const inputServicioOrden = document.getElementById("orden-servicio");
const inputDescripcionOrden = document.getElementById("orden-descripcion");
const tablaOrdenes = document.getElementById("ordenes-table-body");
const cantidadOrdenes = document.getElementById("cantidad-ordenes");
const mensajeSinOrdenes = document.getElementById("sin-ordenes");

function obtenerOrdenes() {
    return JSON.parse(localStorage.getItem("ordenes")) || [];
}

function nombreVehiculoOrden(vehiculo) {
    return `${vehiculo.marca} ${vehiculo.modelo} - ${vehiculo.placa}`;
}

function cargarOpcionesOrden(select, registros, mensaje, etiqueta) {
    const valorAnterior = select.value;
    const opciones = registros.map(registro => new Option(etiqueta(registro), registro.id));
    select.replaceChildren(new Option(mensaje, ""), ...opciones);
    if (registros.some(registro => registro.id === valorAnterior)) {
        select.value = valorAnterior;
    }
}

function cargarVehiculosOrden() {
    const clienteId = selectClienteOrden.value;
    const vehiculos = clienteId
        ? obtenerVehiculos().filter(vehiculo => vehiculo.propietarioId === clienteId)
        : [];
    let mensaje = "Seleccione un cliente primero";
    if (clienteId) {
        mensaje = vehiculos.length ? "Seleccione un vehículo" : "El cliente no tiene vehículos";
    }

    cargarOpcionesOrden(selectVehiculoOrden, vehiculos, mensaje, nombreVehiculoOrden);
    selectVehiculoOrden.disabled = vehiculos.length === 0;
}

function mostrarOrdenes() {
    const ordenes = obtenerOrdenes();
    tablaOrdenes.replaceChildren();
    cantidadOrdenes.textContent = `${ordenes.length} ${ordenes.length === 1 ? "orden" : "órdenes"}`;
    mensajeSinOrdenes.hidden = ordenes.length > 0;

    for (const orden of ordenes) {
        const fila = tablaOrdenes.insertRow();
        const valores = [
            orden.id,
            orden.nombreCliente,
            orden.nombreVehiculo,
            formatearFecha(orden.fechaIngreso),
            orden.servicio,
            orden.descripcion,
            orden.estado
        ];
        for (const valor of valores) {
            fila.insertCell().textContent = valor;
        }
    }
}

function cargarClientesOrden() {
    const clientes = obtenerClientes();
    const mensaje = clientes.length ? "Seleccione un cliente" : "No hay clientes registrados";
    cargarOpcionesOrden(selectClienteOrden, clientes, mensaje, cliente => cliente.nombre);
    cargarVehiculosOrden();
}

formularioOrden.addEventListener("submit", event => {
    event.preventDefault();

    const cliente = obtenerClientes().find(registro => registro.id === selectClienteOrden.value);
    const vehiculo = obtenerVehiculos().find(registro => registro.id === selectVehiculoOrden.value);
    const fechaIngreso = inputFechaOrden.value;
    const servicio = inputServicioOrden.value.trim();
    const descripcion = inputDescripcionOrden.value.trim();

    if (!cliente || !vehiculo || vehiculo.propietarioId !== cliente.id) {
        alert("Seleccione un cliente y uno de sus vehículos registrados.");
        cargarClientesOrden();
        return;
    }

    if (!fechaIngreso || !servicio || !descripcion) {
        alert("Complete la fecha de ingreso, el servicio y la descripción.");
        return;
    }

    const ordenes = obtenerOrdenes();
    ordenes.push({
        id: crypto.randomUUID(),
        clienteId: cliente.id,
        vehiculoId: vehiculo.id,
        nombreCliente: cliente.nombre,
        nombreVehiculo: nombreVehiculoOrden(vehiculo),
        fechaIngreso,
        servicio,
        descripcion,
        estado: "Recibido"
    });

    try {
        localStorage.setItem("ordenes", JSON.stringify(ordenes));
    } catch {
        alert("No se pudo guardar la orden en el navegador.");
        return;
    }

    formularioOrden.reset();
    cargarVehiculosOrden();
    mostrarOrdenes();
    document.dispatchEvent(new Event("ordenesActualizadas"));
});

selectClienteOrden.addEventListener("change", cargarVehiculosOrden);
document.addEventListener("clientesActualizados", cargarClientesOrden);
document.addEventListener("vehiculosActualizados", cargarVehiculosOrden);

cargarClientesOrden();
mostrarOrdenes();
