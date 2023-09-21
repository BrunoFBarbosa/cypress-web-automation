const el = require('./elements').ELEMENTS

class RecuperarSenha {
   
    inputEmail(text) {
      return cy.get(el.inputEmail).type(text, {delay: 100})
    }

    inputCaptcha(text) {
      return cy.get(el.inputCaptcha).type(text, {delay: 100, log: false})
    }

    clickResetPassword() {
      return cy.get(el.buttonResetPassword).click()
    }

    getErrorMessage() {
      return cy.get(el.errorMessage)
    }
   
  }

  module.exports = RecuperarSenha