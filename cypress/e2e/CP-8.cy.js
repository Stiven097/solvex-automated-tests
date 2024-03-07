import config from "../fixtures/config.json";

describe("Login", () => {
  it("Probar usuario como campo vacío y contraseña válida", () => {
    cy.visit(config.baseURL)
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