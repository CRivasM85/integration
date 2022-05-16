/// <reference types="Cypress" />
//HOOKS -> Mocha

/*
1. before() -> Una vez, al principio.
2. beforeEach() -> Antes de cada test
3. TEST EXECUTION
4. afterEach() -> Después de cada test.
5. beforeEach()
6. TEST EXECUTION
7. afterEach()
8. after() -> UNA VEZ, AL FINAL

*/

describe('PRUEBA DE HOOKS EN CYPRES',function(){
    before(function(){
        cy.log('Before')

    })

    beforeEach(function(){
        cy.log('Before Each')

    })
    
    it('PRUEBA NUMERO 1',function(){
        console.log('TEST # 1')
        
    })
    
    it('PRUEBA NUMERO 2',() =>{
        console.log('TEST # 2')
    })

    it('PRUEBA NUMERO 3',() =>{
        console.log('TEST # 3')
    })
    
    
    
    afterEach((function(){
        cy.log('After Each')

    }))
    after((function(){
        cy.log('After')

    }))

})