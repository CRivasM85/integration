/// <reference types="Cypress" />

let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let divide = (a,b) => a/b;
let multiply =(a,b) => a*b;

//Describe o context
//

describe('Pruebas unitarias ', () => {
    
    context('Matematica con numeros positivos', () => {
  /*  cy.visit('https://cube-usa-cs.com')
    cy.get('#aaa').type('cubecontrols@cube-usa.com')
    cy.get('#bbb').type('support123')
    cy.get(':nth-child(5) > .btn').click()
    cy.get(':nth-child(7) > .btn-group > .collapse > :nth-child(7) > .text-center').click()*/
    it('Deberia sumar numeros positivos',() =>{
        expect(add(5,4)).to.equal(9);
    
    });
    it('Deberia restar numeros positivos',() =>{
        expect(subtract(2,1)).to.equal(1)
    
    });
    it('Deberia multiplicar numeros positivos',() =>{
        expect(multiply(5,4)).to.equal(20)
    
    });
    it('Deberia dividir numeros positivos',() =>{
        expect(divide(10,2)).to.equal(5)
    
    });
    
});

    describe('Matematica con numeros decimales', () => {
    /*  cy.visit('https://cube-usa-cs.com')
      cy.get('#aaa').type('cubecontrols@cube-usa.com')
      cy.get('#bbb').type('support123')
      cy.get(':nth-child(5) > .btn').click()
      cy.get(':nth-child(7) > .btn-group > .collapse > :nth-child(7) > .text-center').click()*/
      it('Deberia sumar numeros decimales',() =>
        {
            expect(add(5.1,4)).to.equal(9.1);
    
        });
    it('Deberia restar numeros decimales',() =>{

    
    });
      
  });

}
)