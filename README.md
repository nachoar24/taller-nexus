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

## Tecnologías previstas

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

## Estado del proyecto

**Semana 5 - Ciclo de vida del proyecto y ejecución del Sprint 1.**

### Sprint actual

**Sprint 1 - Base funcional y gestión inicial de clientes**

### Sprint Goal

Construir la base navegable de Taller Nexus e implementar una primera funcionalidad de gestión de clientes que permita demostrar el inicio funcional del prototipo.

### Alcance del Sprint 1

Durante el Sprint 1 se trabajará inicialmente en:

- Estructura general de la aplicación
- Navegación principal
- Diseño visual inicial
- Módulo de clientes
- Registro de clientes
- Visualización de clientes
- Edición de clientes
- Eliminación de clientes
- Persistencia de información mediante `localStorage`

### Avance actual

Hasta el momento se ha completado:

- Definición inicial del proyecto
- Project Charter
- Product Goal
- Conformación del Scrum Team
- Contexto organizacional
- Restricciones del proyecto
- Identificación de stakeholders
- Mapa de interesados
- Definición del ciclo de vida del proyecto
- Planificación inicial del Sprint 1
- Creación de la estructura inicial del proyecto
- Creación del archivo `clientes.js`

## Próximos pasos

- Desarrollar la interfaz base de Taller Nexus
- Implementar la navegación principal
- Desarrollar el formulario de clientes
- Implementar almacenamiento mediante `localStorage`
- Implementar consulta, edición y eliminación de clientes
- Realizar pruebas funcionales
- Ejecutar la Sprint Review
- Registrar la retrospectiva del Sprint 1