// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Ejercicio 1: Custom Commands
// ! El objetivo es reutilizar pasos repetidos del formulario usando Custom Commands.
Cypress.Commands.add(
    'completarDatosPersonales',
    (nombre, apellido, telefono, dni) => {
        cy.get('[data-cy="input-nombres"]').clear().type(nombre);
        cy.get('[data-cy="input-apellido"]').clear().type(apellido);
        cy.get('[data-cy="input-telefono"]').clear().type(telefono);
        cy.get('[data-cy="input-dni"]').clear().type(dni);
    },
);

Cypress.Commands.add('seleccionarUbicacion', (provincia, localidad) => {
    cy.get('[data-cy="select-provincia"]').clear().type(provincia);
    cy.contains('ul > li > span', provincia).click();
    cy.get('[data-cy="select-localidad"]').clear().type(localidad);
    cy.contains('ul > li > span', localidad).click();
});

Cypress.Commands.add('ingresarFechaNacimiento', (dia, mes, anio) => {
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="day"]')
        .clear()
        .type(dia);
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="month"]')
        .clear()
        .type(mes);
    cy.get('[data-cy="input-fecha-nacimiento"] [data-type="year"]')
        .clear()
        .type(anio);
});

Cypress.Commands.add('ingresarCredenciales', (email, password) => {
    cy.get('[data-cy="input-email"]').clear().type(email);
    cy.get('[data-cy="input-confirmar-email"]').clear().type(email);
    cy.get('[data-cy="input-password"]').clear().type(password);
    cy.get('[data-cy="input-repetir-password"]').clear().type(password);
});
