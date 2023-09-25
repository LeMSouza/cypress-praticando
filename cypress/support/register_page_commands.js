/// <reference types="cypress" />

// Elementos

const elements = {
    buttons: {
        register:'#btnRegister'  
    },

    fields:{
        name:'#user',
        email: '#email',
        password: 'password'
    },

    messages:{
        error: '.errorLabel',
        successTitle: '#swal2-title',
        sucessSubtitle: '#swal2-html-container'

    }
}

// Ações/Métodos/Funções
Cypress.Commands.add('saveRegister', () => {

    //clicou no registrar
cy.get('#btnRegister')
.click()

})

Cypress.Commands.add('fillEmail', (email) => {

cy.get('#email')
.should('be.visible')
.type(email)

})

Cypress.Commands.add('fillName', (name) => {

    cy.get('#user')
    .type(name)
    
    })

Cypress.Commands.add('fillPassword', (password) => {

    cy.get('#password')
    .should('be.visible')
    .type(password)
        
    })

Cypress.Commands.add('checkMessage', (message) => {

    cy.get('.errorLabel')
    .should('have.text', message)
            
    })

Cypress.Commands.add('checkRegisterSuccess', (name) => {
    cy.get('#swal2-title')
        .should('have.text', 'Cadastro realizado!')

    cy.get('#swal2-html-container', {timeout: 3000})
        .should('have.text', `Bem-vindo ${name}`)
})

