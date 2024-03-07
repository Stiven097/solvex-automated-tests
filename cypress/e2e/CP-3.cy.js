import config from "../fixtures/config.json";

describe("Login", () => {
  it.only("Probar usuario inválido y contraseña válida", () => {
    cy.visit(config.baseURL)
    cy.get("#user-name").type(config.falseUser)
    cy.get("#password").type(config.truePassword, {log:false})
    cy.get("#login-button").click()
    cy.location().then((location) => {
      cy.wrap(location.href).should(
        "contain",
        config.emptyLocation
      )
    })
  })
 })