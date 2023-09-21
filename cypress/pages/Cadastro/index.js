import ContaUsuario from "../ContaUsuario"

const el = require('./elements').ELEMENTS

class Cadastro {
    constructor() {
        this.url = "/customer/account/create/"
        this.title = "Create New Customer Account"
    }

    visit() {
      cy.visit(this.url)
    }
   
    inputFirstName(text) {
      return cy.get(el.inputFirstName).type(text)
    }

    inputLastName(text) {
        return cy.get(el.inputLastName).type(text)
    }

    inputEmail(text) {
        return cy.get(el.inputEmail).type(text)
    }

    inputPassword(text) {
        return cy.get(el.inputPassword).type(text, {delay: 100, log: false})
    }

    inputConfirmPassword(text) {
        return cy.get(el.inputPasswordConfirm).type(text, {delay: 100, log: false})
    }

    clickCreateAccountButton() {
        cy.get(el.buttonCreateAccount).click()
        return new ContaUsuario()

    }
  }
  module.exports = Cadastro