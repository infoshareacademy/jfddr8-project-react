import cypress from "cypress"


describe('Test logowania do strony', ()=>{
    let user;
    before(()=>{
        cy.fixture("user.json").then((e)=>{user=e})
    })
    it('e2e application',()=>{
        const {login, password} = user
        cy.visit('/login')
        cy.get("input[placeholder=\"login\"]").type(login);
        cy.get("input[placeholder=\"password\"]").type(password);
        cy.contains("Login").click();
        cy.url().should('include', '/home');
        cy.getAllLocalStorage().then((data)=> {expect(data,'Admin')})
        cy.contains('Log out').click()
    })



})