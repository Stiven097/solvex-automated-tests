import config from "../fixtures/config.json";

describe("Login", () => {
  it("Probar usuario y contraseña válidos", () => {
    
    cy.visit(config.baseURL);
    cy.get("#user-name").type(config.mainUser)
    cy.get("#password").type(config.truePassword, {log:false})
    cy.get("#login-button").click()
    cy.location().then((location) => {
      cy.wrap(location.href).should(
        "contain",
        config.location
      )
    })
  })
 })