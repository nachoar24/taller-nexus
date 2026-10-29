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
│   └── clientes.js
└── assets/
    └── images/
```

## Backlog inicial

El Backlog inicial de Taller Nexus contempla historias de usuario relacionadas con los siguientes módulos:

- Clientes
- Vehículos
- Citas
- Órdenes de servicio
- Seguimiento de estados
- Historial de servicios
- Dashboard

Las historias correspondientes al módulo de Clientes fueron completadas durante el Sprint 1.

Las funcionalidades restantes serán desarrolladas progresivamente durante los siguientes Sprints.

## Estado del proyecto

**Semana 6 - Backlog inicial, Sprint Backlog y mecanismo de seguimiento.**

### Sprint 1

**Sprint 1 - Base funcional y gestión inicial de clientes**

**Estado:** Completado.

**Sprint Goal:** Construir la base navegable de Taller Nexus e implementar una primera funcionalidad de gestión de clientes que permita demostrar el inicio funcional del prototipo.

### Incremento obtenido en Sprint 1

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

## Sprint actual

### Sprint 2 - Gestión de vehículos

**Estado**: Completado

### Sprint Goal

Implementar la gestión básica de vehículos en Taller Nexus, permitiendo registrar cada vehículo y asociarlo con un cliente existente, así como consultar, modificar y eliminar la información almacenada.

### Historias seleccionadas

- Registrar vehículos y asociarlos con sus propietarios
- Consultar vehículos registrados
- Modificar vehículos
- Eliminar vehículos
- Actualizar el indicador de vehículos registrados en el Dashboard

### Tareas previstas

- Crear `vehiculos.js`
- Crear el formulario de registro de vehículos
- Asociar vehículos con clientes existentes
- Implementar persistencia mediante `localStorage`
- Mostrar vehículos registrados
- Implementar edición de vehículos
- Implementar eliminación de vehículos
- Actualizar el contador de vehículos en el Dashboard
- Realizar pruebas funcionales
- Ejecutar Sprint Review y Sprint Retrospective

## Mecanismo de seguimiento

El trabajo de cada Sprint será gestionado mediante los siguientes estados:

- **Pendiente**
- **En progreso**
- **En revisión / pruebas**
- **Completado**

El repositorio GitHub permitirá mantener evidencia adicional de la evolución del proyecto mediante commits descriptivos y el historial de cambios.

## Avance académico

Hasta el momento se ha completado:

- Project Charter
- Product Goal
- Scrum Team
- Contexto organizacional
- Restricciones del proyecto
- Identificación y análisis de stakeholders
- Mapa de interesados
- Ciclo de vida del proyecto
- Sprint 1
- Pruebas funcionales del Sprint 1
- Sprint Review del Sprint 1
- Sprint Retrospective del Sprint 1
- Backlog inicial
- Sprint Backlog del Sprint 2
- Mecanismo de seguimiento

## Próximos pasos

- Ejecutar el Sprint 2
- Implementar el módulo de vehículos
- Asociar vehículos con clientes existentes
- Actualizar el Dashboard
- Realizar pruebas funcionales
- Completar Sprint Review y Sprint Retrospective
- Continuar con la priorización formal del Product Backlog en la siguiente etapa del proyecto

### Incremento obtenido en Sprint 2

Durante el Sprint 2 se implementó:

- Registro de vehículos
- Asociación de vehículos con clientes existentes
- Consulta de vehículos
- Edición de vehículos
- Eliminación de vehículos
- Validación de placas duplicadas
- Persistencia mediante `localStorage`
- Contador dinámico de vehículos en el Dashboard
- Pruebas funcionales del módulo