# Cypress Web Automation Framework

Simple framework project to demonstrate end-to-end tests written with Cypress using the Page Object Model. The application under test is https://magento.nublue.co.uk/ and https://magento2-demo.magebit.com/

## Pre-requirements

To run this project, you will need:

- [git](https://git-scm.com/downloads) (version `2.42.0`)
- [nodejs](https://nodejs.org/en/) (version `v18.18.0`)
- NPM (`9.8.1`)
- [Google Chrome](https://www.google.com/intl/en_us/chrome/) (I've used version `92.0.4515.131` while writing this doc)

**Note:** When installing nodejs, NPM is automatically installed too.

## Installation

To install the dev dependencies, run `npm install` (or `npm i` for short.) in the project root folder.

```
cd cypress-web-automation/
npm install
```

## Running the tests

In this project, you can run tests in interactive and headless modes.

### Headless mode

#### Running all tests

Use `npm test` (or `npm t` for short) to run all tests in headless mode.

#### Running a specific test file

Use `npm run cy:run -- --spec "cypress/e2e/pedidos.cy.js"` to run the only the test related to `pedidos.cy.js` file

### Interactive mode

Use `npm run cypress:open` to open the Cypress Test Runner to run tests in interactive mode, from there, you can choose the tests you want to run.
