const el = require('./elements').ELEMENTS
class BannerUsuario {
   
    getLoggedUser() {
      return cy.get(el.loggedInBanner, {timeout: 5000}).first()
    }
  }
  module.exports = BannerUsuario