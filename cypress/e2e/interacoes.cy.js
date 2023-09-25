describe('Interações', () => {
    it('Digitar em um campo', () =>{
        cy.visit('/')
            .get('.header-logo')

        cy.get('.form-control')
            .type('leticia.az@hotmail.com')
    })

    it('Click', () =>{
        cy.visit('/')
            .get('.header-logo')

        //clicl normal
        //cy.get('.fa-user')
           // .click()
   
        // click duplo
        //cy.get('.fa-user')
        //    .dblclick()

        // click botão direito
        //cy.get('.fa-user')
        //    .rightclick()

        // click por cordenadas
        //cy.get('.fa-user')
        //    .click(100, 100, {force: true})

        // simular apertar enter
        cy.get('.form-control')
        .type('leticia.az@hotmail.com{enter}')
     })

     it('Select', () =>{
        cy.visit('/')
            .get('.header-logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View Two')
            .click()

        cy.get('#country')
            .select('Colombia')
    })

    it('Checkout e radio button', () =>{
        cy.visit('/')
            .get('.header-logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View One')
            .click()

        cy.get('#materialUnchecked')
            .check()
            .uncheck()
        
        cy.get('#css')
            .check()
    })
    
})