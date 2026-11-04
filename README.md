# Taller Nexus

Prototipo web para la gestión de citas y órdenes de servicio de un taller automotriz.

## Curso

ISW-912 - Administración de Proyectos Informáticos

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

## Funcionalidades previstas

- Gestión de clientes
- Gestión de vehículos
- Gestión de citas
- Gestión de órdenes de servicio
- Seguimiento del estado de los trabajos
- Historial de servicios por vehículo
- Dashboard con información general

## Tecnologías

- HTML
- CSS
- JavaScript
- localStorage

## Alcance técnico

Taller Nexus será desarrollado como un prototipo web funcional sin backend ni base de datos externa.

La información será almacenada localmente en el navegador mediante `localStorage`, permitiendo demostrar las principales funcionalidades del sistema sin necesidad de infraestructura adicional.

## Estructura actual del proyecto

```text
taller-nexus/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── clientes.js
│   └── vehiculos.js
└── assets/
    └── images/
```

## Product Backlog

El Product Backlog actual de Taller Nexus está compuesto por 13 historias de usuario relacionadas con los siguientes módulos:

- Clientes
- Vehículos
- Citas
- Órdenes de servicio
- Seguimiento de estados
- Historial de servicios
- Dashboard

### Estado actual del Product Backlog

- **6 historias completadas**
- **1 historia en desarrollo incremental**
- **6 historias pendientes**
- **13 historias en total**

Las historias relacionadas con Clientes y Vehículos fueron completadas durante los Sprints 1 y 2.

La funcionalidad correspondiente al Dashboard se desarrolla progresivamente conforme se incorporan nuevos módulos.

## Estado del proyecto

**Semana 7 - Declaración de alcance, Product Backlog priorizado y criterios de aceptación.**

Hasta el momento se ha completado:

- Project Charter
- Product Goal
- Conformación del Scrum Team
- Contexto organizacional
- Restricciones del proyecto
- Identificación y análisis de stakeholders
- Mapa de interesados
- Ciclo de vida del proyecto
- Sprint 1
- Sprint 2
- Backlog inicial
- Sprint Backlog
- Mecanismo de seguimiento
- Declaración de alcance
- Product Backlog priorizado
- Criterios de aceptación

## Sprints completados

### Sprint 1 - Base funcional y gestión inicial de clientes

**Estado:** Completado.

### Sprint Goal

Construir la base navegable de Taller Nexus e implementar una primera funcionalidad de gestión de clientes que permita demostrar el inicio funcional del prototipo.

### Incremento obtenido

Durante el Sprint 1 se implementó:

- Estructura general de Taller Nexus
- Navegación principal
- Dashboard inicial
- Registro de clientes
- Visualización de clientes
- Edición de clientes
- Eliminación de clientes
- Persistencia mediante `localStorage`
- Contador dinámico de clientes registrados
- Pruebas funcionales
- Sprint Review
- Sprint Retrospective

---

### Sprint 2 - Gestión de vehículos

**Estado:** Completado.

### Sprint Goal

Implementar la gestión básica de vehículos en Taller Nexus, permitiendo registrar cada vehículo y asociarlo con un cliente existente, así como consultar, modificar y eliminar la información almacenada.

### Incremento obtenido

Durante el Sprint 2 se implementó:

- Registro de vehículos
- Asociación de vehículos con clientes existentes
- Consulta de vehículos
- Edición de vehículos
- Eliminación de vehículos
- Validación de placas duplicadas
- Persistencia mediante `localStorage`
- Contador dinámico de vehículos en el Dashboard
- Pruebas funcionales
- Sprint Review
- Sprint Retrospective

## Mecanismo de seguimiento

El trabajo de cada Sprint se gestiona mediante los siguientes estados:

- **Pendiente**
- **En progreso**
- **En revisión / pruebas**
- **Completado**

El repositorio GitHub mantiene evidencia adicional de la evolución del proyecto mediante commits descriptivos y el historial de cambios.

## Priorización actual

El orden lógico de desarrollo definido para las principales funcionalidades es:

**Clientes → Vehículos → Citas → Órdenes de servicio → Historial**

El Dashboard se desarrolla progresivamente conforme se incorporan los diferentes módulos.

## Próximo incremento

El siguiente incremento funcional estará enfocado en la **gestión de citas**.

Las historias previstas son:

- **HU-07:** Programar citas asociadas a un cliente y vehículo.
- **HU-08:** Consultar, modificar y eliminar citas programadas.
- **HU-13:** Incorporar al Dashboard el indicador correspondiente a citas.

El próximo incremento continuará el flujo funcional:

**Cliente → Vehículo → Cita**

Posteriormente, esta información servirá como base para incorporar las órdenes de servicio.