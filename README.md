# Actividad Cypress | Aserciones y Comandos

-   Este proyecto automatiza pruebas del formulario de registro del sitio Ticketazo utilizando Cypress.

## Clonar el repositorio:

-   git clone https://github.com/tuusuario/actividad-aserciones-cypress.git
    cd actividad-aserciones-cypress

## Instalar dependencias:

-   npm install

## Ejecutar Test

-   npx cypress open

## Estructura del proyecto

cypress-aserciones/
│
├── cypress/
│ ├── e2e/
│ │ └── registro.cy.js # Casos de prueba
│ ├── support/
│ │ └── commands.js # Custom Commands
│ └── fixtures/  
│
├── package.json
└── README.md

## Pruebas Implementadas

1. Registro exitoso

2. Email duplicado

3. DNI duplicado

4. Redirección al login tras registro

5. Validación de contraseñas inválidas
