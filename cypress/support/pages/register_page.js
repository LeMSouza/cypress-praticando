 /// <reference types="cypress" />

// Elementos

const elements = {
    buttons: {
        register:'#btnRegister'  
    },

    fields: {
        name:'#user',
        email: '#email',
        password: '#password',
    },

    messages : {
        error: '.errorLabel',
        successTitle: '#swal2-title',
        sucessSubtitle: '#swal2-html-container'

    }
}

// Ações/Métodos/Funções
export default{
    saveRegister() {
        cy.get(elements.buttons.register)
            .click()
    },

    fillEmail(email) {
        cy.get(elements.fields.email)
            .should('be.visible')
            .type(email)
    },

    fillName(name) {
        cy.get(elements.fields.name)
            .should('be.visible')
            .type(name)
    },

    fillPassword(password) {
        cy.get(elements.fields.password)
            .should('be.visible')
            .type(password)
    },
    
    checkMessage(message) {
        cy.get(elements.messages.error)
            .should('have.text', message)
    },

    checkRegisterSuccess(name) {
        cy.get(elements.messages.successTitle, {timeout: 3000})
            .should('have.text', 'Cadastro realizado!')

        cy.get(elements.messages.sucessSubtitle, {timeout: 3000})
            .should('have.text', `Bem-vindo ${name}`)
    }

}