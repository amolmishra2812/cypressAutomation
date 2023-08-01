/// <reference types="Cypress" />

describe('CheckBoxes', function () {


    it('Hobbies check boxes', function() {

        cy.visit("https://demo.automationtesting.in/")

        cy.wait(3000)
        cy.get('#enterimg').click()
        cy.wait(3000)
        
        cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
        cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
        cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

        cy.get('#checkbox1').uncheck().should('not.be.checked')
        cy.get('#checkbox2').uncheck().should('not.be.checked')
        cy.get('#checkbox3').uncheck().should('not.be.checked')

        cy.get('input[type=checkbox]').check(['Cricket','Hockey'])
    }
    )


    it('Skills drop down', function() {

        cy.get('#Skills').select('Android').should('have.value','Android')
    }
    )


    it('Languages drop down', function() {

        cy.get('#msdd').click()
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Japanese').click()
    }
    )

    it('Countries drop down', function() {

       cy.get('[role=combobox]').click({force: true})
       cy.get('.select2-search__field').type('Ind')
       cy.get('.select2-search__field').type('{enter}')
    }
    )
}
)