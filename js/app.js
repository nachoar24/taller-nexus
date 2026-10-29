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


    actualizarDashboard();

});


// ===============================
// Dashboard
// ===============================

function actualizarDashboard() {

    const clientes =
        JSON.parse(localStorage.getItem("clientes")) || [];

    const vehiculos =
        JSON.parse(localStorage.getItem("vehiculos")) || [];


    const totalClientes =
        document.getElementById("total-clientes");

    const totalVehiculos =
        document.getElementById("total-vehiculos");


    if (totalClientes) {
        totalClientes.textContent = clientes.length;
    }


    if (totalVehiculos) {
        totalVehiculos.textContent = vehiculos.length;
    }

}


// Permite actualizar dashboard
// cuando clientes.js modifica información

document.addEventListener(
    "clientesActualizados",
    actualizarDashboard
);

document.addEventListener(
    "vehiculosActualizados",
    actualizarDashboard
);