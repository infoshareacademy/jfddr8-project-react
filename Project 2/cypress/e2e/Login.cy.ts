import type {} from "cypress";

describe("Test of Login into home.side", () => {
  let user;
  before(() => {
    cy.fixture("user.json").then((e) => {
      user = e;
    });
  });
  it("E2E APPLICATION", () => {
    const { login, password } = user;
    cy.visit("/login");
    cy.get('input[placeholder="Wpisz swój login"]').type(login);
    cy.get('input[placeholder="wpisz hasło"]').type(password);
    cy.contains("Log in").click();
    cy.url({ decode: true }).should("contain", "/home");
    cy.getAllLocalStorage().then((data) => {
      expect(data, "Admin");
    });
    cy.contains("Log out").click();
  });
});
