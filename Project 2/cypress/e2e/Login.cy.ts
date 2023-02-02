import type {} from "cypress";

describe("login", () => {
    let user;
    before(() => {
        cy.fixture("user.json").then((userData) => {
            user=userData
        });
    });
    it("login testing", () => {
        const { login, password } = user ;
        cy.visit("http://localhost:3000/login");
        cy.get('input[placeholder="login"]').type(login);
        cy.get('input[placeholder="password"]').type(password);
        cy.contains('Login').click();
        cy.url().should('include', '/home');
        cy.getAllLocalStorage().then((data) => {
            expect(data).to.deep.equal({'http://localhost:3000': { user:login }});
        })
        cy.contains(/^Price/).should('be.visible');
    })
});