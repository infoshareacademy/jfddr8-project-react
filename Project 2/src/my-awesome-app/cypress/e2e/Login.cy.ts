import cypress from 'cypress';
import type {} from 'cypress';

describe('Test logowania do strony', () => {
    let user;
    before(()=> {
        cy.fixture('user.json').then((e)=>{user=e})
    })
    it('e2e application', ()=> {
        const {login, password} = user
        cy.visit('/login')
    // cy.get('label', 'login').type(login);
    // cy.contains('label', 'password').type(password);
    // cy.contains("Login").click();
    // cy.url().should('contain', '/home');
    // cy.getAllLocalStorage().then((data => {expect(data, 'Admin')}))
    })
})