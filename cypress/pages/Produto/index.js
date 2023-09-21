const el = require('./elements').ELEMENTS

class Produto {

  clickAddToCart() {
    return cy.get(el.buttonAddToCart).should('be.enabled').click()
  }

  getProductPrice() {
    return cy.get(el.productPrice).first().invoke('text')
  }

  getAddProductConfirmation() {
    return cy.get(el.productConfirmation)
  }
}

module.exports = Produto