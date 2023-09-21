import Pedidos from "../Pedidos"
const el = require('./elements').ELEMENTS

class Checkout {
   
    getOrderSummaryHeader() {
      return cy.get(el.orderSummary, {timeout: 5000})
    }

    getCheckoutPageLoader() {
      return cy.get(el.checkoutPageLoader)
    }

    getOrderPageLoader() {
      return cy.get(el.orderPageLoader, {timeout: 5000})
    }

    getSuccessMessage() {
      return cy.get(el.successMessage, { timeout: 10000 })
    }

    getShippingPrice(option) {
      return cy.get(el.shippingPrice).eq(option).invoke('text')
    }

    getTaxPrice() {
      return cy.get(el.taxPrice).invoke('text')
    }

    clickShippingOption(option) {
      return cy.get(el.shippingOption).eq(option).click()
    }

    clickNextButton() {
      return cy.get(el.buttonNext).click()
    }

    clickPlaceOrderButton() {
      return cy.get(el.buttonPlaceOrder).click()
    }

    clickOrderNumber() {
      cy.get(el.oderNumber).click()
      return new Pedidos()
    }
  }

module.exports = Checkout