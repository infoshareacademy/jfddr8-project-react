import type {} from "cypress";

describe("Login Page", () => {
  let user;
  before(() => {
    cy.fixture("user.json").then((userData) => {
      user = userData;
    });
  });
  it("logins successfully", () => {
    const { login, password } = user;
    cy.visit("/login");
    cy.get("input[name=login]").type(login);
    cy.get("input[name=password]").type(password);
    cy.get("input[name=submit-login-form]").click();
    cy.url().should("include", "/home");
    cy.getAllLocalStorage().then((result) => {
      expect(result).to.deep.equal({
        "http://localhost:3000": { user: login },
      });
    });
    cy.contains(`Koszyk`).should("be.visible");
  });
});
