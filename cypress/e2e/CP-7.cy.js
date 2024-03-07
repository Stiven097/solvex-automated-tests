import config from "../fixtures/config.json";

describe("Login", () => {
  it("Probar usuario inválido y contraseña como campo vacío", () => {
    cy.visit(config.baseURL)
    cy.get("#user-name").type(config.falseUser3)
    cy.get("#login-button").click()
    cy.location().then((location) => {
      cy.wrap(location.href).should(
        "contain",
        config.emptyLocation
      )
    })
  })
 })