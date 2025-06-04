Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
firstName: 'John',
lastName: 'Doe',
email: 'exemplo@gmail.com',
text: 'Teste.'
}) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.get('button[type="submit"]').click()

})