const el = require('./elements').ELEMENTS

class ProdutosGrid {
   
    clickProduct(position) {
      return cy.get(el.productOption).eq(position).click()
    }

    getPageTitle() {
      return cy.get(el.pageTitle)
    }
  }

module.exports = ProdutosGrid