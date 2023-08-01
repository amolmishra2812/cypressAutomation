/// <reference types="Cypress" />

class LoginPage
{

visit()
{
    cy.visit("https://admin-demo.nopcommerce.com/login/")
}

fillEmail(value)
{
const field = cy.get('[id=Email]')
field.clear()
field.type(value)
return this
}

fillPassword(value)
{
const field = cy.get('[id=Password]')
field.clear()
field.type(value)
return this
}

clickLogin()
{
const btn = cy.get('[type=submit]')
btn.click()
}

}
export default LoginPage




