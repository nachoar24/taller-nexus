# Taller Nexus

Prototipo web para la gestión de clientes, vehículos, citas, órdenes de servicio e historial de mantenimiento de un taller automotriz.

**Estado:** desarrollo técnico concluido, 13/13 historias de usuario completadas y 6/6 tareas de estabilización finalizadas. Expediente e informe final preparados para la entrega oficial y defensa de la Semana 13.

## Curso

ISW-912 - Administración de Proyectos Informáticos

Universidad Técnica Nacional — Ingeniería del Software.

Grupo 2 · Sede Regional San Carlos · III Cuatrimestre 2026.

## Integrantes

- Ignacio Araya Rojas
- Felipe Carrera Araya

## Scrum Team

- **Product Owner / Developer:** Ignacio Araya Rojas
- **Scrum Master / Developer:** Felipe Carrera Araya

## Descripción

Taller Nexus es un prototipo web funcional orientado a pequeños talleres automotrices.

El sistema permite centralizar la gestión básica de clientes, vehículos, citas y órdenes de servicio, dar seguimiento al estado de los trabajos y consultar el historial de servicios finalizados de cada vehículo.

El proyecto se desarrolló como parte del Proyecto Incremental del curso ISW-912, utilizando Scrum como marco de trabajo.

## Documentación del proyecto

El Expediente Final contiene las 13 secciones requeridas por el curso (00 a 12), incluyendo la planificación, los Sprints, las decisiones, los cambios, las evidencias, el informe final y el guion de demostración.

- [Expediente Final — Google Docs](https://docs.google.com/document/d/1VblkecuekqSk23wukSVZ3btjQqhdKH1a/edit) — versión editable compartida.
- [Expediente Final — PDF](docs/Expediente%20Final%20-%20Taller%20Nexus.pdf) — copia de entrega incluida en el repositorio.
- [Historial de commits](https://github.com/nachoar24/taller-nexus/commits/main/) — evidencia de la evolución del producto.

El acceso al documento compartido y al repositorio privado depende de los permisos otorgados a cada usuario.

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
- Protección de las relaciones entre clientes, vehículos, citas y órdenes.
- Validaciones de formularios y presentación segura de datos en tablas.
- Interfaz adaptable a escritorio, tablet y móvil.
- Carga voluntaria de datos ficticios para la demostración en un entorno vacío.

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
├── js/
│   ├── app.js
│   ├── clientes.js
│   ├── vehiculos.js
│   ├── citas.js
│   ├── ordenes.js
│   ├── historial.js
│   └── demo.js
└── docs/
    └── Expediente Final - Taller Nexus.pdf
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
- `js/demo.js`: carga controlada de registros ficticios y actualización de los módulos.
- `docs/`: copia PDF del Expediente Final del Proyecto.

## Ejecución del prototipo

1. Obtener una copia del repositorio o actualizar la rama `main` si ya se dispone de ella.
2. Abrir la carpeta del proyecto en Visual Studio Code o en el explorador de archivos.
3. Abrir `index.html` en un navegador moderno, preferiblemente Google Chrome. Se recomienda utilizar un servidor estático local para la demostración.
4. Utilizar el menú lateral para navegar entre Dashboard, Clientes, Vehículos, Citas, Órdenes de servicio e Historial.

No se requiere instalar dependencias del proyecto, configurar un backend ni utilizar una base de datos externa. Si el navegador restringe funcionalidades bajo `file://`, puede ejecutarse un servidor estático desde la raíz del proyecto (requiere Python 3):

```bash
python -m http.server 8000
```

Abrir `http://localhost:8000` en el navegador. Se trata únicamente de un servidor de archivos estáticos, no de un backend de Taller Nexus.

Los registros se conservan mediante `localStorage` en el mismo perfil y origen del navegador. Cambiar de origen, perfil o dispositivo puede mostrar un conjunto de datos diferente.

### Datos de demostración

En un perfil de navegador con las cuatro colecciones (`clientes`, `vehiculos`, `citas` y `ordenes`) vacías, ingresar al Dashboard, seleccionar **Cargar datos de demostración** y confirmar la operación.

| Indicador | Resultado esperado |
|---|---:|
| Clientes registrados | 3 |
| Vehículos registrados | 4 |
| Citas registradas | 3 |
| Órdenes activas | 3 |
| Órdenes totales | 6 |
| Órdenes entregadas | 3 |

El botón se deshabilita cuando existen registros, evitando la carga duplicada o la sobrescritura de información en condiciones normales de uso. Se recomienda un perfil de navegador exclusivo para las pruebas y la Demo, sin eliminar los datos habituales.

### Arquitectura y relaciones

Las colecciones de `localStorage` son `clientes`, `vehiculos`, `citas` y `ordenes`. Cada registro se identifica mediante un ID. Los vehículos se vinculan a su propietario, y las citas y órdenes a un cliente y vehículo existentes. El historial no mantiene una colección independiente: se construye a partir de las órdenes entregadas. El Dashboard obtiene sus contadores de las colecciones y se actualiza mediante eventos del documento.

El prototipo no constituye una aplicación lista para producción; no dispone de autenticación, respaldo centralizado, sincronización multiusuario ni controles de seguridad de servidor.

## Product Backlog

El Product Backlog inicial de Taller Nexus está compuesto por 13 historias de usuario relacionadas con las funcionalidades principales del prototipo.

### Estado final del Product Backlog — Cierre del Sprint 6 y estabilización

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

Posteriormente se completaron las seis tareas de estabilización TKT-01 a TKT-06, sin ampliar el Product Backlog inicial. El desarrollo técnico está concluido y el Expediente Final está preparado. La entrega y defensa de la Semana 13 quedan sujetas al calendario y evaluación del curso.

## Estado del proyecto

**Cierre técnico y documental — Semanas 11, 12 y 13.**

**Estado:** prototipo finalizado y documentación preparada para la entrega oficial.

**Fecha de corte de la revisión técnica y documental:** 25 de noviembre de 2026. La demostración y la defensa ante el docente no se declaran realizadas.

### Avance académico

El Expediente Final incorpora las siguientes 13 secciones:

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
- Sección 10 — Comunicación y responsabilidades del equipo.
- Sección 11 — Decisiones, cambios y evidencias.
- Sección 12 — Producto / Incremento final y cierre del proyecto (incluye informe final).

Las 13 secciones están elaboradas. La presentación y evaluación académica corresponden al cierre oficial del curso.

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
| 11 | Comunicación, responsabilidades y mejoras | Completada en el Expediente y el producto |
| 12 | Integración, evidencias y preparación de Demo | Preparada; pruebas finales reportadas |
| 13 | Entrega final y defensa del proyecto | Informe final preparado; entrega y defensa pendientes |

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

Las horas y montos corresponden a la planificación referencial; no se dispone de un registro verificado de horas reales ni de comprobantes de gastos. Por tanto, no se calculan desviaciones reales de esfuerzo o costo.

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

### Seguimiento de riesgos al cierre

La tabla anterior conserva la evaluación inicial como línea base. Las medidas posteriores incluyen:

| Riesgo | Respuesta aplicada o situación residual |
|---|---|
| R-01, R-06 | Las 13 historias iniciales y las seis tareas de estabilización se completaron sin añadir módulos fuera del alcance. |
| R-02 | Los datos ficticios permiten reconstruir un escenario de demostración; la información de usuario sigue dependiendo del almacenamiento local. |
| R-03, R-08 | Se incorporaron restricciones de eliminación y cambio de propietario, normalización de placas y validación de relaciones y formularios. |
| R-04 | Se reportaron pruebas de integración y regresión satisfactorias; el riesgo no se considera eliminado por completo. |
| R-05 | Se preparó un escenario ficticio y un guion de Demo; la presentación ante el docente sigue pendiente. |
| R-07, R-09 | Se distribuyó el cierre entre los integrantes y se registraron los cambios en `main`; se mantienen los acuerdos de coordinación y control de versiones. |

La Sección 11 del Expediente desarrolla el seguimiento y las respuestas aplicadas. No se presume que todos los riesgos hayan desaparecido.

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

No se identificaron adquisiciones adicionales obligatorias durante la estabilización. Cualquier necesidad futura de una versión de producción deberá evaluarse por separado.

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

El enfoque principal de los seis Sprints consistió en pruebas funcionales manuales estructuradas. En la estabilización, Felipe reportó además pruebas automatizadas de lógica/DOM con Node.js y pruebas E2E con Google Chrome headless mediante Chrome DevTools Protocol contra un servidor local. El alcance y los resultados de estas pruebas se detallan en la sección de validación final.

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

Al cierre del Sprint 6 se establecieron las siguientes acciones de mejora:

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

Estas acciones se concretaron en el bloque de estabilización TKT-01 a TKT-06 y en la integración documental del cierre.

## Mecanismo de seguimiento

El trabajo se organiza mediante un tablero de seguimiento con cuatro estados:

- **Pendiente**
- **En progreso**
- **En revisión / pruebas**
- **Completado**

Las actividades se actualizaron conforme avanzaron los Sprints y el bloque de estabilización.

GitHub permite mantener evidencia de los cambios mediante commits descriptivos y el historial de versiones.

Al finalizar cada Sprint se realizaron pruebas funcionales, Sprint Review y Sprint Retrospective para evaluar los resultados obtenidos e identificar oportunidades de mejora.

## Priorización del desarrollo

El orden lógico de las funcionalidades principales es:

**Clientes → Vehículos → Citas → Órdenes de servicio → Seguimiento de estados → Historial**

El Dashboard se desarrolló progresivamente y se completó mediante la validación integral realizada en el Sprint 6.

Al finalizar la Semana 10, todas las funcionalidades del Product Backlog inicial quedaron implementadas. La etapa posterior reforzó el producto sin contabilizar las tareas técnicas como historias adicionales.

## Comunicación y responsabilidades — Semana 11

La Sección 10 del Expediente formaliza la matriz de responsabilidades (RACI), el plan de comunicación y los Working Agreements, adaptados al tamaño del Scrum Team.

| Integrante | Rol y participación en el cierre |
|---|---|
| Ignacio Araya Rojas | Product Owner / Developer: validación del alcance, verificación local de la versión integrada y coordinación del cierre documental. |
| Felipe Carrera Araya | Scrum Master / Developer: implementación de TKT-01 a TKT-06, pruebas técnicas y registro de commits. |
| Ambos integrantes | Responsabilidad compartida por la calidad del incremento y preparación de la defensa. |

Se establecieron acuerdos para coordinar los cambios, revisar impedimentos, validar las funcionalidades, utilizar datos ficticios, realizar commits descriptivos y conservar la coherencia entre GitHub y el Expediente. El profesor constituye un interesado académico y no forma parte del Scrum Team.

## Estabilización técnica — Semanas 11 y 12

Una vez completadas las 13 historias originales, se ejecutó un bloque de seis tareas de estabilización. No se presentan como nuevos Sprints independientes ni como nuevas historias de usuario. El objetivo fue fortalecer el incremento funcional y prepararlo para la demostración sin introducir dependencias ni cambiar la arquitectura.

| ID | Actividad | Estado | Commit |
|---|---|---|---|
| TKT-01 | Integridad referencial | Completada | [e44287e](https://github.com/nachoar24/taller-nexus/commit/e44287ef2e2a2da6337f72d5d612d3ae6bc38a6c) |
| TKT-02 | Validaciones de formularios y relaciones | Completada | [ca94644](https://github.com/nachoar24/taller-nexus/commit/ca94644d3bb032b7d4668207e41b75716d7d84c5) |
| TKT-03 | Presentación segura de información | Completada | [382c643](https://github.com/nachoar24/taller-nexus/commit/382c6439426495522aa0e09c58fd884367d2774b) |
| TKT-04 | Interfaz y diseño responsive | Completada | [21669f8](https://github.com/nachoar24/taller-nexus/commit/21669f802d9fd953e25c1cf0db026d75c8c3dfa0) |
| TKT-05 | Datos ficticios de demostración | Completada | [39e0d6e](https://github.com/nachoar24/taller-nexus/commit/39e0d6e496c7277b00b7674626c9f6bdb1b7c816) |
| TKT-06 | Regresión final y corrección de favicon | Completada | [6c8ac31](https://github.com/nachoar24/taller-nexus/commit/6c8ac31575ee0b40cf13bf34cf50a3b1833b2b1c) |

### TKT-01 — Integridad referencial

Se impide eliminar clientes que tengan vehículos, citas u órdenes asociados y vehículos que tengan citas u órdenes, incluyendo servicios entregados. También se impide cambiar el propietario de un vehículo con citas u órdenes vinculadas. Se informa al usuario de las dependencias y se permite eliminar los registros sin relaciones. No se realizan eliminaciones en cascada.

### TKT-02 — Validaciones de formularios

- Clientes: campos obligatorios, formato básico de correo y teléfonos de 7 a 15 dígitos en formatos habituales.
- Vehículos: propietario existente, año entero entre 1900 y el año actual más uno, normalización de placas en mayúsculas sin espacios ni guiones para detectar duplicados.
- Citas: cliente y vehículo existentes, asociación correcta, fecha y hora válidas, servicio obligatorio y observaciones opcionales. Se permiten fechas históricas.
- Órdenes: relación cliente–vehículo, campos obligatorios, fecha válida y control de los cinco estados permitidos.

### TKT-03 — Presentación segura de información

Se sustituyó la interpolación de entradas de usuario mediante `innerHTML` en las tablas de clientes, vehículos y citas por `insertCell()`, `createElement()`, `textContent` y `appendChild()`. Se conservaron los botones, identificadores y eventos. Órdenes e Historial ya utilizaban presentación mediante texto. Esta medida reduce el riesgo de inyección de HTML y JavaScript en los puntos revisados; no equivale a una garantía de seguridad integral.

### TKT-04 — Interfaz y diseño responsive

Se corrigieron desbordamientos del contenedor principal, se mantuvo desplazamiento horizontal interno de tablas, se unificaron los controles y se ajustó la navegación para pantallas pequeñas. Se incorporaron etiquetas de color por estado con su texto original y un formato monoespaciado para identificadores de órdenes.

### TKT-05 — Datos de demostración

Se creó `js/demo.js` y se añadió el botón **Cargar datos de demostración**. La carga requiere confirmación y un entorno vacío; contiene 3 clientes, 4 vehículos, 3 citas y 6 órdenes (3 activas y 3 entregadas). Se actualizan todos los módulos y los indicadores sin duplicar la información del historial.

### TKT-06 — Regresión y corrección final

Se reportó la ejecución de pruebas de lógica y DOM y pruebas E2E de regresión. Se detectó una solicitud fallida del favicon (404) y se corrigió incorporando un favicon SVG inline en `index.html`. El informe posterior reportó cero errores de consola y cero excepciones JavaScript durante los escenarios evaluados.

Los archivos modificados fueron `index.html`, `css/styles.css`, `js/clientes.js`, `js/vehiculos.js`, `js/citas.js` y `js/ordenes.js`; se creó `js/demo.js`. Se conservaron `js/app.js` y `js/historial.js` y las cuatro colecciones existentes de `localStorage`.

## Validación final del producto

De acuerdo con el resumen técnico de Felipe, generado con Antigravity, se ejecutaron pruebas automatizadas de lógica/DOM en Node.js y pruebas E2E en Chrome headless. Ignacio confirmó posteriormente el funcionamiento de la versión actualizada en su entorno local.

| Área evaluada | Resultado reportado |
|---|---|
| Integridad referencial | Bloqueos de eliminación y cambio de propietario con dependencias; eliminación permitida cuando no existen relaciones. |
| Validaciones | Entradas inválidas y relaciones incorrectas rechazadas; detección de placas duplicadas normalizadas. |
| Presentación de datos | Cadenas de prueba con etiquetas HTML y JavaScript mostradas literalmente, sin ejecutar código en los puntos revisados. |
| Datos de demostración | Confirmación, carga exclusiva en entorno vacío y prevención de duplicados; indicadores 3 / 4 / 3 / 3. |
| Clientes, vehículos y citas | Operaciones de creación, consulta, edición y eliminación según las restricciones aplicables. |
| Órdenes | Registro y actualización de los cinco estados. |
| Historial | Solo órdenes entregadas del vehículo seleccionado, actualización dinámica y mensaje sin registros. |
| Dashboard | Contadores correctos; las órdenes entregadas se excluyen de las activas. |
| Persistencia | Conservación de los registros después de recargar la página. |
| Responsive | Seis secciones verificadas en escritorio (1280 × 800), tablet (768 × 1024) y móvil (375 × 812), sin desbordamiento horizontal de página. |
| Consola | 0 errores y 0 excepciones JavaScript reportados en los escenarios evaluados después de corregir el favicon. |

El resultado general reportado fue satisfactorio, sin fallos bloqueantes conocidos en los escenarios evaluados. Estos resultados corresponden al informe técnico compartido por el equipo; los scripts, registros de ejecución y capturas originales de la automatización no forman parte de las evidencias aportadas. No se declara un porcentaje de cobertura automatizada, una certificación de seguridad ni compatibilidad universal con todos los navegadores.

## Evidencias del desarrollo

El historial de GitHub mantiene la trazabilidad de los seis incrementos funcionales y la etapa de estabilización. Los siguientes commits son referencias representativas; el historial completo está disponible en la rama `main`.

| Etapa | Evidencia técnica | Commit de referencia |
|---|---|---|
| Sprint 1 | Base funcional y gestión de clientes | [db4935f](https://github.com/nachoar24/taller-nexus/commit/db4935fb0f7a9755643b781535cc732f345a0076) |
| Sprint 2 | Gestión de vehículos | [84c25a8](https://github.com/nachoar24/taller-nexus/commit/84c25a835c7ddadc9fdcd651648c5afc416f9794) |
| Sprint 3 | Gestión de citas | [fcd5714](https://github.com/nachoar24/taller-nexus/commit/fcd5714de5fa2cc890c3c5c3c847faa7bfb8) |
| Sprint 4 | Registro y consulta de órdenes de servicio | [f70fe18](https://github.com/nachoar24/taller-nexus/commit/f70fe18a18d958d535570a86d26686719b3d2a1e) |
| Sprint 5 | Actualización de estados | [ce5a89b](https://github.com/nachoar24/taller-nexus/commit/ce5a89bb68a987afa306715fa335d9dec08e8de7) |
| Sprint 6 | Interfaz del historial | [87b9185](https://github.com/nachoar24/taller-nexus/commit/87b91850e1bb3dfb19d092cff18253ea4b57767c) |
| Sprint 6 | Lógica del historial | [b500b44](https://github.com/nachoar24/taller-nexus/commit/b500b443805aa95f8163d7fc54678bcda924964e) |
| Semana 10 | Cierre documental del Sprint 6 | [0e0bef3](https://github.com/nachoar24/taller-nexus/commit/0e0bef3df75024ca02314064e1eb750546e9ae79) |
| Estabilización | Última corrección de regresión | [6c8ac31](https://github.com/nachoar24/taller-nexus/commit/6c8ac31575ee0b40cf13bf34cf50a3b1833b2b1c) |

Los seis commits de estabilización se encuentran detallados en la sección anterior. La Sección 11 del Expediente contiene el registro de decisiones, cambios, seguimiento de riesgos y resultados de pruebas, así como las evidencias disponibles y el escenario previsto para la Demo.

## Preparación de la demostración final

1. Abrir la versión final sincronizada del repositorio en un perfil de navegador dedicado y vacío.
2. Cargar y confirmar los datos de demostración desde el Dashboard. Verificar los indicadores iniciales: 3 clientes, 4 vehículos, 3 citas y 3 órdenes activas.
3. Mostrar los módulos de Clientes, Vehículos y Citas, incluyendo la asociación entre un cliente y sus vehículos.
4. Ingresar en Órdenes de servicio y mostrar los estados disponibles. Seleccionar la orden `ORD-DEMO-01` del Toyota Corolla, inicialmente En reparación.
5. Cambiar la orden a Entregado y guardar. Comprobar que el contador de órdenes activas disminuya de 3 a 2.
6. Consultar el historial del Toyota Corolla. Deben aparecer tres servicios entregados. Consultar otro vehículo para demostrar el filtrado.
7. Recargar la aplicación y volver a consultar la información para comprobar la persistencia.
8. Mostrar la validación de una operación inválida o de la eliminación de un registro con dependencias y explicar las restricciones del prototipo.

El guion anterior es un escenario de demostración previsto; no representa una presentación ya realizada ante el docente. Mantener una copia local actualizada y el PDF del Expediente como respaldo.

## Lecciones aprendidas y recomendaciones

- Un Product Goal claro y un alcance acotado facilitaron la finalización del prototipo.
- Los incrementos pequeños permitieron reutilizar los componentes y datos existentes.
- Las validaciones, la integridad referencial y la presentación segura de datos deben considerarse desde el inicio.
- Los commits descriptivos y las pruebas de regresión fortalecen la trazabilidad y la confianza en los cambios.
- Los datos ficticios y el diseño adaptable facilitan una demostración reproducible.
- Una futura versión de producción requeriría autenticación, control de acceso, persistencia robusta, respaldos y una infraestructura apropiada; estas capacidades permanecen fuera del alcance académico.

## Entrega final — Semana 13

El Expediente incluye el informe final con el balance del alcance, el Product Backlog definitivo, la arquitectura, la evaluación de calidad, el balance temporal y económico, las conclusiones, las recomendaciones y el guion de demostración.

| Entregable | Estado al preparar el cierre |
|---|---|
| Expediente del Proyecto (13 secciones) | Elaborado |
| Informe final | Incorporado en la Sección 12 |
| Prototipo funcional Taller Nexus | Completado y validado por el equipo |
| Repositorio e historial de commits | Cambios técnicos registrados; documentación final incorporada en este cierre |
| Evidencias de desarrollo y pruebas | Commits y resultados disponibles documentados |
| Demostración del incremento | Guion preparado; presentación ante el docente pendiente |
| Defensa y evaluación final | Pendientes de la entrega oficial del curso |

La evaluación académica y la aceptación del proyecto corresponden al profesor. El cierre técnico no sustituye la presentación ni la defensa.

## Estado general al cierre del proyecto

| Indicador | Estado |
|---|---|
| Sprints funcionales completados | 6 |
| Historias de usuario completadas | 13 de 13 |
| Historias pendientes del Product Backlog inicial | 0 |
| Tareas de estabilización completadas | 6 de 6 |
| Secciones del Expediente elaboradas | 13 de 13 |
| Alcance funcional inicial | Completado |
| Pruebas finales | Satisfactorias según el informe del equipo |
| Desarrollo técnico | Concluido |
| Cierre documental | Preparado para entrega |
| Demostración y defensa | Pendientes de realización ante el docente |

Taller Nexus cumplió el Product Goal y el alcance académico inicial mediante seis incrementos funcionales y un bloque de estabilización. El resultado permite demostrar la gestión de clientes, vehículos, citas y órdenes, el seguimiento de los trabajos, la consulta de servicios finalizados y la visualización de indicadores, utilizando la arquitectura original de HTML5, CSS3, JavaScript Vanilla y `localStorage`.

El prototipo, el repositorio y el Expediente Final quedan preparados para la entrega oficial de la Semana 13.
