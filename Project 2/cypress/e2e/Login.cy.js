describe('Login test', () => {
    let user;
    before(() => {
        cy.fixture('user.json').then((userdata) => {
            user = userdata
        })
    })
    it('should log in', () => {
        const {login, password} = user
        cy.visit('http://localhost:3000/login/')
        cy.get('input[name="login"]').type(login)
        cy.get('input[name="password"]').type(password)
        cy.contains('Log in').click()
        cy.url().should('include', '/home')
        cy.getAllLocalStorage().then((result) => {
            expect(result).to.deep.equal({
                'http://localhost:3000': {
                    user: login,
                }
            })
        })
        cy.contains('Koszyk').should('be.visible')
    })
})