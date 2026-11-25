// ===============================
// Elementos del DOM
// ===============================

const formularioCliente =
    document.getElementById("cliente-form");

const inputId =
    document.getElementById("cliente-id");

const inputNombre =
    document.getElementById("nombre");

const inputTelefono =
    document.getElementById("telefono");

const inputCorreo =
    document.getElementById("correo");

const tablaClientes =
    document.getElementById("clientes-table-body");

const mensajeSinClientes =
    document.getElementById("sin-clientes");

const cantidadClientes =
    document.getElementById("cantidad-clientes");

const tituloFormulario =
    document.getElementById("form-title");

const botonGuardar =
    document.getElementById("guardar-cliente");

const botonCancelar =
    document.getElementById("cancelar-edicion");


// ===============================
// Obtener clientes
// ===============================

function obtenerClientes() {

    return JSON.parse(
        localStorage.getItem("clientes")
    ) || [];

}


// ===============================
// Guardar clientes
// ===============================

function guardarClientes(clientes) {

    localStorage.setItem(
        "clientes",
        JSON.stringify(clientes)
    );

    document.dispatchEvent(
        new Event("clientesActualizados")
    );

}


// ===============================
// Mostrar clientes
// ===============================

function mostrarClientes() {

    const clientes = obtenerClientes();

    tablaClientes.innerHTML = "";


    cantidadClientes.textContent =
        `${clientes.length} ${
            clientes.length === 1
                ? "cliente"
                : "clientes"
        }`;


    if (clientes.length === 0) {

        mensajeSinClientes.style.display = "block";
        return;

    }


    mensajeSinClientes.style.display = "none";


    clientes.forEach((cliente) => {

        const fila =
            document.createElement("tr");


        fila.innerHTML = `
            <td>${cliente.nombre}</td>
            <td>${cliente.telefono}</td>
            <td>${cliente.correo}</td>

            <td>
                <button
                    class="edit-button"
                    data-id="${cliente.id}"
                >
                    Editar
                </button>

                <button
                    class="delete-button"
                    data-id="${cliente.id}"
                >
                    Eliminar
                </button>
            </td>
        `;


        tablaClientes.appendChild(fila);

    });

}


// ===============================
// Validaciones de cliente
// ===============================

function esCorreoValido(correo) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correo);
}

function esTelefonoValido(telefono) {
    if (!/^[+\d\s().-]+$/.test(telefono)) {
        return false;
    }

    const soloDigitos = telefono.replace(/\D/g, "");
    return soloDigitos.length >= 7 && soloDigitos.length <= 15;
}


// ===============================
// Crear o actualizar cliente
// ===============================

formularioCliente.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const nombre =
            inputNombre.value.trim();

        const telefono =
            inputTelefono.value.trim();

        const correo =
            inputCorreo.value.trim();


        if (
            nombre === "" ||
            telefono === "" ||
            correo === ""
        ) {

            alert(
                "Por favor complete todos los campos obligatorios sin dejar valores vacíos."
            );

            return;

        }


        if (!esTelefonoValido(telefono)) {

            alert(
                "Ingrese un número telefónico válido (por ejemplo: 8888-8888 o +506 8888-8888)."
            );

            return;

        }


        if (!esCorreoValido(correo)) {

            alert(
                "Ingrese un correo electrónico con un formato válido (por ejemplo: cliente@correo.com)."
            );

            return;

        }


        const clientes = obtenerClientes();

        const idExistente = inputId.value;


        // Editar
        if (idExistente) {

            const indice =
                clientes.findIndex(
                    cliente =>
                        cliente.id === idExistente
                );


            if (indice === -1) {

                alert(
                    "No se encontró el cliente que desea editar."
                );

                limpiarFormulario();
                mostrarClientes();
                return;

            }


            clientes[indice] = {

                ...clientes[indice],

                nombre,
                telefono,
                correo

            };

        }

        // Crear
        else {

            const nuevoCliente = {

                id: crypto.randomUUID(),

                nombre,
                telefono,
                correo

            };


            clientes.push(nuevoCliente);

        }


        guardarClientes(clientes);

        limpiarFormulario();

        mostrarClientes();

    }
);


// ===============================
// Acciones de tabla
// ===============================

tablaClientes.addEventListener(
    "click",
    (event) => {

        const elemento = event.target;

        const idCliente =
            elemento.dataset.id;


        if (!idCliente) {
            return;
        }


        // Editar
        if (
            elemento.classList.contains(
                "edit-button"
            )
        ) {

            editarCliente(idCliente);

        }


        // Eliminar
        if (
            elemento.classList.contains(
                "delete-button"
            )
        ) {

            eliminarCliente(idCliente);

        }

    }
);


// ===============================
// Editar cliente
// ===============================

function editarCliente(id) {

    const clientes = obtenerClientes();

    const cliente =
        clientes.find(
            cliente => cliente.id === id
        );


    if (!cliente) {
        return;
    }


    inputId.value =
        cliente.id;

    inputNombre.value =
        cliente.nombre;

    inputTelefono.value =
        cliente.telefono;

    inputCorreo.value =
        cliente.correo;


    tituloFormulario.textContent =
        "Editar cliente";

    botonGuardar.textContent =
        "Guardar cambios";

    botonCancelar.classList.remove(
        "hidden"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ===============================
// Verificar registros asociados
// ===============================

function obtenerRegistrosAsociadosCliente(clienteId) {

    const vehiculos = JSON.parse(
        localStorage.getItem("vehiculos")
    ) || [];

    const citas = JSON.parse(
        localStorage.getItem("citas")
    ) || [];

    const ordenes = JSON.parse(
        localStorage.getItem("ordenes")
    ) || [];

    const vehiculosCliente = vehiculos.filter(
        vehiculo => vehiculo.propietarioId === clienteId
    );

    const idsVehiculosCliente = new Set(
        vehiculosCliente.map(vehiculo => vehiculo.id)
    );

    const tieneVehiculos = vehiculosCliente.length > 0;

    const tieneCitas = citas.some(
        cita =>
            cita.clienteId === clienteId ||
            idsVehiculosCliente.has(cita.vehiculoId)
    );

    const tieneOrdenes = ordenes.some(
        orden =>
            orden.clienteId === clienteId ||
            idsVehiculosCliente.has(orden.vehiculoId)
    );

    const relaciones = [];

    if (tieneVehiculos) {
        relaciones.push("vehículos");
    }

    if (tieneCitas) {
        relaciones.push("citas");
    }

    if (tieneOrdenes) {
        relaciones.push("órdenes de servicio");
    }

    return relaciones;

}


// ===============================
// Eliminar cliente
// ===============================

function eliminarCliente(id) {

    const relaciones = obtenerRegistrosAsociadosCliente(id);

    if (relaciones.length > 0) {

        alert(
            `No se puede eliminar este cliente porque tiene registros asociados: ${relaciones.join(", ")}.`
        );

        return;

    }


    const confirmar =
        confirm(
            "¿Desea eliminar este cliente?"
        );


    if (!confirmar) {
        return;
    }


    let clientes = obtenerClientes();


    clientes =
        clientes.filter(
            cliente => cliente.id !== id
        );


    guardarClientes(clientes);

    mostrarClientes();


    if (inputId.value === id) {
        limpiarFormulario();
    }

}


// ===============================
// Limpiar formulario
// ===============================

function limpiarFormulario() {

    formularioCliente.reset();

    inputId.value = "";


    tituloFormulario.textContent =
        "Registrar cliente";

    botonGuardar.textContent =
        "Guardar cliente";

    botonCancelar.classList.add(
        "hidden"
    );

}


// ===============================
// Cancelar edición
// ===============================

botonCancelar.addEventListener(
    "click",
    limpiarFormulario
);


// ===============================
// Inicio
// ===============================

mostrarClientes();