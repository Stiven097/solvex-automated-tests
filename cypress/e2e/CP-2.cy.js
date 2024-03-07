import config from "../fixtures/config.json";

describe("Login", () => {
  it("Probar usuario válido y contraseña inválida", () => {
    cy.visit(config.baseURL)
    cy.get("#user-name").type(config.mainUser)
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