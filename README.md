# Taller Nexus

Prototipo web para la gestión de citas y órdenes de servicio de un taller automotriz.

## Curso

ISW-912 - Administración de Proyectos Informáticos

Universidad Técnica Nacional.

## Integrantes

- Ignacio Araya Rojas
- Felipe Carrera Araya

## Scrum Team

- **Product Owner / Developer:** Ignacio Araya Rojas
- **Scrum Master / Developer:** Felipe Carrera Araya

## Descripción

Taller Nexus es un prototipo web funcional orientado a pequeños talleres automotrices.

El sistema busca centralizar la gestión básica de clientes, vehículos, citas y órdenes de servicio, permitiendo dar seguimiento al estado de los trabajos y consultar el historial de servicios realizados a cada vehículo.

El proyecto se desarrolla como parte del Proyecto Incremental del curso ISW-912, utilizando Scrum como marco de trabajo.

## Product Goal

Desarrollar un prototipo web que permita a pequeños talleres automotrices centralizar la gestión básica de clientes, vehículos, citas y órdenes de servicio, facilitando el seguimiento del estado de los trabajos y la consulta del historial de atención de cada vehículo.

## Funcionalidades del proyecto

- Gestión de clientes
- Gestión de vehículos
- Gestión de citas
- Gestión de órdenes de servicio
- Seguimiento del estado de los trabajos
- Historial de servicios por vehículo
- Dashboard con información general

## Tecnologías

- HTML5
- CSS3
- JavaScript
- localStorage

## Alcance técnico

Taller Nexus se desarrolla como un prototipo web funcional sin backend ni base de datos externa.

La información se almacena localmente en el navegador mediante `localStorage`, permitiendo demostrar las funcionalidades del sistema sin necesidad de infraestructura adicional.

El prototipo está diseñado principalmente para un único usuario operativo: el encargado del taller.

No contempla autenticación real, sincronización entre dispositivos, facturación electrónica ni integraciones externas.

## Estructura del proyecto

```text
taller-nexus/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── clientes.js
│   ├── vehiculos.js
│   ├── citas.js
│   └── ordenes.js
└── assets/
    └── images/
```

## Product Backlog

El Product Backlog de Taller Nexus está compuesto por 13 historias de usuario relacionadas con los módulos principales del prototipo.

### Estado del Product Backlog

| Estado | Cantidad |
|---|---:|
| Completadas | 10 |
| En desarrollo incremental | 1 |
| Pendientes | 2 |
| **Total** | **13** |

### Historias completadas

- HU-01 — Registrar clientes
- HU-02 — Consultar clientes
- HU-03 — Modificar y eliminar clientes
- HU-04 — Registrar vehículos asociados a propietarios
- HU-05 — Consultar vehículos
- HU-06 — Modificar y eliminar vehículos
- HU-07 — Programar citas
- HU-08 — Consultar y modificar citas
- HU-09 — Crear órdenes de servicio
- HU-11 — Consultar órdenes de servicio

### Historia en desarrollo incremental

- HU-13 — Indicadores generales del Dashboard

### Historias pendientes

- HU-10 — Actualizar el estado de las órdenes de servicio
- HU-12 — Consultar historial de servicios por vehículo

El Product Backlog se revisa periódicamente para mantener las funcionalidades alineadas con el Product Goal.

## Estado del proyecto

**Semana 8 — Planificación temporal, estimaciones, cronograma de entregas y costos.**

**Estado de la semana:** Completada.

### Avance académico

Hasta el momento se han desarrollado las siguientes secciones del Expediente del Proyecto:

- Sección 00 — Portada e identificación del equipo
- Sección 01 — Problema, oportunidad, Product Goal y Project Charter
- Sección 02 — Contexto organizacional y restricciones
- Sección 03 — Interesados y mapa de stakeholders
- Sección 04 — Ciclo de vida y Sprint 1
- Sección 05 — Backlog inicial, Sprint Backlog y seguimiento
- Sección 06 — Alcance, Product Backlog priorizado y criterios de aceptación
- Sección 07 — Planificación temporal, estimaciones, cronograma y costos

Las siguientes secciones continuarán desarrollándose progresivamente hasta la entrega oficial de la Semana 13.

## Planificación temporal

El proyecto contempla un desarrollo incremental desde la Semana 3 hasta la Semana 13.

| Semana | Actividad principal | Estado |
|---|---|---|
| 3 | Project Charter, Product Goal y Scrum Team | Completada |
| 4 | Contexto organizacional y stakeholders | Completada |
| 5 | Sprint 1 — Gestión de clientes | Completada |
| 6 | Sprint 2 — Gestión de vehículos | Completada |
| 7 | Sprint 3 — Gestión de citas | Completada |
| 8 | Sprint 4 — Órdenes de servicio | Completada |
| 9 | Seguimiento de estados y gestión de riesgos | Planificada |
| 10 | Historial, Dashboard y calidad | Planificada |
| 11 | Comunicación, responsabilidades y mejoras | Planificada |
| 12 | Integración, evidencias y preparación de Demo | Planificada |
| 13 | Entrega final y defensa del proyecto | Planificada |

## Estimación de esfuerzo y costos

Se estableció una estimación académica inicial de **144 horas de trabajo**, distribuidas entre los dos integrantes.

### Distribución estimada

- Ignacio Araya Rojas: 72 horas
- Felipe Carrera Araya: 72 horas

### Estimación económica

Para efectos académicos se utiliza una tarifa referencial de ₡3.000 por hora.

| Concepto | Monto |
|---|---:|
| Esfuerzo humano estimado | ₡432.000 |
| Herramientas y licencias adicionales | ₡0 |
| Infraestructura y hosting | ₡0 |
| Reserva de contingencia (10 %) | ₡43.200 |
| **Costo económico estimado** | **₡475.200** |

Los montos representan una valoración económica académica del esfuerzo, no gastos efectivamente realizados.

El desembolso monetario directo previsto es de ₡0, debido al uso de herramientas gratuitas y recursos existentes.

Las estimaciones y el cronograma podrán ajustarse conforme avance el proyecto.

## Avance de los Sprints

### Sprint 1 — Base funcional y gestión de clientes

**Estado:** Completado.

**Sprint Goal:** Construir la base navegable de Taller Nexus e implementar una primera funcionalidad de gestión de clientes que permita demostrar el inicio funcional del prototipo.

**Incremento obtenido:**

- Estructura general de Taller Nexus
- Navegación principal
- Dashboard inicial
- Registro de clientes
- Consulta de clientes
- Edición de clientes
- Eliminación de clientes
- Persistencia mediante `localStorage`
- Contador dinámico de clientes
- Pruebas funcionales
- Sprint Review y Sprint Retrospective

### Sprint 2 — Gestión de vehículos

**Estado:** Completado.

**Sprint Goal:** Implementar la gestión básica de vehículos en Taller Nexus, permitiendo registrar cada vehículo y asociarlo con un cliente existente, así como consultar, modificar y eliminar la información almacenada.

**Incremento obtenido:**

- Registro de vehículos
- Asociación con clientes existentes
- Consulta de vehículos
- Edición de vehículos
- Eliminación de vehículos
- Validación de placas duplicadas
- Persistencia mediante `localStorage`
- Contador dinámico de vehículos
- Pruebas funcionales
- Sprint Review y Sprint Retrospective

### Sprint 3 — Gestión de citas

**Estado:** Completado.

**Sprint Goal:** Implementar la gestión de citas en Taller Nexus, permitiendo programar citas asociadas a clientes y vehículos existentes, consultar la información registrada, modificarla y eliminarla cuando sea necesario.

**Incremento obtenido:**

- Selección de clientes registrados
- Filtrado de vehículos por propietario
- Programación de citas
- Registro de fecha, hora, servicio y observaciones
- Consulta de citas
- Edición de citas
- Eliminación de citas
- Persistencia mediante `localStorage`
- Contador dinámico de citas
- Pruebas funcionales
- Sprint Review y Sprint Retrospective

### Sprint 4 — Gestión inicial de órdenes de servicio

**Estado:** Completado. El registro y la consulta de órdenes se validaron con pruebas automatizadas y en el navegador.

**Sprint Goal:** Implementar la creación y consulta de órdenes de servicio en Taller Nexus, vinculando cada orden con clientes y vehículos existentes y almacenando la información de manera local.

**Incremento obtenido:**

- Creación del módulo de órdenes de servicio
- Formulario para registrar órdenes
- Selección de clientes existentes
- Asociación con vehículos registrados
- Registro del servicio solicitado y su descripción
- Registro de fecha de ingreso
- Generación de un identificador para cada orden
- Asignación del estado inicial «Recibido»
- Consulta de órdenes registradas
- Visualización de información básica y estado de las órdenes
- Persistencia mediante `localStorage`
- Integración con los módulos desarrollados anteriormente
- Indicador de órdenes activas en el Dashboard

El incremento permite registrar y consultar órdenes de servicio vinculadas a los vehículos del taller.

La modificación de estados y el historial de servicios se incorporarán en Sprints posteriores.

## Mecanismo de seguimiento

El trabajo se organiza mediante un tablero de seguimiento con cuatro estados:

- **Pendiente**
- **En progreso**
- **En revisión / pruebas**
- **Completado**

Las actividades se actualizan conforme avanza cada Sprint.

GitHub permite mantener evidencia de los cambios mediante commits descriptivos y el historial de versiones.

Al finalizar cada Sprint se realizan pruebas funcionales, Sprint Review y Sprint Retrospective para evaluar los resultados obtenidos e identificar posibles mejoras.

## Priorización del desarrollo

El orden lógico de las funcionalidades principales es:

**Clientes → Vehículos → Citas → Órdenes de servicio → Seguimiento de estados → Historial**

El Dashboard evoluciona progresivamente conforme se implementan los módulos del sistema.

## Sprint Review

Se validó en el navegador el registro y la consulta de órdenes de servicio. Al seleccionar un cliente, el formulario mostró únicamente sus vehículos. La orden se guardó con un identificador único y el estado inicial «Recibido», apareció en el listado y se conservó al recargar la página. El Dashboard reflejó el aumento de órdenes activas.

Con esta validación se cumplió el objetivo del Sprint 4 y se completaron la HU-09 y la HU-11. La actualización de estados se abordará en el Sprint 5 y el historial de servicios se incorporará en un sprint posterior.

## Sprint Retrospective

Usar el filtrado por propietario del módulo de citas como referencia facilitó la integración del formulario de órdenes. Para el Sprint 5, la mejora propuesta es preparar una lista breve de pruebas antes de implementar los cambios de estado. La lista incluirá verificar que, al marcar una orden como «Entregado», siga visible en el listado y deje de contar como activa en el Dashboard.

## Próxima etapa

### Semana 9 — Riesgos, adquisiciones y Sprint 5

Las siguientes actividades estarán enfocadas en:

- Elaborar el registro de riesgos del proyecto
- Definir respuestas a los riesgos identificados
- Documentar las necesidades de adquisiciones
- Implementar la actualización de estados de órdenes de servicio
- Realizar pruebas funcionales
- Registrar evidencias y resultados del Sprint

### Sprint 5 — Seguimiento de órdenes de servicio

**Objetivo previsto:** Permitir actualizar el estado de las órdenes de servicio existentes para representar el avance de los trabajos realizados en el taller.

Estados contemplados:

1. Recibido
2. En diagnóstico
3. En reparación
4. Listo para entrega
5. Entregado

Este incremento permitirá continuar el desarrollo del flujo principal de Taller Nexus y preparar la implementación del historial de servicios en la siguiente iteración.

## Entrega final

La entrega oficial se realizará durante la Semana 13 del curso.

Se contempla presentar:

- Expediente del Proyecto completo
- Repositorio GitHub actualizado
- Prototipo funcional Taller Nexus
- Evidencias del desarrollo incremental
- Informe final
- Demostración del producto
- Defensa del proyecto
