// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import Login from "../pages/Login";
import Home from "../pages/Home";

const login = new Login()
const home = new Home()

Cypress.Commands.add("login", () => {
    
     home.visit()
     home.clickSignIn()
     
     login.inputEmail(Cypress.env('validEmail'))
     login.inputPassword(Cypress.env('validPassword'))
     const BannerUsuario = login.clickSignIn()
     BannerUsuario.getLoggedUser().should("contain.text", "Welcome")

 });