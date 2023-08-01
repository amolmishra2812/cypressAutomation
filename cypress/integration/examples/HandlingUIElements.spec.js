/// <reference types="Cypress" />

describe ('UI Elements', function ()
{
    it('Verify InputBox and radio buttons', function()
    {

        cy.visit("https://demo.guru99.com/selenium/newtours/")
        cy.url().should('include','newtours')

        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("mercury")
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("mercury")

        cy.get('input[name=submit]').should('be.visible').click()

        cy.wait(3000)
        cy.get('body > div > table > tbody > tr > td:nth-child(1) > table > tbody > tr > td > table > tbody > tr > td > table > tbody > tr:nth-child(2) > td:nth-child(2) > a').click()

        cy.title().should('eq','Find a Flight: Mercury Tours:')

        cy.get('input[value=roundtrip]').should('be.visible').should('be.checked')
        cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click()

        cy.get('[name=findFlights]').should('be.visible').click()

        cy.wait(3000)

        cy.title().should('eq','Find a Flight: Mercury Tours:')

    }
    
    
    
    
)
}
)