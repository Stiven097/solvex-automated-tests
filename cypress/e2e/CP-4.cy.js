import config from "../fixtures/config.json";

describe("Login", () => {
  it("Probar usuario y contraseña inválidos", () => {
    cy.visit(config.baseURL)
    cy.get("#user-name").type(config.falseUser2)
    cy.get("#password").type(config.falsePassword, {log:false})
    cy.get("#login-button").click()
    cy.location().then((location) => {
      cy.wrap(location.href).should(
        "contain",
        config.emptyLocation
      )
    })
  })
 })