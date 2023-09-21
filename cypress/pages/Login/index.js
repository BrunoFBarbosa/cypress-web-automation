import BannerUsuario from "../BannerUsuario"
import RecuperarSenha from "../RecuperarSenha"

const el = require('./elements').ELEMENTS

class Login {
    visit() {
      cy.visit("/customer/account/login")
    }
   
    inputEmail(text) {
      return cy.get(el.inputEmail).type(text, {delay: 100})
    }

    inputPassword(text) {
      return cy.get(el.inputPassword).type(text, {delay: 100, log: false})
    }

    clickSignIn() {
      cy.get(el.buttonSignIn).first().click()
      return new BannerUsuario()
    }

    clickForgotPassword() {
      cy.get(el.forgotPassword).click()
      return new RecuperarSenha()
    }
   
  }

  module.exports = Login