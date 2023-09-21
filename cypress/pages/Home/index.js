const el = require('./elements').ELEMENTS

class Home {
    visit() {
      cy.visit("/")
    }

    clickSignIn() {
      return cy.get(el.signInButton).first().click()
    }
  }
  module.exports = Home