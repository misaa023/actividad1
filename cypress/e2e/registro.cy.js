describe('Formulario de Registro', () => {
    beforeEach(() => {
        cy.visit('https://ticketazo.com.ar/auth/registerUser');
    });

    // REGISTRO DE USUARIO
    it('Completar el registro ', () => {
        cy.completarDatosPersonales('Juan', 'Pérez', '3511234567', '20268800');
        cy.seleccionarUbicacion('Córdoba', 'Córdoba');
        cy.ingresarFechaNacimiento('15', '08', '1995');
        cy.ingresarCredenciales('juan.perez90@example.com', 'P@ssw0rd123');
        cy.get('[data-cy="btn-registrarse"]').click().wait(2000);
    });

    // Ejercicio 2: Email ya registrado

    it('Error: Email ya registrado', () => {
        cy.completarDatosPersonales('Ana', 'López', '3512223344', '30445566');
        cy.seleccionarUbicacion('Córdoba', 'Córdoba');
        cy.ingresarFechaNacimiento('10', '02', '1990');
        cy.ingresarCredenciales('juan.perez90@example.com', 'P@ssw0rd123');
        cy.get('[data-cy="btn-registrarse"]').click();
        cy.contains('El email ya se encuentra registrado').should('be.visible');
    });

    // Ejercicio 3: DNI ya registrado
    it('Error: DNI ya registrado', () => {
        cy.completarDatosPersonales(
            'Carlos',
            'Martínez',
            '3519991111',
            '20268800',
        );
        cy.seleccionarUbicacion('Córdoba', 'Córdoba');
        cy.ingresarFechaNacimiento('22', '05', '1998');
        cy.ingresarCredenciales('carlos.martinez@example.com', 'P@ssw0rd123');
        cy.get('[data-cy="btn-registrarse"]').click();
        cy.contains('El DNI ya se encuentra registrado').should('be.visible');
    });

    // Ejercicio 4: Validar redirección exitosa
    it('Validar redirección exitosa', () => {
        cy.completarDatosPersonales('Lucía', 'Gómez', '3518887766', '40677889');
        cy.seleccionarUbicacion('Córdoba', 'Córdoba');
        cy.ingresarFechaNacimiento('12', '03', '1999');
        cy.ingresarCredenciales('lucia.gomez99@example.com', 'P@ssw0rd123');
        cy.get('[data-cy="btn-registrarse"]').click();
        cy.wait(2000);
        cy.url().should('eq', 'https://ticketazo.com.ar/auth/login');
    });

    // Ejercicio 5: Validación de requisitos de contraseña
    it('Validación de requisitos de contraseña', () => {
        cy.completarDatosPersonales('Sofía', 'Ruiz', '3512221111', '40111222');
        cy.seleccionarUbicacion('Córdoba', 'Córdoba');
        cy.ingresarFechaNacimiento('01', '01', '2000');
        cy.get('[data-cy="input-email"]').type('sofia.ruiz@example.com');
        cy.get('[data-cy="input-confirmar-email"]').type(
            'sofia.ruiz@example.com',
        );
        cy.get('[data-cy="input-password"]').type('123');
        cy.get('[data-cy="input-repetir-password"]').type('123');
        cy.get('[data-cy="btn-registrarse"]').click();
        cy.contains('La contraseña debe tener al menos 8 caracteres').should(
            'be.visible',
        );
        cy.contains(
            'Debe incluir una mayúscula, minúscula, número y símbolo',
        ).should('be.visible');
    });
});
