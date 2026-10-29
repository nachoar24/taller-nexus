// ===============================
// Elementos del DOM
// ===============================

const formularioVehiculo =
    document.getElementById("vehiculo-form");

const inputVehiculoId =
    document.getElementById("vehiculo-id");

const selectPropietario =
    document.getElementById("vehiculo-propietario");

const inputMarca =
    document.getElementById("vehiculo-marca");

const inputModelo =
    document.getElementById("vehiculo-modelo");

const inputAnio =
    document.getElementById("vehiculo-anio");

const inputPlaca =
    document.getElementById("vehiculo-placa");

const tablaVehiculos =
    document.getElementById("vehiculos-table-body");

const mensajeSinVehiculos =
    document.getElementById("sin-vehiculos");

const cantidadVehiculos =
    document.getElementById("cantidad-vehiculos");

const tituloFormularioVehiculo =
    document.getElementById("vehiculo-form-title");

const botonGuardarVehiculo =
    document.getElementById("guardar-vehiculo");

const botonCancelarVehiculo =
    document.getElementById("cancelar-edicion-vehiculo");


// ===============================
// Obtener información
// ===============================

function obtenerVehiculos() {

    return JSON.parse(
        localStorage.getItem("vehiculos")
    ) || [];

}


function obtenerClientesVehiculos() {

    return JSON.parse(
        localStorage.getItem("clientes")
    ) || [];

}


// ===============================
// Guardar vehículos
// ===============================

function guardarVehiculos(vehiculos) {

    localStorage.setItem(
        "vehiculos",
        JSON.stringify(vehiculos)
    );


    document.dispatchEvent(
        new Event("vehiculosActualizados")
    );

}


// ===============================
// Cargar clientes en selector
// ===============================

function cargarPropietarios() {

    const clientes =
        obtenerClientesVehiculos();

    const valorActual =
        selectPropietario.value;


    selectPropietario.innerHTML = `
        <option value="">
            Seleccione un cliente
        </option>
    `;


    clientes.forEach((cliente) => {

        const opcion =
            document.createElement("option");

        opcion.value =
            cliente.id;

        opcion.textContent =
            cliente.nombre;

        selectPropietario.appendChild(opcion);

    });


    // Mantener selección si todavía existe
    const existeSeleccion =
        clientes.some(
            cliente =>
                cliente.id === valorActual
        );


    if (existeSeleccion) {
        selectPropietario.value =
            valorActual;
    }

}


// ===============================
// Mostrar vehículos
// ===============================

function mostrarVehiculos() {

    const vehiculos =
        obtenerVehiculos();

    const clientes =
        obtenerClientesVehiculos();


    tablaVehiculos.innerHTML = "";


    cantidadVehiculos.textContent =
        `${vehiculos.length} ${
            vehiculos.length === 1
                ? "vehículo"
                : "vehículos"
        }`;


    if (vehiculos.length === 0) {

        mensajeSinVehiculos.style.display =
            "block";

        return;

    }


    mensajeSinVehiculos.style.display =
        "none";


    vehiculos.forEach((vehiculo) => {

        const propietario =
            clientes.find(
                cliente =>
                    cliente.id ===
                    vehiculo.propietarioId
            );


        const nombrePropietario =
            propietario
                ? propietario.nombre
                : "Cliente no disponible";


        const fila =
            document.createElement("tr");


        fila.innerHTML = `
            <td>${nombrePropietario}</td>

            <td>
                ${vehiculo.marca}
                ${vehiculo.modelo}
            </td>

            <td>${vehiculo.anio}</td>

            <td>${vehiculo.placa}</td>

            <td>

                <button
                    class="edit-button vehicle-edit-button"
                    data-id="${vehiculo.id}"
                >
                    Editar
                </button>

                <button
                    class="delete-button vehicle-delete-button"
                    data-id="${vehiculo.id}"
                >
                    Eliminar
                </button>

            </td>
        `;


        tablaVehiculos.appendChild(fila);

    });

}


// ===============================
// Crear o actualizar vehículo
// ===============================

formularioVehiculo.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const propietarioId =
            selectPropietario.value;

        const marca =
            inputMarca.value.trim();

        const modelo =
            inputModelo.value.trim();

        const anio =
            inputAnio.value.trim();

        const placa =
            inputPlaca.value
                .trim()
                .toUpperCase();


        if (
            propietarioId === "" ||
            marca === "" ||
            modelo === "" ||
            anio === "" ||
            placa === ""
        ) {

            alert(
                "Por favor complete todos los campos."
            );

            return;

        }


        const vehiculos =
            obtenerVehiculos();

        const idExistente =
            inputVehiculoId.value;


        // Validar placas duplicadas
        const placaDuplicada =
            vehiculos.some(
                vehiculo =>
                    vehiculo.placa === placa &&
                    vehiculo.id !== idExistente
            );


        if (placaDuplicada) {

            alert(
                "Ya existe un vehículo registrado con esa placa."
            );

            return;

        }


        // Editar vehículo
        if (idExistente) {

            const indice =
                vehiculos.findIndex(
                    vehiculo =>
                        vehiculo.id ===
                        idExistente
                );


            if (indice !== -1) {

                vehiculos[indice] = {

                    ...vehiculos[indice],

                    propietarioId,
                    marca,
                    modelo,
                    anio,
                    placa

                };

            }

        }

        // Crear vehículo
        else {

            const nuevoVehiculo = {

                id: crypto.randomUUID(),

                propietarioId,
                marca,
                modelo,
                anio,
                placa

            };


            vehiculos.push(
                nuevoVehiculo
            );

        }


        guardarVehiculos(
            vehiculos
        );

        limpiarFormularioVehiculo();

        mostrarVehiculos();

    }
);


// ===============================
// Acciones de tabla
// ===============================

tablaVehiculos.addEventListener(
    "click",
    (event) => {

        const elemento =
            event.target;

        const idVehiculo =
            elemento.dataset.id;


        if (!idVehiculo) {
            return;
        }


        if (
            elemento.classList.contains(
                "vehicle-edit-button"
            )
        ) {

            editarVehiculo(
                idVehiculo
            );

        }


        if (
            elemento.classList.contains(
                "vehicle-delete-button"
            )
        ) {

            eliminarVehiculo(
                idVehiculo
            );

        }

    }
);


// ===============================
// Editar vehículo
// ===============================

function editarVehiculo(id) {

    const vehiculos =
        obtenerVehiculos();


    const vehiculo =
        vehiculos.find(
            vehiculo =>
                vehiculo.id === id
        );


    if (!vehiculo) {
        return;
    }


    inputVehiculoId.value =
        vehiculo.id;

    selectPropietario.value =
        vehiculo.propietarioId;

    inputMarca.value =
        vehiculo.marca;

    inputModelo.value =
        vehiculo.modelo;

    inputAnio.value =
        vehiculo.anio;

    inputPlaca.value =
        vehiculo.placa;


    tituloFormularioVehiculo.textContent =
        "Editar vehículo";

    botonGuardarVehiculo.textContent =
        "Guardar cambios";

    botonCancelarVehiculo.classList.remove(
        "hidden"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ===============================
// Eliminar vehículo
// ===============================

function eliminarVehiculo(id) {

    const confirmar =
        confirm(
            "¿Desea eliminar este vehículo?"
        );


    if (!confirmar) {
        return;
    }


    let vehiculos =
        obtenerVehiculos();


    vehiculos =
        vehiculos.filter(
            vehiculo =>
                vehiculo.id !== id
        );


    guardarVehiculos(
        vehiculos
    );

    mostrarVehiculos();


    if (
        inputVehiculoId.value === id
    ) {

        limpiarFormularioVehiculo();

    }

}


// ===============================
// Limpiar formulario
// ===============================

function limpiarFormularioVehiculo() {

    formularioVehiculo.reset();

    inputVehiculoId.value = "";


    tituloFormularioVehiculo.textContent =
        "Registrar vehículo";

    botonGuardarVehiculo.textContent =
        "Guardar vehículo";

    botonCancelarVehiculo.classList.add(
        "hidden"
    );

}


// ===============================
// Cancelar edición
// ===============================

botonCancelarVehiculo.addEventListener(
    "click",
    limpiarFormularioVehiculo
);


// ===============================
// Actualización de clientes
// ===============================

document.addEventListener(
    "clientesActualizados",
    () => {

        cargarPropietarios();

        mostrarVehiculos();

    }
);


// ===============================
// Inicio
// ===============================

cargarPropietarios();

mostrarVehiculos();