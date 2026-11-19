# Taller Nexus

Prototipo web para la gestión de clientes, vehículos, citas, órdenes de servicio e historial de mantenimiento de un taller automotriz.

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

El sistema permite centralizar la gestión básica de clientes, vehículos, citas y órdenes de servicio, dar seguimiento al estado de los trabajos y consultar el historial de servicios finalizados de cada vehículo.

El proyecto se desarrolla como parte del Proyecto Incremental del curso ISW-912, utilizando Scrum como marco de trabajo.

## Product Goal

Desarrollar un prototipo web que permita a pequeños talleres automotrices centralizar la gestión básica de clientes, vehículos, citas y órdenes de servicio, facilitando el seguimiento del estado de los trabajos y la consulta del historial de atención de cada vehículo.

## Funcionalidades implementadas

- Gestión de clientes.
- Gestión de vehículos asociados a clientes.
- Programación y administración de citas.
- Registro y consulta de órdenes de servicio.
- Seguimiento de los estados de las órdenes.
- Historial de servicios finalizados por vehículo.
- Dashboard con indicadores dinámicos.
- Persistencia de información mediante `localStorage`.

## Tecnologías

- HTML5
- CSS3
- JavaScript
- localStorage
- Git
- GitHub

## Alcance técnico

Taller Nexus se desarrolla como un prototipo web funcional sin backend ni base de datos externa.

La información se almacena localmente en el navegador mediante `localStorage`, permitiendo demostrar las funcionalidades principales sin necesidad de infraestructura adicional.

El prototipo está diseñado principalmente para un único usuario operativo: el encargado del taller.

No contempla autenticación real, sincronización entre dispositivos, facturación electrónica ni integraciones externas.

La información almacenada en un navegador no se sincroniza automáticamente con otros navegadores o dispositivos.

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
    ├── ordenes.js
    └── historial.js
```

### Descripción de los archivos

- `index.html`: estructura principal, navegación, formularios y tablas.
- `css/styles.css`: estilos visuales y diseño adaptable.
- `js/app.js`: navegación y actualización de los indicadores del Dashboard.
- `js/clientes.js`: registro, consulta, edición y eliminación de clientes.
- `js/vehiculos.js`: administración de vehículos y asociación con propietarios.
- `js/citas.js`: programación y administración de citas.
- `js/ordenes.js`: registro, consulta y actualización de estados de órdenes.
- `js/historial.js`: consulta de servicios finalizados por vehículo.

## Ejecución del prototipo

Para utilizar Taller Nexus:

1. Obtener una copia del repositorio.
2. Abrir la carpeta del proyecto.
3. Ejecutar el archivo `index.html` en un navegador compatible.
4. Utilizar el menú lateral para navegar entre los módulos.

No es necesario instalar dependencias, configurar un servidor o utilizar una base de datos externa.

Los datos registrados se conservan mediante `localStorage` en el navegador utilizado, siempre que dicho almacenamiento no sea eliminado.

## Product Backlog

El Product Backlog inicial de Taller Nexus está compuesto por 13 historias de usuario relacionadas con las funcionalidades principales del prototipo.

### Estado del Product Backlog — Cierre del Sprint 6

| Estado | Cantidad |
|---|---:|
| Completadas | 13 |
| En desarrollo incremental | 0 |
| Pendientes | 0 |
| **Total** | **13** |

### Historias completadas

- HU-01 — Registrar clientes.
- HU-02 — Consultar clientes.
- HU-03 — Modificar y eliminar clientes.
- HU-04 — Registrar vehículos asociados a propietarios.
- HU-05 — Consultar vehículos.
- HU-06 — Modificar y eliminar vehículos.
- HU-07 — Programar citas.
- HU-08 — Consultar y modificar citas.
- HU-09 — Crear órdenes de servicio.
- HU-10 — Actualizar el estado de las órdenes de servicio.
- HU-11 — Consultar órdenes de servicio.
- HU-12 — Consultar historial de servicios por vehículo.
- HU-13 — Indicadores generales del Dashboard.

### Resultado

Al finalizar el Sprint 6 se completaron las 13 historias de usuario definidas en el Product Backlog inicial.

El alcance funcional principal del prototipo se encuentra implementado y validado mediante las pruebas realizadas durante los Sprints.

Las siguientes semanas estarán orientadas al fortalecimiento de la calidad, la revisión de posibles mejoras, la documentación y la preparación de la entrega final.

La finalización del Product Backlog inicial no representa el cierre académico definitivo del proyecto, previsto para la Semana 13.

## Estado del proyecto

**Semana 10 — Gestión de calidad, Definition of Done, estrategia de validación y Sprint 6.**

**Estado de la semana:** Completada.

### Avance académico

Hasta el momento se han desarrollado las siguientes secciones del Expediente del Proyecto:

- Sección 00 — Portada e identificación del equipo.
- Sección 01 — Problema, oportunidad, Product Goal y Project Charter.
- Sección 02 — Contexto organizacional y restricciones.
- Sección 03 — Interesados y mapa de stakeholders.
- Sección 04 — Ciclo de vida y Sprint 1.
- Sección 05 — Backlog inicial, Sprint Backlog y seguimiento.
- Sección 06 — Alcance, Product Backlog priorizado y criterios de aceptación.
- Sección 07 — Planificación temporal, estimaciones, cronograma y costos.
- Sección 08 — Registro de riesgos, estrategias de respuesta y plan de adquisiciones.
- Sección 09 — Criterios de calidad, Definition of Done y estrategia de validación.

Las secciones restantes continuarán desarrollándose hasta la entrega oficial de la Semana 13.

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
| 10 | Sprint 6 — Historial, Dashboard y calidad | Completada |
| 11 | Comunicación, responsabilidades y mejoras | Planificada |
| 12 | Integración, evidencias y preparación de Demo | Planificada |
| 13 | Entrega final y defensa del proyecto | Planificada |

## Estimación de esfuerzo y costos

Se estableció una estimación académica inicial de **144 horas de trabajo**, distribuidas entre los dos integrantes.

### Distribución estimada

- Ignacio Araya Rojas: 72 horas.
- Felipe Carrera Araya: 72 horas.

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

El desembolso monetario directo previsto es de ₡0 debido al uso de herramientas gratuitas y recursos existentes.

Las estimaciones y el cronograma podrán ajustarse conforme avance el proyecto.

## Gestión de riesgos

Durante la Semana 9 se elaboró el registro inicial de riesgos del proyecto, considerando factores técnicos, organizativos y académicos.

La evaluación utiliza una matriz cualitativa basada en probabilidad e impacto.

**Nivel de riesgo = Probabilidad × Impacto**

### Registro de riesgos

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

El seguimiento de los riesgos continuará durante las siguientes etapas.

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

## Gestión de calidad

Durante la Semana 10 se elaboró la Sección 09 del Expediente del Proyecto, estableciendo los criterios de calidad, la Definition of Done y la estrategia de validación.

### Objetivos de calidad

- Verificar el cumplimiento de los criterios de aceptación.
- Garantizar la integración de los módulos desarrollados.
- Comprobar la persistencia de información.
- Validar los campos y las relaciones entre registros.
- Reducir defectos funcionales.
- Mantener la trazabilidad de los cambios.
- Documentar los resultados de las pruebas.
- Promover la mejora continua.

### Criterios de calidad

| Criterio | Verificación |
|---|---|
| Funcionalidad | Cumplimiento de los criterios de aceptación |
| Integridad de información | Relaciones correctas entre registros |
| Persistencia | Conservación de información mediante localStorage |
| Usabilidad | Formularios y controles comprensibles |
| Validación | Comprobación de campos y entradas |
| Consistencia | Comportamiento uniforme de los módulos |
| Mantenibilidad | Organización y claridad del código |
| Compatibilidad | Funcionamiento en el navegador utilizado |
| Trazabilidad | Historial de cambios mediante GitHub |

## Definition of Done (DoD)

La Definition of Done establece las condiciones necesarias para considerar completada una historia de usuario.

Una funcionalidad no se considera terminada únicamente porque su código haya sido escrito.

### Criterios establecidos

| ID | Criterio |
|---|---|
| DoD-01 | Funcionalidad implementada |
| DoD-02 | Criterios de aceptación cumplidos |
| DoD-03 | Validaciones aplicables incorporadas |
| DoD-04 | Integración sin fallos bloqueantes conocidos |
| DoD-05 | Persistencia verificada cuando corresponda |
| DoD-06 | Pruebas funcionales aprobadas |
| DoD-07 | Revisión técnica realizada |
| DoD-08 | Interfaz funcional y comprensible |
| DoD-09 | Cambios registrados en GitHub |
| DoD-10 | Documentación actualizada |
| DoD-11 | Evidencias conservadas |
| DoD-12 | Validación del incremento por el Product Owner |

### Aplicación de la DoD

Cada historia debe cumplir sus criterios de aceptación específicos y las condiciones de calidad aplicables.

Si una funcionalidad presenta un defecto bloqueante, debe permanecer en revisión hasta su corrección.

La Definition of Done se utiliza como referencia durante las pruebas, las Sprint Reviews y el cierre de los incrementos.

## Estrategia de validación

La validación del producto se realiza de manera incremental mediante pruebas ejecutadas durante cada Sprint.

### Tipos de pruebas

**Pruebas funcionales:** verifican el comportamiento esperado de cada funcionalidad.

**Pruebas de integración:** comprueban la interacción entre clientes, vehículos, citas, órdenes e historial.

**Pruebas de validación:** verifican campos obligatorios y reglas de negocio.

**Pruebas de persistencia:** comprueban que la información permanezca disponible después de recargar la aplicación.

**Pruebas de regresión:** permiten comprobar que las funcionalidades anteriores continúen funcionando.

**Pruebas de interfaz:** verifican el uso correcto de formularios, botones, tablas y navegación.

### Procedimiento

1. Identificar la historia de usuario y sus criterios de aceptación.
2. Preparar datos ficticios.
3. Ejecutar las pruebas correspondientes.
4. Comparar los resultados obtenidos con los esperados.
5. Registrar los resultados.
6. Corregir defectos cuando sea necesario.
7. Repetir las pruebas afectadas.
8. Conservar evidencias.
9. Verificar la Definition of Done.

El enfoque principal de validación consiste en pruebas funcionales manuales estructuradas, adecuadas para el alcance académico del prototipo.

## Avance de los Sprints

### Sprint 1 — Base funcional y gestión de clientes

**Estado:** Completado.

**Sprint Goal:** Construir la base navegable de Taller Nexus e implementar una primera funcionalidad de gestión de clientes que permita demostrar el inicio funcional del prototipo.

**Incremento obtenido:**

- Estructura general de Taller Nexus.
- Navegación principal.
- Dashboard inicial.
- Registro de clientes.
- Consulta de clientes.
- Edición de clientes.
- Eliminación de clientes.
- Persistencia mediante `localStorage`.
- Contador dinámico de clientes.
- Pruebas funcionales.
- Sprint Review y Sprint Retrospective.

### Sprint 2 — Gestión de vehículos

**Estado:** Completado.

**Sprint Goal:** Implementar la gestión básica de vehículos en Taller Nexus, permitiendo registrar cada vehículo y asociarlo con un cliente existente, así como consultar, modificar y eliminar la información almacenada.

**Incremento obtenido:**

- Registro de vehículos.
- Asociación con clientes existentes.
- Consulta de vehículos.
- Edición de vehículos.
- Eliminación de vehículos.
- Validación de placas duplicadas.
- Persistencia mediante `localStorage`.
- Contador dinámico de vehículos.
- Pruebas funcionales.
- Sprint Review y Sprint Retrospective.

### Sprint 3 — Gestión de citas

**Estado:** Completado.

**Sprint Goal:** Implementar la gestión de citas en Taller Nexus, permitiendo programar citas asociadas a clientes y vehículos existentes, consultar la información registrada, modificarla y eliminarla cuando sea necesario.

**Incremento obtenido:**

- Selección de clientes registrados.
- Filtrado de vehículos por propietario.
- Programación de citas.
- Registro de fecha, hora, servicio y observaciones.
- Consulta de citas.
- Edición de citas.
- Eliminación de citas.
- Persistencia mediante `localStorage`.
- Contador dinámico de citas.
- Pruebas funcionales.
- Sprint Review y Sprint Retrospective.

### Sprint 4 — Gestión inicial de órdenes de servicio

**Estado:** Completado.

**Sprint Goal:** Implementar la creación y consulta de órdenes de servicio en Taller Nexus, vinculando cada orden con clientes y vehículos existentes y almacenando la información de manera local.

**Incremento obtenido:**

- Creación del módulo de órdenes de servicio.
- Formulario para registrar órdenes.
- Selección de clientes existentes.
- Asociación con vehículos registrados.
- Registro del servicio solicitado y su descripción.
- Registro de fecha de ingreso.
- Generación de un identificador para cada orden.
- Asignación del estado inicial «Recibido».
- Consulta de órdenes registradas.
- Visualización de información básica y estado de las órdenes.
- Persistencia mediante `localStorage`.
- Integración con los módulos desarrollados anteriormente.
- Indicador de órdenes activas en el Dashboard.
- Pruebas funcionales.
- Sprint Review y Sprint Retrospective.

### Sprint 5 — Seguimiento de estados de órdenes de servicio

**Estado:** Completado.

**Sprint Goal:** Implementar la actualización de estados de las órdenes de servicio, permitiendo representar el avance de los trabajos del taller y mantener la información almacenada mediante `localStorage`.

**Historias relacionadas:**

- HU-10 — Actualizar el estado de las órdenes de servicio.
- HU-13 — Actualización incremental de los indicadores del Dashboard.

**Incremento obtenido:**

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
- Sprint Review y Sprint Retrospective.

### Estados disponibles

Las órdenes pueden encontrarse en los siguientes estados:

1. Recibido.
2. En diagnóstico.
3. En reparación.
4. Listo para entrega.
5. Entregado.

Una orden nueva inicia automáticamente en estado **Recibido**.

Los cambios de estado se realizan mediante un selector y un botón de confirmación.

Cuando una orden se marca como **Entregado**, permanece disponible para consulta, pero deja de contabilizarse como activa.

El estado puede modificarse nuevamente cuando sea necesario.

### Resultado del Sprint 5

El Sprint Goal fue alcanzado satisfactoriamente.

La HU-10 se considera completada.

La HU-13 continuó desarrollándose de manera incremental hasta su validación final en el Sprint 6.

### Sprint 6 — Historial de servicios y Dashboard

**Estado:** Completado.

**Sprint Goal:** Implementar la consulta del historial de servicios de cada vehículo y validar integralmente los indicadores del Dashboard, completando las historias de usuario restantes del Product Backlog inicial.

**Historias relacionadas:**

- HU-12 — Consultar historial de servicios por vehículo.
- HU-13 — Indicadores generales del Dashboard.

### Incremento obtenido

Durante el Sprint 6 se implementaron y validaron las siguientes funcionalidades:

- Incorporación de una nueva sección Historial en el menú principal.
- Creación del archivo `js/historial.js`.
- Selector para consultar vehículos registrados.
- Identificación de vehículos mediante marca, modelo, placa y propietario.
- Filtrado de órdenes según el identificador del vehículo.
- Consulta exclusiva de órdenes con estado Entregado.
- Visualización de servicios finalizados.
- Presentación de fecha de ingreso, servicio, descripción, estado e identificador de orden.
- Ordenamiento de servicios desde la fecha de ingreso más reciente.
- Visualización de un mensaje cuando el vehículo no tiene servicios finalizados.
- Conservación del historial mediante la información existente en `localStorage`.
- Actualización automática de la consulta cuando cambia el estado de una orden.
- Sincronización del selector cuando se modifican clientes o vehículos.
- Validación de los indicadores del Dashboard.
- Pruebas funcionales y de integración.
- Sprint Review y Sprint Retrospective.

### Funcionamiento del historial

El módulo Historial permite seleccionar un vehículo registrado y consultar los servicios asociados que ya fueron entregados.

La información proviene directamente de las órdenes de servicio almacenadas en `localStorage`.

No se crea una copia adicional de los servicios, por lo que el historial utiliza los datos existentes del sistema.

Únicamente se muestran las órdenes cuyo estado sea **Entregado**.

Las órdenes que continúan en diagnóstico, reparación o preparación de entrega no aparecen como servicios finalizados.

Cuando una orden cambia a Entregado, puede consultarse en el historial del vehículo correspondiente.

Si posteriormente se cambia a un estado activo, deja de aparecer en el historial de servicios finalizados.

La fecha presentada corresponde a la **fecha de ingreso de la orden**, ya que el prototipo no registra una fecha independiente de finalización del trabajo.

### Validación del Dashboard

Durante el Sprint 6 se revisó el funcionamiento de los cuatro indicadores existentes:

| Indicador | Comportamiento |
|---|---|
| Clientes registrados | Muestra la cantidad de clientes |
| Vehículos registrados | Muestra la cantidad de vehículos |
| Citas | Muestra la cantidad de citas registradas |
| Órdenes activas | Muestra las órdenes cuyo estado no es Entregado |

Los indicadores se actualizan mediante los eventos correspondientes cuando se modifican los registros.

El contador de órdenes activas excluye las órdenes entregadas, manteniendo la coherencia con el seguimiento de estados y el historial.

### Resultado del Sprint 6

**Sprint Goal alcanzado: Sí.**

**HU-12 completada: Sí.**

**HU-13 completada: Sí.**

El Sprint 6 permitió finalizar la implementación y validación de las 13 historias de usuario del Product Backlog inicial.

## Pruebas funcionales — Sprint 5

Durante el Sprint 5 se verificó la actualización de estados de órdenes de servicio.

| ID | Prueba | Resultado |
|---|---|---|
| PF-01 | Crear una orden con estado inicial Recibido | Aprobada |
| PF-02 | Cambiar el estado a En diagnóstico | Aprobada |
| PF-03 | Cambiar el estado a En reparación | Aprobada |
| PF-04 | Cambiar el estado a Listo para entrega | Aprobada |
| PF-05 | Cambiar el estado a Entregado | Aprobada |
| PF-06 | Verificar persistencia después de recargar | Aprobada |
| PF-07 | Consultar una orden entregada en el listado | Aprobada |
| PF-08 | Modificar nuevamente el estado de una orden | Aprobada |
| PF-09 | Verificar que los cambios no afecten otras órdenes | Aprobada |

Las pruebas permitieron confirmar el cumplimiento de la HU-10 y su integración con el Dashboard.

## Pruebas funcionales — Sprint 6

Durante el Sprint 6 se realizaron pruebas para verificar el historial de servicios, la integración entre módulos y los indicadores del Dashboard.

| ID | Prueba | Resultado |
|---|---|---|
| PF-01 | Verificar la sección Historial en el menú | Aprobada |
| PF-02 | Mostrar los vehículos registrados en el selector | Aprobada |
| PF-03 | Consultar servicios entregados de un vehículo | Aprobada |
| PF-04 | Mostrar mensaje para vehículos sin historial | Aprobada |
| PF-05 | Evitar mostrar servicios de otros vehículos | Aprobada |
| PF-06 | Verificar fecha, servicio, descripción y estado | Aprobada |
| PF-07 | Conservar el historial después de recargar | Aprobada |
| PF-08 | Verificar indicadores de clientes, vehículos y citas | Aprobada |
| PF-09 | Comprobar el aumento de órdenes activas | Aprobada |
| PF-10 | Comprobar la disminución al marcar Entregado | Aprobada |
| PF-11 | Mostrar órdenes entregadas en el historial correspondiente | Aprobada |
| PF-12 | Retirar del historial una orden que vuelve a estado activo | Aprobada |
| PF-13 | Verificar el funcionamiento de los módulos anteriores | Aprobada |

### Resultado de las pruebas

**Total de pruebas ejecutadas:** 13.

**Pruebas aprobadas:** 13.

**Pruebas rechazadas:** 0.

**Resultado:** Satisfactorio.

Las pruebas permitieron validar las funcionalidades incorporadas durante el Sprint 6 y verificar que los módulos anteriores continúan funcionando correctamente en los escenarios evaluados.

## Sprint Review — Sprint 5

### Objetivo de la revisión

Evaluar el incremento desarrollado durante el Sprint 5 y comprobar que la actualización de estados de órdenes de servicio cumpliera los criterios de aceptación establecidos.

### Resultados obtenidos

Se comprobó que el módulo de órdenes permite seleccionar y guardar nuevos estados para los trabajos registrados.

El sistema conserva correctamente los cambios mediante `localStorage` y actualiza la información presentada en la tabla.

También se verificó la integración con el Dashboard, donde las órdenes entregadas dejan de contabilizarse como activas.

### Resultado de la revisión

**Sprint Goal alcanzado: Sí.**

**HU-10 completada: Sí.**

El incremento quedó integrado con los módulos desarrollados anteriormente.

## Sprint Retrospective — Sprint 5

### Aspectos positivos

La estructura existente del módulo de órdenes facilitó la incorporación de controles de actualización de estados.

El uso de un arreglo centralizado de estados simplificó las validaciones.

La reutilización del evento `ordenesActualizadas` permitió sincronizar el Dashboard sin modificar significativamente su lógica.

El control de versiones mediante GitHub facilitó la trazabilidad de los cambios.

### Mejoras identificadas

- Mantener validaciones claras entre entidades relacionadas.
- Continuar utilizando funciones reutilizables.
- Realizar pruebas de integración.
- Proteger la integridad de los registros.
- Preparar escenarios completos para la demostración final.

## Sprint Review — Sprint 6

### Objetivo de la revisión

Evaluar el historial de servicios por vehículo y verificar el correcto funcionamiento de los indicadores generales del Dashboard.

### Resultados obtenidos

Se comprobó que la aplicación permite seleccionar un vehículo registrado y consultar sus servicios finalizados.

El historial presenta la información de las órdenes entregadas, incluyendo fecha de ingreso, servicio solicitado, descripción, estado e identificador.

Se verificó que los servicios aparecen asociados al vehículo correcto y que las órdenes de otros vehículos no se incluyen en la consulta.

También se comprobó que, cuando un vehículo no tiene servicios finalizados, la interfaz muestra un mensaje informativo.

La información continúa disponible después de recargar la aplicación, gracias al uso de `localStorage`.

El historial se actualiza al cambiar el estado de una orden, manteniendo la coherencia con la información almacenada.

Por otra parte, se validaron los cuatro indicadores del Dashboard y su actualización conforme cambian los registros.

### Incremento presentado

El flujo funcional alcanzado es:

**Cliente → Vehículo → Cita → Orden de servicio → Seguimiento de estado → Historial de servicios**

### Resultado de la revisión

**Sprint Goal alcanzado: Sí.**

**HU-12 completada: Sí.**

**HU-13 completada: Sí.**

El incremento cumple los criterios de aceptación definidos y permite completar el alcance funcional del Product Backlog inicial.

## Sprint Retrospective — Sprint 6

### Aspectos positivos

La reutilización de los registros existentes en `localStorage` permitió implementar el historial sin incorporar una base de datos adicional ni duplicar información.

La separación de la funcionalidad en `historial.js` facilitó la organización del código.

El uso de identificadores para relacionar vehículos con órdenes permitió consultar correctamente los servicios asociados.

La actualización mediante eventos facilitó la integración entre el módulo de órdenes, el historial y el Dashboard.

El enfoque incremental permitió completar las funcionalidades restantes sin modificar considerablemente la arquitectura del prototipo.

Las pruebas funcionales facilitaron la validación del incremento y la comprobación de los módulos anteriores.

### Dificultades identificadas

Fue necesario asegurar que el historial mostrara únicamente las órdenes correspondientes al vehículo seleccionado.

También se debió diferenciar entre órdenes activas y servicios finalizados para evitar que los trabajos pendientes aparecieran dentro del historial.

Otra consideración fue conservar la consistencia de los indicadores del Dashboard cuando una orden cambia de estado.

Estas condiciones fueron contempladas y verificadas durante el desarrollo y las pruebas.

### Mejoras propuestas

Para las siguientes semanas se establecen las siguientes acciones:

- Revisar la integridad de los datos relacionados.
- Evaluar restricciones para eliminar clientes o vehículos con registros asociados.
- Continuar comprobando la persistencia de información.
- Revisar la presentación de datos ingresados por los usuarios.
- Ejecutar pruebas de regresión antes de la demostración.
- Organizar las capturas y evidencias técnicas.
- Mantener actualizado el Expediente del Proyecto.
- Preparar un escenario de demostración con datos ficticios completos.

### Resultado de la retrospectiva

El Sprint 6 permitió completar las funcionalidades principales de Taller Nexus de manera incremental.

Las historias HU-12 y HU-13 fueron finalizadas y validadas.

La siguiente etapa estará orientada a fortalecer la calidad, organizar la documentación y preparar el prototipo para su presentación académica.

## Mecanismo de seguimiento

El trabajo se organiza mediante un tablero de seguimiento con cuatro estados:

- **Pendiente**
- **En progreso**
- **En revisión / pruebas**
- **Completado**

Las actividades se actualizan conforme avanza cada Sprint.

GitHub permite mantener evidencia de los cambios mediante commits descriptivos y el historial de versiones.

Al finalizar cada Sprint se realizan pruebas funcionales, Sprint Review y Sprint Retrospective para evaluar los resultados e identificar oportunidades de mejora.

## Priorización del desarrollo

El orden lógico de las funcionalidades principales es:

**Clientes → Vehículos → Citas → Órdenes de servicio → Seguimiento de estados → Historial**

El Dashboard se desarrolló progresivamente y se completó mediante la validación integral realizada en el Sprint 6.

Al finalizar la Semana 10, todas las funcionalidades del Product Backlog inicial se encuentran implementadas.

## Evidencias del desarrollo

El proyecto mantiene trazabilidad técnica mediante los commits registrados en GitHub.

### Commits del Sprint 6

**Interfaz del historial:**

`87b9185` — `feat: add vehicle service history interface`

**Implementación del historial:**

`b500b44` — `feat: implement vehicle service history with localStorage`

Estos commits documentan la incorporación de la interfaz y la lógica del historial de servicios por vehículo.

Las pruebas funcionales y capturas correspondientes se utilizan como evidencia del incremento desarrollado.

## Próxima etapa

### Semana 11 — Comunicación, responsabilidades y mejoras

**Estado:** Planificada.

De acuerdo con el cronograma académico, las siguientes actividades estarán enfocadas en:

- Elaborar la matriz de responsabilidades del equipo.
- Documentar el plan de comunicación.
- Establecer los Working Agreements.
- Revisar la distribución de responsabilidades.
- Dar seguimiento a los riesgos del proyecto.
- Revisar posibles mejoras de calidad.
- Fortalecer la integración de los módulos.
- Organizar evidencias para la entrega final.

### Enfoque técnico posterior al Sprint 6

Las funcionalidades principales del Product Backlog inicial están completas.

Durante las siguientes semanas, el equipo se concentrará en las actividades de estabilización y preparación del producto.

Entre las prioridades se encuentran:

- Integridad de los registros relacionados.
- Validación adicional de formularios.
- Revisión de la interfaz.
- Pruebas de regresión.
- Preparación de datos de demostración.
- Organización de evidencias.
- Revisión general del código.

Estas actividades no implican una ampliación obligatoria del alcance funcional aprobado.

## Entrega final

La entrega oficial se realizará durante la Semana 13 del curso.

Se contempla presentar:

- Expediente del Proyecto completo.
- Repositorio GitHub actualizado.
- Prototipo funcional Taller Nexus.
- Evidencias del desarrollo incremental.
- Informe final.
- Demostración del producto.
- Defensa del proyecto.

## Estado general al cierre de la Semana 10

**Semana 10:** Completada.

**Sprints completados:** 6.

**Historias de usuario completadas:** 13 de 13.

**Historias en desarrollo incremental:** 0.

**Historias pendientes del Product Backlog inicial:** 0.

**Último incremento funcional:** Historial de servicios por vehículo y validación integral del Dashboard.

**Estado del alcance funcional inicial:** Completado.

**Estado académico del proyecto:** En desarrollo, pendiente de las actividades de las Semanas 11, 12 y 13.

**Próxima etapa:** Comunicación, responsabilidades, acuerdos de trabajo y fortalecimiento del producto.

Taller Nexus continúa alineado con el Product Goal, el cronograma académico y la entrega final establecida para la Semana 13.