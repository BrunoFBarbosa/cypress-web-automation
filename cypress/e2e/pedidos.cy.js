import ProdutosGrid from "../pages/ProdutosGrid";
import Produto from "../pages/Produto";
import Header from "../pages/Header";
import Checkout from "../pages/Checkout";
import Menu from "../pages/Menu";

const menu = new Menu()
const produtosGrid = new ProdutosGrid()
const produto = new Produto()
const header = new Header()
const checkout = new Checkout()
  
 describe("Pedidos - Fluxo normal", () => {

    beforeEach(() => { 
      cy.login()

    })

    it("deve realizar um pedido com sucesso", function () {
      menu.mouseOverOption("Gear")
      menu.clickMenuOption("Bags")

      produtosGrid.clickProduct(0)
      produto.clickAddToCart()

      produto.getProductPrice().as('productPrice')
      
      produto.getAddProductConfirmation().should("be.visible")

      header.getCartNumber().should("be.visible")
      header.clickShoppingCart()
      header.getShoppingCartItem().should("be.visible")
      header.clickProceedToCheckout()

      cy.url().should('include', '/checkout')
      checkout.getOrderSummaryHeader().should("be.visible")
      checkout.getCheckoutPageLoader().should('not.exist')
      checkout.getShippingPrice(0).as('shippingPrice')
      checkout.clickShippingOption(0)
      checkout.clickNextButton()
      
      checkout.getOrderPageLoader().should('exist')
      checkout.getTaxPrice().as('taxPrice')
      checkout.clickPlaceOrderButton()
      checkout.getSuccessMessage().should("contain.text", "Thank you for your purchase!")

      const pedidos = checkout.clickOrderNumber()
    
      cy.then(function () {
        let total = parseFloat(this.productPrice.replace('$', '')) + parseFloat(this.shippingPrice.replace('$', '')) + parseFloat(this.taxPrice.replace('$', ''))
        pedidos.getOrderTotal().should("contain.text", total.toString())
      })
    
   })
})

describe("Pedidos - Fluxo de busca", () => {

  beforeEach(() => { 
    cy.login()

  })

  it("deve realizar um pedido com sucesso buscando um produto específico", function () {
    
    header.InputSearchText("Aim Analog Watch")
    const produtosGrid = header.clickSearchButton()

    produtosGrid.getPageTitle().should("contain.text", `Search results for: 'Aim Analog Watch'`)
    produtosGrid.clickProduct(0)
    produto.clickAddToCart()

    produto.getProductPrice().as('productPrice')
    
    produto.getAddProductConfirmation().should("be.visible")

    header.getCartNumber().should("be.visible")
    header.clickShoppingCart()
    header.getShoppingCartItem().should("be.visible")
    header.clickProceedToCheckout()

    cy.url().should('include', '/checkout')
    checkout.getOrderSummaryHeader().should("be.visible")
    checkout.getCheckoutPageLoader().should('not.exist')
    checkout.getShippingPrice(0).as('shippingPrice')
    checkout.clickShippingOption(0)
    checkout.clickNextButton()
    
    checkout.getOrderPageLoader().should('exist')
    checkout.getTaxPrice().as('taxPrice')
    checkout.clickPlaceOrderButton()
    checkout.getSuccessMessage().should("contain.text", "Thank you for your purchase!")

    const pedidos = checkout.clickOrderNumber()
  
    cy.then(function () {
      let total = parseFloat(this.productPrice.replace('$', '')) + parseFloat(this.shippingPrice.replace('$', '')) + parseFloat(this.taxPrice.replace('$', ''))
      pedidos.getOrderTotal().should("contain.text", total.toString())
    })
  
  })
 })