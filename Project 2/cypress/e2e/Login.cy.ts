import type {} from "cypress";

describe("login", () => {
  let user;
  before(() => {
    cy.fixture("user.json").then((userData) => {
      user = userData;
    });
  });

  it("Login user", () => {
    cy.visit("http://localhost:3000/login");
    cy.contains("label", "");
  });
});
