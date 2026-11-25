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


function obtenerRegistrosAsociadosVehiculo(vehiculoId) {

    const citas = JSON.parse(
        localStorage.getItem("citas")
    ) || [];

    const ordenes = JSON.parse(
        localStorage.getItem("ordenes")
    ) || [];

    const tieneCitas = citas.some(
        cita => cita.vehiculoId === vehiculoId
    );

    const ordenesVehiculo = ordenes.filter(
        orden => orden.vehiculoId === vehiculoId
    );

    const tieneOrdenesActivas = ordenesVehiculo.some(
        orden => orden.estado !== "Entregado"
    );

    const tieneHistorial = ordenesVehiculo.some(
        orden => orden.estado === "Entregado"
    );

    const relaciones = [];

    if (tieneCitas) {
        relaciones.push("citas");
    }

    if (tieneOrdenesActivas) {
        relaciones.push("órdenes de servicio activas");
    }

    if (tieneHistorial) {
        relaciones.push("órdenes entregadas en el historial");
    }

    return relaciones;

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

        const celdaPropietario = fila.insertCell();
        celdaPropietario.textContent = nombrePropietario;

        const celdaVehiculo = fila.insertCell();
        celdaVehiculo.textContent = `${vehiculo.marca} ${vehiculo.modelo}`;

        const celdaAnio = fila.insertCell();
        celdaAnio.textContent = vehiculo.anio;

        const celdaPlaca = fila.insertCell();
        celdaPlaca.textContent = vehiculo.placa;

        const celdaAcciones = fila.insertCell();

        const botonEditar = document.createElement("button");
        botonEditar.type = "button";
        botonEditar.className = "edit-button vehicle-edit-button";
        botonEditar.dataset.id = vehiculo.id;
        botonEditar.textContent = "Editar";

        const botonEliminar = document.createElement("button");
        botonEliminar.type = "button";
        botonEliminar.className = "delete-button vehicle-delete-button";
        botonEliminar.dataset.id = vehiculo.id;
        botonEliminar.textContent = "Eliminar";

        celdaAcciones.appendChild(botonEditar);
        celdaAcciones.appendChild(botonEliminar);

        tablaVehiculos.appendChild(fila);

    });

}


// ===============================
// Validaciones de vehículo
// ===============================

const ANIO_MINIMO_VEHICULO = 1900;

function obtenerAnioMaximoVehiculo() {
    return new Date().getFullYear() + 1;
}

function esAnioVehiculoValido(anioTexto) {
    if (!/^\d{4}$/.test(anioTexto)) {
        return false;
    }

    const anioNumero = Number(anioTexto);
    return (
        Number.isInteger(anioNumero) &&
        anioNumero >= ANIO_MINIMO_VEHICULO &&
        anioNumero <= obtenerAnioMaximoVehiculo()
    );
}

function normalizarPlacaParaComparacion(placa) {
    return String(placa || "")
        .trim()
        .toUpperCase()
        .replace(/[\s-]+/g, "");
}

function formatearPlaca(placa) {
    return String(placa || "")
        .trim()
        .toUpperCase()
        .replace(/\s+/g, " ");
}


// ===============================
// Crear o actualizar vehículo
// ===============================

formularioVehiculo.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const propietarioId =
            selectPropietario.value.trim();

        const marca =
            inputMarca.value.trim();

        const modelo =
            inputModelo.value.trim();

        const anio =
            inputAnio.value.trim();

        const placa =
            formatearPlaca(inputPlaca.value);

        const placaNormalizada =
            normalizarPlacaParaComparacion(placa);


        if (
            propietarioId === "" ||
            marca === "" ||
            modelo === "" ||
            anio === "" ||
            placaNormalizada === ""
        ) {

            alert(
                "Por favor complete todos los campos obligatorios sin dejar valores vacíos."
            );

            return;

        }


        const clientes =
            obtenerClientesVehiculos();

        const propietarioExiste =
            clientes.some(
                cliente => cliente.id === propietarioId
            );

        if (!propietarioExiste) {

            alert(
                "El propietario seleccionado no existe. Seleccione un cliente válido."
            );

            cargarPropietarios();
            return;

        }


        if (!esAnioVehiculoValido(anio)) {

            alert(
                `Ingrese un año válido (número entero entre ${ANIO_MINIMO_VEHICULO} y ${obtenerAnioMaximoVehiculo()}).`
            );

            return;

        }


        const vehiculos =
            obtenerVehiculos();

        const idExistente =
            inputVehiculoId.value;


        // Validar placas duplicadas usando placa normalizada
        const placaDuplicada =
            vehiculos.some(
                vehiculo =>
                    normalizarPlacaParaComparacion(vehiculo.placa) === placaNormalizada &&
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


            if (indice === -1) {

                alert(
                    "No se encontró el vehículo que desea editar."
                );

                limpiarFormularioVehiculo();
                mostrarVehiculos();
                return;

            }


            const vehiculoActual = vehiculos[indice];

            if (vehiculoActual.propietarioId !== propietarioId) {

                const relaciones =
                    obtenerRegistrosAsociadosVehiculo(idExistente);

                if (relaciones.length > 0) {

                    alert(
                        `No se puede cambiar el propietario de este vehículo porque tiene registros asociados: ${relaciones.join(", ")}.`
                    );

                    selectPropietario.value = vehiculoActual.propietarioId;
                    return;

                }

            }


            vehiculos[indice] = {

                ...vehiculoActual,

                propietarioId,
                marca,
                modelo,
                anio,
                placa

            };

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

    const relaciones =
        obtenerRegistrosAsociadosVehiculo(id);

    if (relaciones.length > 0) {

        alert(
            `No se puede eliminar este vehículo porque tiene registros asociados: ${relaciones.join(", ")}.`
        );

        return;

    }


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