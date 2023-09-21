import ProdutosGrid from "../ProdutosGrid"

const el = require('./elements').ELEMENTS

class Header {
   
    clickShoppingCart() {
      return cy.get(el.miniCart).click()
    }

    getShoppingCart() {
      return cy.get(el.miniCart)
    }

    clickProceedToCheckout() {
      return cy.get(el.buttonCheckout).click()
    }

    getCartNumber() {
      return cy.get(el.counterNumber)
    }

    getShoppingCartItem() {
      return cy.get(el.miniCartItem)
    }

    InputSearchText(text) {
      return cy.get(el.inputSearch).type(text, {delay: 100, log: false})
    }

    clickSearchButton(text) {
      cy.get(el.buttonSearch).click()
      return new ProdutosGrid()
    }

  }

module.exports = Header