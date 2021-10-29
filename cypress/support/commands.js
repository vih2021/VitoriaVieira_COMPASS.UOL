///<reference types="cypress" />

Cypress.Commands.add('logar', () => {
    const user = `[data-test="username"]`
    const password = `[data-test="password"]`
    const botao = `[type="submit"]`
    cy.visit('/')
    cy.get(user).type('standard_user')
    cy.get(password).type('secret_sauce')
    cy.get(botao).click()
    cy.url().should('contain', '/inventory.html')  
})
