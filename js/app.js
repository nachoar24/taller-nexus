// ===============================
// Navegación principal
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const botonesNavegacion =
        document.querySelectorAll(".nav-button");

    const secciones =
        document.querySelectorAll(".page-section");


    botonesNavegacion.forEach((boton) => {

        boton.addEventListener("click", () => {

            const seccionSeleccionada =
                boton.dataset.section;


            // Remover estado activo de botones
            botonesNavegacion.forEach((botonActual) => {
                botonActual.classList.remove("active");
            });


            // Ocultar todas las secciones
            secciones.forEach((seccion) => {
                seccion.classList.remove("active-section");
            });


            // Activar botón seleccionado
            boton.classList.add("active");


            // Mostrar sección correspondiente
            document
                .getElementById(seccionSeleccionada)
                .classList.add("active-section");

        });

    });


    // Cargar valores iniciales del Dashboard
    actualizarDashboard();

});


// ===============================
// Dashboard
// ===============================

function actualizarDashboard() {

    // Obtener información almacenada
    const clientes =
        JSON.parse(localStorage.getItem("clientes")) || [];

    const vehiculos =
        JSON.parse(localStorage.getItem("vehiculos")) || [];

    const citas =
        JSON.parse(localStorage.getItem("citas")) || [];


    // Obtener elementos del Dashboard
    const totalClientes =
        document.getElementById("total-clientes");

    const totalVehiculos =
        document.getElementById("total-vehiculos");

    const totalCitas =
        document.getElementById("total-citas");


    // Actualizar contador de clientes
    if (totalClientes) {
        totalClientes.textContent = clientes.length;
    }


    // Actualizar contador de vehículos
    if (totalVehiculos) {
        totalVehiculos.textContent = vehiculos.length;
    }


    // Actualizar contador de citas
    if (totalCitas) {
        totalCitas.textContent = citas.length;
    }

    document.getElementById("total-ordenes-activas").textContent =
        obtenerOrdenes().filter(orden => orden.estado !== "Entregado").length;

}


// ===============================
// Actualización automática
// ===============================

// Actualizar Dashboard cuando
// clientes.js modifica información
document.addEventListener(
    "clientesActualizados",
    actualizarDashboard
);


// Actualizar Dashboard cuando
// vehiculos.js modifica información
document.addEventListener(
    "vehiculosActualizados",
    actualizarDashboard
);


// Actualizar Dashboard cuando
// citas.js modifica información
document.addEventListener(
    "citasActualizadas",
    actualizarDashboard
);

document.addEventListener("ordenesActualizadas", actualizarDashboard);
