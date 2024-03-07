import config from "../fixtures/config.json";

describe("Login", () => {
  it.only("Probar usuario y contraseña como campos vacíos", () => {
    cy.visit(config.baseURL)
    cy.get("#login-button").click()
    cy.location().then((location) => {
      cy.wrap(location.href).should(
        "contain",
        config.emptyLocation
      )
    })
  })
 })