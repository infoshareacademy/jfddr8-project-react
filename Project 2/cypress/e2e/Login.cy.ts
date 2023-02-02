import type {} from "cypress";

describe("login", () => {
    let user;
    before(() => {
        cy.fixture("user.json").then((userData) => {
            user=userData
        });
    });
    it
});