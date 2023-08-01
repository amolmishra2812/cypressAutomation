/// <reference types="Cypress" />

describe('Hook', function()
{
  before(function() {
    cy.log('************ This is SETUP block ***************')

  })  
  
  after(function() {
    cy.log('************* This is TEAR DOWN block **********')

  })

  beforeEach(function(){
    cy.log('********** This is LOGIN block *************')
  })

  afterEach(function(){
    cy.log('********** This is LOGOUT block *************')
  })



    it('Searching', function()
    {
        cy.log('*************** This is searching test **************')
    }
    )
    it('Advanced searching', function()
    {
        cy.log('*************** This is advanced searching test **************')
    }
    )
    it('Listing products', function()
    {
        cy.log('*************** This is product listing test **************')
    }
    )
}
)