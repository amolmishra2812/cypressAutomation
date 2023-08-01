/// <reference types="Cypress" />

describe('Tables', function()
{
    it('Table test', function()
    {
        cy.visit('https://testautomationpractice.blogspot.com/?m=1')

        cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')

        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible')

        cy.get('table[name=BookTable]>tbody > tr td:nth-child(2)').each(($e1, index, $list) => {
            const text=$e1.text()
            if(text.includes("Amod"))
            {
                cy.get('table[name=BookTable]>tbody > tr td:nth-child(1)').eq(index).then(function(bname)
                {
                   const bookName=bname.text()
                   expect(bookName).to.equal("Master In Java")

                })
            }



        }
        )

    }
    )

}
)

