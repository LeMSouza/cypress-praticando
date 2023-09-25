
import { faker } from '@faker-js/faker';
import home_page from '../support/pages/home_page'
import register_page from '../support/pages/register_page';
//import { forEach } from 'cypress/types/lodash';

const user_data = require('../fixtures/desafio.json')

const screens = ['desktop', 'iphone-x', 'iphone-6']

screens.forEach(element => {
    
describe('Cadastro de usuário', () => {

    beforeEach('Acessando página de cadastro', () => {

        if(element != 'desktop') {
            cy.viewport(element)
        }

        home_page.accessRegisterPage()
        //ACESSANDO TELA DE CADASTRO DE USUÁRIO        
    })

    it('Validar campo nome vazio', () => {
      
        //clicou no registrar
        register_page.saveRegister()

        //verificou mensagem
        register_page.checkMessage('O campo nome deve ser prenchido')
    })

    it('Validar campo -email vazio', () => {

        //verifica se esta na pagina de cadastro
        register_page.fillName(user_data.name)

        //clicou no registrar
        register_page.saveRegister()

        //verificou mensagem
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')
    })

    it('Validar campo e-mail inválido', () => {
    
        //verifica se esta na pagina de cadastro
        register_page.fillName(user_data.name)
    
        register_page.fillEmail('emailinvalido')
                
        //clicou no registrar
        register_page.saveRegister()
    
        //verificou mensagem
        register_page.checkMessage('O campo e-mail deve ser prenchido corretamente')

    })

    it('Validar campo senha vazio', () => {

        //verifica se esta na pagina de cadastro
        //cy.get('#user')
            //.type(user_data.name)
        
        register_page.fillName(user_data.name)

        //cy.get('#email')
            //.should('be.visible')
            //.type(user_data.email)
        
        register_page.fillEmail(user_data.email)
            
        //clicou no registrar
        register_page.saveRegister()
        
        //verificou mensagem
        //cy.get('.errorLabel')
            //.should('have.text', 'O campo senha deve ter pelo menos 6 dígitos')
            
        register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
    })

    //it('Validar campo senha inválida', () => {
        
        //verifica se esta na pagina de cadastro
        //register_page.fillName(user_data.name)
        
        //register_page.fillEmail(user_data.email)

      //  register_page.fillPassword(123456)
                    
        //clicou no registrar
    //    register_page.saveRegister()
        
        //verificou mensagem
  //      register_page.checkMessage('O campo senha deve ter pelo menos 6 dígitos')
//})

it('Cadastro Realizado com Sucesso', () => {

    const name = faker.person.fullName()
    //const email = faker.internet.email()
        
    //verifica se esta na pagina de cadastro
    register_page.fillName(name)
    
    register_page.fillEmail(user_data.email)

    register_page.fillPassword(user_data.password)
                
    //clicou no registrar
    register_page.saveRegister()
    
    //verificou mensagem
    register_page.checkRegisterSuccess(name)
})

})

});