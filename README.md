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

**Semana 5 - Ciclo de vida del proyecto y Sprint 1 completado.**

### Sprint 1

**Sprint 1 - Base funcional y gestión inicial de clientes**

**Sprint Goal:** Construir la base navegable de Taller Nexus e implementar una primera funcionalidad de gestión de clientes que permita demostrar el inicio funcional del prototipo.

**Estado:** Completado.

### Incremento obtenido

Durante el Sprint 1 se implementó:

- Estructura general de Taller Nexus
- Navegación entre módulos
- Dashboard inicial
- Módulo funcional de clientes
- Registro de clientes
- Visualización de clientes
- Edición de clientes
- Eliminación de clientes
- Persistencia mediante `localStorage`
- Indicador dinámico de clientes registrados en el Dashboard

Los módulos de Vehículos, Citas y Órdenes de servicio se encuentran incluidos en la navegación, pero permanecen pendientes para futuras iteraciones.

### Avance del proyecto

Hasta el momento se ha completado:

- Project Charter
- Product Goal
- Conformación del Scrum Team
- Contexto organizacional y restricciones
- Identificación y análisis de stakeholders
- Mapa de interesados
- Definición del ciclo de vida
- Planificación del Sprint 1
- Desarrollo del primer incremento funcional
- Pruebas funcionales del Sprint 1
- Sprint Review
- Sprint Retrospective

## Próxima etapa

La siguiente etapa del proyecto corresponde a la **Semana 6**, donde se trabajará en el Backlog inicial, Sprint Backlog y mecanismo de seguimiento del proyecto.