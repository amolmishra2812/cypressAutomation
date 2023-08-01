/// <reference types="Cypress" />

describe('customSuite', function(){
    it('LoginTest', function(){
        {
            cy.login('admin@yourstore.com','admin') //valid
            cy.title().should('be.equal','Dashboard / nopCommerce administration')
        }
    })

    it('Add customer', function(){
        
        cy.login('admin@yourstore.com','admin12') //invalid
        cy.title().should('not.be.equal','Dashboard / nopCommerce administration')
        cy.log('Adding customer')

    })    

    
    it('editing customer', function(){
        
        cy.login('admin@yourstore.com123','admin') //invalid
        cy.title().should('not.be.equal','Dashboard / nopCommerce administration')

        cy.log('Editing customer')
            
    })    
        
    



})