/// <reference types="cypress" />

    let user: any;
before(() => {
    cy.fixture('user.json').then((userdata) => {
        user = userdata
    });
});

describe('Testing', () => {    
    it('should display error on invalid credentials', () => {
        const {login, password} = user
        cy.visit('/login');
        cy.get('input[name="login"]').type(login);
        cy.get('input[name="password"]').type(password);
        cy.contains('Login').click();
        cy.url().should('include', '/home');
        cy.getAllLocalStorage().then((result) => {
            expect(result).to.deep.equal({
                'http://localhost:3000': {
                    user: 'test',
                },
            })
        })
        cy.contains('Price').should('be.visible');
    });
});
