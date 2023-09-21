import Cadastro from "../pages/Cadastro";
import {faker} from '@faker-js/faker';

const cadastro = new Cadastro()
  
 describe("Cadastro de novos usuários", () => {
   it("deve realizar o cadastro de um novo usuário", () => {
    const password = faker.internet.password() 
    
    cadastro.visit()
    
    cadastro.inputFirstName(faker.person.firstName())
    cadastro.inputLastName(faker.person.lastName())
    cadastro.inputEmail(faker.internet.email())
    cadastro.inputPassword(password)
    cadastro.inputConfirmPassword(password)
    
    const ContaUsuario = cadastro.clickCreateAccountButton()
    ContaUsuario.getAccountCreationConfirmation().should("contain.text", "Thank you for registering with Main Website Store.")

   })
 })