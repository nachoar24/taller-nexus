// ===============================
// Datos de demostración
// ===============================

const botonCargarDemo = document.getElementById("cargar-datos-demo");
const mensajeEstadoDemo = document.getElementById("demo-status-message");


// ===============================
// Utilidades de verificación
// ===============================

function leerColeccionDemo(clave) {
    try {
        const datos = JSON.parse(localStorage.getItem(clave));
        return Array.isArray(datos) ? datos : [];
    } catch {
        return [];
    }
}

function todasLasColeccionesEstanVacias() {
    const clientes = leerColeccionDemo("clientes");
    const vehiculos = leerColeccionDemo("vehiculos");
    const citas = leerColeccionDemo("citas");
    const ordenes = leerColeccionDemo("ordenes");

    return (
        clientes.length === 0 &&
        vehiculos.length === 0 &&
        citas.length === 0 &&
        ordenes.length === 0
    );
}


// ===============================
// Conjunto de datos ficticios
// ===============================

function crearDatosDemostracion() {
    const clientes = [
        {
            id: "CLI-DEMO-01",
            nombre: "Carlos Mendoza",
            telefono: "8800-1101",
            correo: "carlos.mendoza@ejemplo.com"
        },
        {
            id: "CLI-DEMO-02",
            nombre: "Sofía Valverde",
            telefono: "8800-2202",
            correo: "sofia.valverde@ejemplo.com"
        },
        {
            id: "CLI-DEMO-03",
            nombre: "Esteban Quirós",
            telefono: "8800-3303",
            correo: "esteban.quiros@ejemplo.com"
        }
    ];

    const vehiculos = [
        {
            id: "VEH-DEMO-01",
            propietarioId: "CLI-DEMO-01",
            marca: "Toyota",
            modelo: "Corolla",
            anio: "2020",
            placa: "ABC-101"
        },
        {
            id: "VEH-DEMO-02",
            propietarioId: "CLI-DEMO-01",
            marca: "Hyundai",
            modelo: "Tucson",
            anio: "2022",
            placa: "DEF-202"
        },
        {
            id: "VEH-DEMO-03",
            propietarioId: "CLI-DEMO-02",
            marca: "Honda",
            modelo: "Civic",
            anio: "2019",
            placa: "GHI-303"
        },
        {
            id: "VEH-DEMO-04",
            propietarioId: "CLI-DEMO-03",
            marca: "Suzuki",
            modelo: "Vitara",
            anio: "2023",
            placa: "JKL-404"
        }
    ];

    const citas = [
        {
            id: "CIT-DEMO-01",
            clienteId: "CLI-DEMO-01",
            vehiculoId: "VEH-DEMO-01",
            fecha: "2026-11-28",
            hora: "09:00",
            servicio: "Revisión preventiva de 50 000 km",
            observaciones: "Solicita revisar presión y desgaste de llantas."
        },
        {
            id: "CIT-DEMO-02",
            clienteId: "CLI-DEMO-02",
            vehiculoId: "VEH-DEMO-03",
            fecha: "2026-11-29",
            hora: "10:30",
            servicio: "Alineación y balanceo",
            observaciones: "Vibración leve al superar 80 km/h."
        },
        {
            id: "CIT-DEMO-03",
            clienteId: "CLI-DEMO-03",
            vehiculoId: "VEH-DEMO-04",
            fecha: "2026-12-01",
            hora: "14:00",
            servicio: "Cambio de aceite y filtros",
            observaciones: ""
        }
    ];

    const ordenes = [
        {
            id: "ORD-DEMO-01",
            clienteId: "CLI-DEMO-01",
            vehiculoId: "VEH-DEMO-01",
            nombreCliente: "Carlos Mendoza",
            nombreVehiculo: "Toyota Corolla - ABC-101",
            fechaIngreso: "2026-11-22",
            servicio: "Revisión de frenos",
            descripcion: "Cambio de pastillas delanteras y rectificación de discos.",
            estado: "En reparación"
        },
        {
            id: "ORD-DEMO-02",
            clienteId: "CLI-DEMO-02",
            vehiculoId: "VEH-DEMO-03",
            nombreCliente: "Sofía Valverde",
            nombreVehiculo: "Honda Civic - GHI-303",
            fechaIngreso: "2026-11-23",
            servicio: "Diagnóstico eléctrico",
            descripcion: "Revisión de batería, alternador y testigo en tablero.",
            estado: "En diagnóstico"
        },
        {
            id: "ORD-DEMO-03",
            clienteId: "CLI-DEMO-03",
            vehiculoId: "VEH-DEMO-04",
            nombreCliente: "Esteban Quirós",
            nombreVehiculo: "Suzuki Vitara - JKL-404",
            fechaIngreso: "2026-11-24",
            servicio: "Mantenimiento general",
            descripcion: "Cambio de aceite sintético, filtro de aire y revisión de fluidos.",
            estado: "Listo para entrega"
        },
        {
            id: "ORD-DEMO-04",
            clienteId: "CLI-DEMO-01",
            vehiculoId: "VEH-DEMO-01",
            nombreCliente: "Carlos Mendoza",
            nombreVehiculo: "Toyota Corolla - ABC-101",
            fechaIngreso: "2026-08-14",
            servicio: "Cambio de aceite",
            descripcion: "Cambio de aceite 5W-30 y reemplazo de filtro original.",
            estado: "Entregado"
        },
        {
            id: "ORD-DEMO-05",
            clienteId: "CLI-DEMO-01",
            vehiculoId: "VEH-DEMO-01",
            nombreCliente: "Carlos Mendoza",
            nombreVehiculo: "Toyota Corolla - ABC-101",
            fechaIngreso: "2026-10-05",
            servicio: "Alineación y rotación",
            descripcion: "Alineación computarizada y rotación de las cuatro llantas.",
            estado: "Entregado"
        },
        {
            id: "ORD-DEMO-06",
            clienteId: "CLI-DEMO-02",
            vehiculoId: "VEH-DEMO-03",
            nombreCliente: "Sofía Valverde",
            nombreVehiculo: "Honda Civic - GHI-303",
            fechaIngreso: "2026-09-18",
            servicio: "Cambio de batería",
            descripcion: "Instalación de batería nueva de 12V y prueba del sistema de carga.",
            estado: "Entregado"
        }
    ];

    return { clientes, vehiculos, citas, ordenes };
}


// ===============================
// Estado del botón en Dashboard
// ===============================

function actualizarEstadoBotonDemo() {
    if (!botonCargarDemo) {
        return;
    }

    const vacio = todasLasColeccionesEstanVacias();

    botonCargarDemo.disabled = !vacio;

    if (mensajeEstadoDemo) {
        mensajeEstadoDemo.textContent = vacio
            ? "Carga un conjunto de datos ficticios de ejemplo cuando el sistema está vacío."
            : "Ya existen registros en el sistema. La carga de datos de demostración solo está disponible con el entorno vacío.";
    }
}


// ===============================
// Refrescar módulos tras carga
// ===============================

function sincronizarModulosTrasDemo() {
    document.dispatchEvent(new Event("clientesActualizados"));
    document.dispatchEvent(new Event("vehiculosActualizados"));
    document.dispatchEvent(new Event("citasActualizadas"));
    document.dispatchEvent(new Event("ordenesActualizadas"));

    if (typeof mostrarClientes === "function") {
        mostrarClientes();
    }

    if (typeof cargarPropietarios === "function") {
        cargarPropietarios();
    }

    if (typeof mostrarVehiculos === "function") {
        mostrarVehiculos();
    }

    if (typeof cargarClientesCita === "function") {
        cargarClientesCita();
    }

    if (typeof mostrarCitas === "function") {
        mostrarCitas();
    }

    if (typeof cargarClientesOrden === "function") {
        cargarClientesOrden();
    }

    if (typeof mostrarOrdenes === "function") {
        mostrarOrdenes();
    }

    if (typeof cargarVehiculosHistorial === "function") {
        cargarVehiculosHistorial();
    }

    if (typeof actualizarDashboard === "function") {
        actualizarDashboard();
    }

    actualizarEstadoBotonDemo();
}


// ===============================
// Cargar datos de demostración
// ===============================

function cargarDatosDemostracion() {
    if (!todasLasColeccionesEstanVacias()) {
        alert(
            "No se pueden cargar los datos de demostración porque ya existen registros almacenados."
        );
        actualizarEstadoBotonDemo();
        return;
    }

    const confirmar = confirm(
        "¿Desea cargar los datos ficticios de demostración (3 clientes, 4 vehículos, 3 citas y 6 órdenes de servicio)?"
    );

    if (!confirmar) {
        return;
    }

    // Verificar nuevamente antes de escribir en localStorage
    if (!todasLasColeccionesEstanVacias()) {
        alert(
            "No se pueden cargar los datos de demostración porque ya existen registros almacenados."
        );
        actualizarEstadoBotonDemo();
        return;
    }

    const { clientes, vehiculos, citas, ordenes } = crearDatosDemostracion();

    try {
        localStorage.setItem("clientes", JSON.stringify(clientes));
        localStorage.setItem("vehiculos", JSON.stringify(vehiculos));
        localStorage.setItem("citas", JSON.stringify(citas));
        localStorage.setItem("ordenes", JSON.stringify(ordenes));
    } catch {
        alert("No se pudieron guardar los datos de demostración en el navegador.");
        return;
    }

    sincronizarModulosTrasDemo();

    alert("Los datos de demostración se cargaron correctamente.");
}


// ===============================
// Eventos e inicialización
// ===============================

if (botonCargarDemo) {
    botonCargarDemo.addEventListener("click", cargarDatosDemostracion);
}

document.addEventListener("clientesActualizados", actualizarEstadoBotonDemo);
document.addEventListener("vehiculosActualizados", actualizarEstadoBotonDemo);
document.addEventListener("citasActualizadas", actualizarEstadoBotonDemo);
document.addEventListener("ordenesActualizadas", actualizarEstadoBotonDemo);

actualizarEstadoBotonDemo();
