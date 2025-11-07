# Actividad Cypress | Aserciones y Comandos

-   Este proyecto automatiza pruebas del formulario de registro del sitio Ticketazo utilizando Cypress.

## Clonar el repositorio:

-   git clone https://github.com/misaa023/actividad1

## Instalar dependencias:

-   npm install

## Ejecutar Test

-   npx cypress open

## Estructura del proyecto

```bash
cypress-aserciones/
│
├── cypress/
│   ├── e2e/
│   │   └── registro.cy.js       # Casos de prueba principales
│   ├── support/
│   │   └── commands.js          # Custom Commands reutilizables
│   └── fixtures/              
│
├── package.json                
└── README.md                    # Documentación del proyecto
```

## Pruebas Implementadas

1. Registro exitoso

2. Email duplicado

3. DNI duplicado

4. Redirección al login tras registro

5. Validación de contraseñas inválidas
