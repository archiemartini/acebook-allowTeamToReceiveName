const signUp = require('../support/signup_helper')
const signIn = require('../support/signin_helper')

describe("Authentication", () => {
  it("A user signs in and is redirected to /posts", () => {
    signUp();
    signIn();
    cy.url().should("include", "/posts");
    cy.contains("a", "New post");
  });
});
