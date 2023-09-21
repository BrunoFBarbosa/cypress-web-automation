import Login from "../pages/Login";
import {faker} from '@faker-js/faker';

const login = new Login()
  
 describe("Login", () => {
   
    beforeEach(() => {
        login.visit()
    })
    
    it("deve realizar o login corretamente para usuários já cadastrados", () => {
    
     login.inputEmail(Cypress.env('validEmail'))
     login.inputPassword(Cypress.env('validPassword'))
     const BannerUsuario = login.clickSignIn()
     BannerUsuario.getLoggedUser().should("contain.text", "Welcome")

    })
 })

 describe("Esqueci minha senha", () => {
   
  beforeEach(() => {
      login.visit()
  })
  
  it("não deve permitir escolher uma nova senha quando o captcha estiver inválido", () => {
  
   const RecuperarSenha = login.clickForgotPassword()
   RecuperarSenha.inputEmail(Cypress.env('validEmail'))
   RecuperarSenha.inputCaptcha(faker.lorem.word())
   RecuperarSenha.clickResetPassword()
   RecuperarSenha.getErrorMessage().should("contain.text", "Incorrect CAPTCHA")

  })
})