// --2. Stwórz plik Login.cy.ts w katalogu e2e, przypisz user.json do wewnętrznej zmiennej user.

// --3. Napisz warunki poprawnego logowania - wizyta na stronie /login,
// --przechwycenie inputów, przekazanie im testowych danych,
// --przechwycenie i kliknięcie buttona do logowania. Sprawdzenie czy nowy url to “/home”.
// --Sprawdzenie czy w localStorage znajduje się user o wartości z inputa login
// (to.deep.equal). Sprawdzenie, czy jest widoczny koszyk.

/// <reference types="cypress" />


describe('My First Test', () => {
  let user: any;
  before(() => {
    cy.fixture("user.json").then((userdata) => {
      user = userdata
    })
  })
    it('clicking "type" navigates to a new url', () => {
      const {login, password} = user;
      cy.visit('http://localhost:3000/');
    
      cy.get('input[name="login"]').type(login);
      cy.get('input[name="password"]').type(password);
      cy.contains('Log in').click();
      cy.url().should('include', '/home');
      cy.getAllLocalStorage().then((result) => {
        expect(result).to.deep.equal({
          'http://localhost:3000': {
            user: 'test',
          },
        })
      })
      cy.contains('Log out').should('be.visible');
    })
  });