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

El sistema busca centralizar la gestión básica de clientes, vehículos, citas y órdenes de servicio, permitiendo además dar seguimiento al estado de los trabajos y consultar el historial de servicios realizados a cada vehículo.

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

La información se almacena localmente en el navegador mediante `localStorage`, permitiendo demostrar las principales funcionalidades del sistema sin necesidad de infraestructura adicional.

El prototipo está diseñado principalmente para un único usuario operativo: el encargado del taller.

No contempla autenticación real, sincronización entre dispositivos, facturación electrónica ni integraciones externas.

## Estructura del proyecto

```text
taller-nexus/
├── README.md
├── index.html
├── css/
│   └── styles.css
└── js/
    ├── app.js
    ├── clientes.js
    ├── vehiculos.js
    ├── citas.js
    └── ordenes.js
```

## Product Backlog

El Product Backlog de Taller Nexus está compuesto por 13 historias de usuario relacionadas con los módulos principales del prototipo.

### Estado del Product Backlog — Cierre del Sprint 5

| Estado | Cantidad |
|---|---:|
| Completadas | 11 |
| En desarrollo incremental | 1 |
| Pendientes | 1 |
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
- HU-10 — Actualizar el estado de las órdenes de servicio
- HU-11 — Consultar órdenes de servicio

### Historia en desarrollo incremental

- HU-13 — Indicadores generales del Dashboard

El Dashboard cuenta actualmente con indicadores dinámicos de clientes, vehículos, citas y órdenes de servicio activas.

### Historia pendiente

- HU-12 — Consultar historial de servicios por vehículo

El Product Backlog se revisa periódicamente para mantener las funcionalidades alineadas con el Product Goal.

## Estado del proyecto

**Semana 9 — Gestión de riesgos, respuestas, adquisiciones y Sprint 5.**

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
- Sección 08 — Registro de riesgos, estrategias de respuesta y plan de adquisiciones

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
| 9 | Sprint 5 — Estados de órdenes, riesgos y adquisiciones | Completada |
| 10 | Sprint 6 — Historial, Dashboard y calidad | Planificada |
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

## Gestión de riesgos

Durante la Semana 9 se elaboró el registro inicial de riesgos del proyecto, considerando factores técnicos, organizativos y académicos.

La evaluación utiliza una matriz cualitativa basada en probabilidad e impacto.

**Nivel de riesgo = Probabilidad × Impacto**

Se identificaron los siguientes riesgos:

| ID | Riesgo | Nivel | Prioridad |
|---|---|---:|---|
| R-01 | Retrasos en el desarrollo | 9 | Alta |
| R-02 | Pérdida de información almacenada localmente | 6 | Alta |
| R-03 | Inconsistencias entre registros relacionados | 9 | Alta |
| R-04 | Errores durante la integración de módulos | 6 | Alta |
| R-05 | Problemas durante la demostración final | 6 | Alta |
| R-06 | Ampliación innecesaria del alcance | 6 | Alta |
| R-07 | Disponibilidad limitada del equipo | 4 | Media |
| R-08 | Errores en el ingreso y validación de información | 4 | Media |
| R-09 | Dificultades con herramientas y GitHub | 4 | Media |

### Estrategias de respuesta

Las principales acciones establecidas son:

- Mantener Sprints con objetivos específicos y alcance controlado.
- Priorizar las funcionalidades esenciales del Product Backlog.
- Realizar pruebas funcionales después de cada incremento.
- Conservar el código fuente mediante Git y GitHub.
- Utilizar datos ficticios para las pruebas y demostraciones.
- Verificar las relaciones entre clientes, vehículos, citas y órdenes.
- Preparar previamente los escenarios de demostración.
- Mantener comunicación entre los integrantes.
- Registrar cambios e impedimentos durante el desarrollo.

El seguimiento de los riesgos continuará durante los siguientes Sprints.

## Plan de adquisiciones

Durante la Semana 9 se evaluaron los recursos tecnológicos necesarios para completar el proyecto.

### Recursos utilizados

| Recurso | Finalidad | Costo adicional previsto |
|---|---|---:|
| Visual Studio Code | Desarrollo del prototipo | ₡0 |
| Git | Control de versiones | ₡0 |
| GitHub | Repositorio del proyecto | ₡0 |
| Google Drive / Docs | Expediente compartido | ₡0 |
| HTML, CSS y JavaScript | Tecnologías de desarrollo | ₡0 |
| localStorage | Persistencia local | ₡0 |
| Navegador web | Ejecución y pruebas | ₡0 |
| Equipos personales | Desarrollo y documentación | ₡0 adicionales |

### Resultado del análisis

No se identificaron adquisiciones obligatorias para completar Taller Nexus.

El proyecto no requiere contratar servidores, adquirir licencias comerciales, implementar bases de datos externas ni comprar hardware adicional.

La estrategia de adquisiciones consiste en aprovechar herramientas gratuitas y recursos existentes.

Cualquier necesidad futura deberá evaluarse considerando su utilidad, costo, compatibilidad e impacto sobre el cronograma y alcance.

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

**Estado:** Completado.

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
- Pruebas funcionales
- Sprint Review y Sprint Retrospective

El incremento permitió registrar y consultar órdenes de servicio vinculadas a los vehículos del taller.

### Sprint 5 — Seguimiento de estados de órdenes de servicio

**Estado:** Completado.

**Sprint Goal:** Implementar la actualización de estados de las órdenes de servicio, permitiendo representar el avance de los trabajos del taller y mantener la información almacenada mediante `localStorage`.

**Historias relacionadas:**

- HU-10 — Actualizar el estado de las órdenes de servicio
- HU-13 — Actualización incremental de los indicadores del Dashboard

**Incremento obtenido:**

Durante el Sprint 5 se implementaron las siguientes funcionalidades:

- Incorporación de una columna de acciones en la tabla de órdenes.
- Selector para modificar el estado de cada orden.
- Botón para guardar los cambios de estado.
- Validación de estados permitidos.
- Actualización del estado de órdenes existentes.
- Conservación de los demás datos de cada orden.
- Persistencia de los cambios mediante `localStorage`.
- Actualización automática de la tabla de órdenes.
- Integración mediante el evento `ordenesActualizadas`.
- Actualización del contador de órdenes activas en el Dashboard.
- Exclusión de órdenes entregadas del contador de órdenes activas.
- Conservación de las órdenes entregadas en el listado general.
- Pruebas funcionales de actualización y persistencia.
- Sprint Review.
- Sprint Retrospective.

### Estados disponibles

Las órdenes pueden encontrarse en los siguientes estados:

1. Recibido
2. En diagnóstico
3. En reparación
4. Listo para entrega
5. Entregado

Una orden nueva inicia automáticamente en estado **Recibido**.

Los cambios de estado se realizan mediante un selector y un botón de confirmación.

Cuando una orden se marca como **Entregado**, permanece disponible para consulta, pero deja de contabilizarse como una orden activa.

El estado puede modificarse nuevamente cuando sea necesario.

### Resultado del Sprint 5

El Sprint Goal fue alcanzado satisfactoriamente.

La historia HU-10 se considera completada.

La historia HU-13 continúa en desarrollo incremental, con los indicadores actuales funcionando de manera dinámica.

## Pruebas funcionales — Sprint 5

Una vez implementada la actualización de estados, se realizaron pruebas funcionales para verificar el comportamiento del módulo de órdenes.

| ID | Prueba | Resultado |
|---|---|---|
| PF-01 | Crear una orden con estado inicial Recibido | Aprobada |
| PF-02 | Cambiar el estado a En diagnóstico | Aprobada |
| PF-03 | Cambiar el estado a En reparación | Aprobada |
| PF-04 | Cambiar el estado a Listo para entrega | Aprobada |
| PF-05 | Cambiar el estado a Entregado | Aprobada |
| PF-06 | Verificar persistencia después de recargar la aplicación | Aprobada |
| PF-07 | Consultar una orden entregada en el listado | Aprobada |
| PF-08 | Modificar nuevamente el estado de una orden | Aprobada |
| PF-09 | Verificar que los cambios no afecten otras órdenes | Aprobada |

### Validación del Dashboard

Se verificó que el contador de órdenes activas excluyera únicamente aquellas con estado **Entregado**.

Las órdenes en estado Recibido, En diagnóstico, En reparación y Listo para entrega continúan contabilizándose como activas.

Los cambios se reflejan automáticamente mediante el evento `ordenesActualizadas`, sin necesidad de recargar la aplicación.

Las pruebas permitieron confirmar el funcionamiento esperado de la HU-10 y la integración con el Dashboard.

## Sprint Review — Sprint 5

### Objetivo de la revisión

Evaluar el incremento desarrollado durante el Sprint 5 y comprobar que la actualización de estados de órdenes de servicio cumpliera con los criterios de aceptación establecidos.

### Resultados obtenidos

Se comprobó que el módulo de órdenes permite seleccionar y guardar nuevos estados para los trabajos registrados.

El sistema conserva correctamente los cambios mediante `localStorage` y actualiza la información presentada en la tabla.

También se verificó la integración con el Dashboard, donde las órdenes entregadas dejan de contabilizarse como activas.

La implementación no requirió modificar la estructura general del sistema ni incorporar tecnologías adicionales.

### Incremento presentado

El flujo funcional alcanzado es:

**Cliente → Vehículo → Cita → Orden de servicio → Seguimiento de estado**

### Resultado de la revisión

**Sprint Goal alcanzado: Sí.**

**HU-10 completada: Sí.**

El incremento es funcional y se encuentra integrado con los módulos desarrollados anteriormente.

La funcionalidad de historial de servicios se mantiene pendiente para el siguiente Sprint.

## Sprint Retrospective — Sprint 5

### Aspectos positivos

La estructura existente del módulo de órdenes facilitó la incorporación de los controles de actualización de estados.

El uso de un arreglo centralizado de estados permitió establecer las opciones disponibles y simplificar las validaciones.

La reutilización del evento `ordenesActualizadas` permitió mantener sincronizado el Dashboard sin modificar significativamente su lógica.

El trabajo incremental permitió añadir nuevas funcionalidades sin reconstruir componentes existentes.

El uso de GitHub facilitó el seguimiento de los cambios realizados y la organización de los commits.

### Dificultades identificadas

Fue necesario asegurar que el cambio de estado modificara únicamente la orden seleccionada y conservara el resto de su información.

También se requirió verificar que las órdenes entregadas permanecieran visibles en el listado, pero no se contabilizaran dentro de las órdenes activas.

Estas condiciones fueron contempladas durante el desarrollo y las pruebas.

### Mejoras propuestas

Para los siguientes Sprints se procurará:

- Mantener validaciones claras entre entidades relacionadas.
- Continuar utilizando funciones reutilizables.
- Realizar pruebas de integración después de incorporar funcionalidades.
- Proteger la integridad de los registros vinculados.
- Mantener sincronizado el Dashboard.
- Conservar commits descriptivos y documentación actualizada.
- Preparar escenarios completos para la demostración final.

### Resultado de la retrospectiva

El equipo considera que el Sprint 5 permitió continuar el desarrollo de Taller Nexus de manera organizada y alineada con el Product Goal.

El siguiente esfuerzo estará orientado a implementar el historial de servicios y completar las funcionalidades restantes.

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

Al finalizar el Sprint 5, las funcionalidades de clientes, vehículos, citas, órdenes de servicio y seguimiento de estados se encuentran implementadas.

El Dashboard cuenta con indicadores de clientes, vehículos, citas y órdenes activas.

La principal funcionalidad pendiente es la consulta del historial de servicios por vehículo.

## Próxima etapa

### Semana 10 — Gestión de calidad y Sprint 6

Las siguientes actividades estarán enfocadas en:

- Elaborar la sección de gestión de calidad del proyecto.
- Establecer criterios y procedimientos de aseguramiento de calidad.
- Documentar la Definition of Done.
- Definir las verificaciones necesarias para aceptar los incrementos.
- Implementar el historial de servicios por vehículo.
- Completar y revisar los indicadores del Dashboard.
- Realizar pruebas de integración.
- Registrar evidencias funcionales.
- Documentar Sprint Review y Sprint Retrospective.

### Sprint 6 — Historial de servicios y Dashboard

**Estado:** Planificado.

**Sprint Goal previsto:** Implementar la consulta del historial de servicios de cada vehículo y completar los indicadores del Dashboard, integrando la información de las órdenes de servicio existentes.

**Historias relacionadas:**

- HU-12 — Consultar historial de servicios por vehículo
- HU-13 — Indicadores generales del Dashboard

### Funcionalidades previstas

- Seleccionar un vehículo registrado.
- Consultar las órdenes de servicio asociadas al vehículo.
- Visualizar los servicios realizados.
- Mostrar la fecha y el estado de cada orden.
- Permitir consultar las órdenes entregadas como parte del historial.
- Revisar el funcionamiento de los indicadores existentes.
- Validar la persistencia de la información.
- Ejecutar pruebas funcionales y de integración.

Este incremento permitirá completar las historias de usuario definidas en el Product Backlog inicial.

Posteriormente, el equipo continuará con las actividades de revisión, mejoras, documentación y preparación de la entrega final.

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

## Estado general al cierre de la Semana 9

**Semana 9:** Completada.

**Sprints completados:** 5.

**Historias de usuario completadas:** 11 de 13.

**Historias en desarrollo incremental:** 1.

**Historias pendientes:** 1.

**Último incremento funcional:** Actualización y seguimiento de estados de órdenes de servicio.

**Próximo incremento:** Historial de servicios por vehículo y finalización del Dashboard.

El proyecto continúa alineado con el Product Goal, la planificación académica y el cronograma establecido para la entrega final.