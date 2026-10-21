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

    const totalClientes =
        document.getElementById("total-clientes");

    if (totalClientes) {
        totalClientes.textContent = clientes.length;
    }

}


// Permite actualizar dashboard
// cuando clientes.js modifica información

document.addEventListener(
    "clientesActualizados",
    actualizarDashboard
);