/// <reference types="Cypress" />


import LoginPage from '../PageObjects/LoginPage'

describe('POM', function() {

    it('Valid Login Test', function() {

        const login=new LoginPage()
        login.visit()
        login.fillEmail('admin@yourstore.com')
        login.fillPassword('admin')
        login.clickLogin()
        cy.title().should('be.equal','Dashboard / nopCommerce administration')


    })
})