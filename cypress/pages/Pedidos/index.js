const el = require('./elements').ELEMENTS

class Pedidos {
   
    getOrderTotal() {
      return cy.get(el.orderTotal)
    }
  }

module.exports = Pedidos