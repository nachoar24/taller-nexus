// ===============================
// Elementos del DOM
// ===============================

const formularioCita =
    document.getElementById("cita-form");

const inputCitaId =
    document.getElementById("cita-id");

const selectClienteCita =
    document.getElementById("cita-cliente");

const selectVehiculoCita =
    document.getElementById("cita-vehiculo");

const inputFechaCita =
    document.getElementById("cita-fecha");

const inputHoraCita =
    document.getElementById("cita-hora");

const inputServicioCita =
    document.getElementById("cita-servicio");

const inputObservacionesCita =
    document.getElementById("cita-observaciones");

const tablaCitas =
    document.getElementById("citas-table-body");

const mensajeSinCitas =
    document.getElementById("sin-citas");

const cantidadCitas =
    document.getElementById("cantidad-citas");

const tituloFormularioCita =
    document.getElementById("cita-form-title");

const botonGuardarCita =
    document.getElementById("guardar-cita");

const botonCancelarCita =
    document.getElementById("cancelar-edicion-cita");


// ===============================
// Obtener información
// ===============================

function obtenerCitas() {

    return JSON.parse(
        localStorage.getItem("citas")
    ) || [];

}


function obtenerClientesCitas() {

    return JSON.parse(
        localStorage.getItem("clientes")
    ) || [];

}


function obtenerVehiculosCitas() {

    return JSON.parse(
        localStorage.getItem("vehiculos")
    ) || [];

}


// ===============================
// Guardar citas
// ===============================

function guardarCitas(citas) {

    localStorage.setItem(
        "citas",
        JSON.stringify(citas)
    );


    document.dispatchEvent(
        new Event("citasActualizadas")
    );

}


// ===============================
// Cargar clientes
// ===============================

function cargarClientesCita() {

    const clientes =
        obtenerClientesCitas();

    const valorActual =
        selectClienteCita.value;


    selectClienteCita.innerHTML = `
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


        selectClienteCita.appendChild(
            opcion
        );

    });


    const clienteExiste =
        clientes.some(
            cliente =>
                cliente.id === valorActual
        );


    if (clienteExiste) {

        selectClienteCita.value =
            valorActual;

    }

}


// ===============================
// Cargar vehículos del cliente
// ===============================

function cargarVehiculosCita(
    clienteId,
    vehiculoSeleccionado = ""
) {

    const vehiculos =
        obtenerVehiculosCitas();


    selectVehiculoCita.innerHTML = `
        <option value="">
            Seleccione un vehículo
        </option>
    `;


    if (!clienteId) {
        return;
    }


    const vehiculosCliente =
        vehiculos.filter(
            vehiculo =>
                vehiculo.propietarioId ===
                clienteId
        );


    vehiculosCliente.forEach(
        (vehiculo) => {

            const opcion =
                document.createElement(
                    "option"
                );


            opcion.value =
                vehiculo.id;

            opcion.textContent =
                `${vehiculo.marca} ${vehiculo.modelo} - ${vehiculo.placa}`;


            selectVehiculoCita.appendChild(
                opcion
            );

        }
    );


    if (vehiculoSeleccionado) {

        selectVehiculoCita.value =
            vehiculoSeleccionado;

    }

}


// ===============================
// Cambio de cliente
// ===============================

selectClienteCita.addEventListener(
    "change",
    () => {

        cargarVehiculosCita(
            selectClienteCita.value
        );

    }
);


// ===============================
// Mostrar citas
// ===============================

function mostrarCitas() {

    const citas =
        obtenerCitas();

    const clientes =
        obtenerClientesCitas();

    const vehiculos =
        obtenerVehiculosCitas();


    tablaCitas.innerHTML = "";


    cantidadCitas.textContent =
        `${citas.length} ${
            citas.length === 1
                ? "cita"
                : "citas"
        }`;


    if (citas.length === 0) {

        mensajeSinCitas.style.display =
            "block";

        return;

    }


    mensajeSinCitas.style.display =
        "none";


    citas.forEach((cita) => {

        const cliente =
            clientes.find(
                cliente =>
                    cliente.id ===
                    cita.clienteId
            );


        const vehiculo =
            vehiculos.find(
                vehiculo =>
                    vehiculo.id ===
                    cita.vehiculoId
            );


        const nombreCliente =
            cliente
                ? cliente.nombre
                : "Cliente no disponible";


        const nombreVehiculo =
            vehiculo
                ? `${vehiculo.marca} ${vehiculo.modelo} - ${vehiculo.placa}`
                : "Vehículo no disponible";


        const fila =
            document.createElement("tr");


        fila.innerHTML = `
            <td>${nombreCliente}</td>

            <td>${nombreVehiculo}</td>

            <td>${formatearFecha(cita.fecha)}</td>

            <td>${cita.hora}</td>

            <td>${cita.servicio}</td>

            <td>

                <button
                    class="edit-button cita-edit-button"
                    data-id="${cita.id}"
                >
                    Editar
                </button>

                <button
                    class="delete-button cita-delete-button"
                    data-id="${cita.id}"
                >
                    Eliminar
                </button>

            </td>
        `;


        tablaCitas.appendChild(fila);

    });

}


// ===============================
// Formatear fecha
// ===============================

function formatearFecha(fecha) {

    if (!fecha) {
        return "";
    }


    const fechaLocal =
        new Date(
            `${fecha}T00:00:00`
        );


    return fechaLocal.toLocaleDateString(
        "es-CR"
    );

}


// ===============================
// Crear o actualizar cita
// ===============================

formularioCita.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const clienteId =
            selectClienteCita.value;

        const vehiculoId =
            selectVehiculoCita.value;

        const fecha =
            inputFechaCita.value;

        const hora =
            inputHoraCita.value;

        const servicio =
            inputServicioCita.value.trim();

        const observaciones =
            inputObservacionesCita.value.trim();


        if (
            clienteId === "" ||
            vehiculoId === "" ||
            fecha === "" ||
            hora === "" ||
            servicio === ""
        ) {

            alert(
                "Por favor complete todos los campos obligatorios."
            );

            return;

        }


        const citas =
            obtenerCitas();

        const idExistente =
            inputCitaId.value;


        // Editar cita
        if (idExistente) {

            const indice =
                citas.findIndex(
                    cita =>
                        cita.id ===
                        idExistente
                );


            if (indice !== -1) {

                citas[indice] = {

                    ...citas[indice],

                    clienteId,
                    vehiculoId,
                    fecha,
                    hora,
                    servicio,
                    observaciones

                };

            }

        }

        // Crear cita
        else {

            const nuevaCita = {

                id: crypto.randomUUID(),

                clienteId,
                vehiculoId,
                fecha,
                hora,
                servicio,
                observaciones

            };


            citas.push(
                nuevaCita
            );

        }


        guardarCitas(
            citas
        );

        limpiarFormularioCita();

        mostrarCitas();

    }
);


// ===============================
// Acciones de tabla
// ===============================

tablaCitas.addEventListener(
    "click",
    (event) => {

        const elemento =
            event.target;

        const idCita =
            elemento.dataset.id;


        if (!idCita) {
            return;
        }


        if (
            elemento.classList.contains(
                "cita-edit-button"
            )
        ) {

            editarCita(
                idCita
            );

        }


        if (
            elemento.classList.contains(
                "cita-delete-button"
            )
        ) {

            eliminarCita(
                idCita
            );

        }

    }
);


// ===============================
// Editar cita
// ===============================

function editarCita(id) {

    const citas =
        obtenerCitas();


    const cita =
        citas.find(
            cita =>
                cita.id === id
        );


    if (!cita) {
        return;
    }


    inputCitaId.value =
        cita.id;

    selectClienteCita.value =
        cita.clienteId;


    cargarVehiculosCita(
        cita.clienteId,
        cita.vehiculoId
    );


    inputFechaCita.value =
        cita.fecha;

    inputHoraCita.value =
        cita.hora;

    inputServicioCita.value =
        cita.servicio;

    inputObservacionesCita.value =
        cita.observaciones || "";


    tituloFormularioCita.textContent =
        "Editar cita";

    botonGuardarCita.textContent =
        "Guardar cambios";

    botonCancelarCita.classList.remove(
        "hidden"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ===============================
// Eliminar cita
// ===============================

function eliminarCita(id) {

    const confirmar =
        confirm(
            "¿Desea eliminar esta cita?"
        );


    if (!confirmar) {
        return;
    }


    let citas =
        obtenerCitas();


    citas =
        citas.filter(
            cita =>
                cita.id !== id
        );


    guardarCitas(
        citas
    );

    mostrarCitas();


    if (
        inputCitaId.value === id
    ) {

        limpiarFormularioCita();

    }

}


// ===============================
// Limpiar formulario
// ===============================

function limpiarFormularioCita() {

    formularioCita.reset();

    inputCitaId.value = "";


    selectVehiculoCita.innerHTML = `
        <option value="">
            Seleccione un vehículo
        </option>
    `;


    tituloFormularioCita.textContent =
        "Programar cita";

    botonGuardarCita.textContent =
        "Guardar cita";

    botonCancelarCita.classList.add(
        "hidden"
    );

}


// ===============================
// Cancelar edición
// ===============================

botonCancelarCita.addEventListener(
    "click",
    limpiarFormularioCita
);


// ===============================
// Sincronización con Clientes
// ===============================

document.addEventListener(
    "clientesActualizados",
    () => {

        cargarClientesCita();

        mostrarCitas();

    }
);


// ===============================
// Sincronización con Vehículos
// ===============================

document.addEventListener(
    "vehiculosActualizados",
    () => {

        cargarVehiculosCita(
            selectClienteCita.value,
            selectVehiculoCita.value
        );

        mostrarCitas();

    }
);


// ===============================
// Inicio
// ===============================

cargarClientesCita();

mostrarCitas();