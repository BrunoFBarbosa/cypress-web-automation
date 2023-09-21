const el = require('./elements').ELEMENTS

class Menu {
   
    mouseOverOption(option) {
      return cy.get(el.menuOption).filter(`:contains("${option}")`).filter(":visible").trigger('mouseover')
    }

    clickMenuOption(option) {
      return cy.get(el.menuOption).filter(`:contains("${option}")`).filter(":visible").click()
    }
  }

module.exports = Menu