/// <reference types="Cypress" />
describe('TESTCASE 003: NEW SALES LEAD', () => {

  beforeEach(function(){
 // cy.visit('https://cube-usa-cs.com/#/login');
  cy.visit('http://localhost:4311/#/login')
  /*cy.fixture('cube-fixtures/usersCube')
  .then(credenciales =>{
    this.credenciales = credenciales;
  })*/
});
    it('TESTCASE 003: NEW SALES LEAD', () => {
        //LOGIN
        
    //cy.log(this.credenciales.usuarioLogin)  
    // cy.get('#aaa').type(this.credenciales.usuarioLogin)
     cy.get('#aaa').type('cubecontrols@cube-usa.com')
     cy.get('#bbb').type('support123')


        cy.get(':nth-child(5) > .btn').click()
        
        //SELECCION DE LA OPCION DEL MENU PRINCIPAL
        cy.get(':nth-child(2) > .btn-group > .d-inline-block > .fas').click()

        let a = 5
       
    
        
        cy.get(':nth-child(2) > .btn-group > .collapse > :nth-child(1) > .name-side').click();

        
        cy.get('.d-none > .btn-green1 > .dx-button-content').click() //CLICK EN EL BOTON NEW SALES LEAD
        
        cy.get('.ng-untouched > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type('LEAD TYPED FROM AUTOMATION TESTSCRIPT');
        
        
        cy.get('#today-Btn > .dx-button-content > .dx-button-text').click()
        cy.get('.dx-closebutton > .dx-button-success > .dx-button-content > .dx-button-text').click()
  
       
     

      

    })
}
)