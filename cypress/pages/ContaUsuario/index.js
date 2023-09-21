const el = require('./elements').ELEMENTS
class ContaUsuario {

    visit() {
      cy.visit(this.url)
    }
   
    getAccountCreationConfirmation() {
      return cy.get(el.confirmationAccountMessage)
    }
  }
  module.exports = ContaUsuario