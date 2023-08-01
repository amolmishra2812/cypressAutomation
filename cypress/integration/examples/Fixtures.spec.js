/// <reference types="Cypress" />

describe('Fixture', function(){

   before(function() {
    cy.fixture('example').then(function(data){
        
        this.data=data

    })
   })


    it('Fixtures', function(){
        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('input[name=Email]').clear().type(this.data.email) //email
        cy.get('input[name=Password]').clear().type(this.data.password) //password
        cy.get('button[type=submit]').click() //submit


    })
})