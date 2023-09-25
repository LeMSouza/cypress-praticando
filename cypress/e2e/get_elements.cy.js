describe('Get Elements', () => {
    it('Encontrar/Selecionar elementos', () =>{
        // get() - SELECIONAR ELEMENTOS
        cy.visit('/')
            .get('.header-logo')

        // contains() - PARA ENCONTRAR ELEMENTOS POR TEXTO, GERALMENTE DIMINUIMOS O ESCOPO COM UM GET
        cy.get('#top_header').as('cabecalho')
            .contains('Login')

        // find() SERVE PARA ENCONTRAR ELEMENTOS, GERALMENTE DIMINUIMOS O ESCOPO COM UM GET
        cy.get('#top_header')
            .find('.fa-use')

        // as () - alias - SERVE PARA CRIAR APELIDOS OU ATALHOS PARA GRANDES COMANDOS
        cy.get('#top_header')
            .find('.fa-use')
    })
    
})