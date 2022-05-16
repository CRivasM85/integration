/// <reference types="Cypress" />
describe('TESTCASE 007: NEW INVENTORY', () => {
    it('TESTCASE 007: NEW INVENTORY', () => {
        //LOGIN
      
      //cy.visit('https://cube-usa-cs.com')
      cy.visit('http://localhost:4311')
        cy.get('#aaa').type('hector@sfc-mia.com')
        cy.get('#bbb').type('123456')
        cy.get(':nth-child(5) > .btn').click()
        
        //SELECCION DE LA OPCION DE INVENTARIO
        cy.get(':nth-child(8) > .btn-group > .d-inline-block > .fas').click({ force: true })

       //let a = 5
       
      
        
        cy.get(':nth-child(8) > .btn-group > .collapse > :nth-child(8) > .name-side').click({ force: true });
       

        cy.get(':nth-child(2) > .dx-item-content > .dx-button > .dx-button-content > .dx-button-text').click({ force: true })
        /*cy.get(':nth-child(1) > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').click({ force: true });*/
        
        cy.get(':nth-child(1) > .dx-field-value').click({ force: true })
        //cy.get(' <dxi-toolbar-item  widget="dxButton" location="after" toolbar="top" [options]="saveButtonPartToProject">  </dxi-toolbar-item>' ).dblclick()
        cy.get(':nth-child(1) > .dx-field-value').type(' ')
        //cy.get(':nth-child(1) > .dx-field-value > .dx-show-invalid-badge > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type('support123')
       // cy.get(':nth-child(2) > .dx-field-value').click({ force: true })
       cy.get('.dx-scrollview-content > :nth-child(5) > .dx-item-content').click({ force: true })
      
        // $el is a wrapped jQuery element
        

       //ESPECIFICACION DE LOCATION
       //cy.get('.dx-field-value > .ng-untouched > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').click({ force: true }) 
       //cy.get('.dx-state-focused > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').click({ force: true })
 
     //  cy.get('.dx-scrollable-container > .dx-scrollable-content > .dx-scrollview-content > .dx-state-active > .dx-item-content').click({ force: true })
       //cy.get(':nth-child(4) > .dx-field-value').click({ force: true })
       cy.get(':nth-child(4) > .dx-field-value').click({ force: true })
       
       /*ESTO SI SERVIA
       cy.get('.dx-field-value > .ng-pristine > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-buttons-container > .dx-button-normal > .dx-button-content > .dx-dropdowneditor-icon').click({ force: true });
       cy.contains('LOCATION TO AUTOMATION').click({ force: true });
       
*/
let a
//a=cy.get('.dx-field-value > .ng-pristine > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-buttons-container > .dx-button-normal > .dx-button-content > .dx-dropdowneditor-icon').its("length")
a=cy.get('.dx-scrollview-content > :nth-child(2) > .dx-item-content').click({ force: true })
cy.log(a)
cy.contains('LOCATION TO AUTOMATION').click({ force: true });
       //cy.get('a [href*="LOCATION TO AUTOMATION"]').click({ force: true })
       //cy.get(':nth-child(4) > .dx-field-value').type('LOCATION TO AUTOMATION').click({ force: true });
       //cy.get('.dx-scrollable-container > .dx-scrollable-content > .dx-scrollview-content >:nth-child(2) > .dx-field-value> :nth-child(2) > .dx-item-content').click({ force: true })
       //cy.get('.dx-field-value > .ng-pristine > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-buttons-container > .dx-button-normal > .dx-button-content > .dx-dropdowneditor-icon').click()
      // cy.get('.dx-field-value > .ng-pristine > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-buttons-container > .dx-button-normal > .dx-button-content > .dx-dropdowneditor-icon').click()
      // cy.get('.dx-popup-draggable > .dx-toolbar > .dx-toolbar-items-container > :nth-child(4) > .dx-field-value').click({ force: true })
      // cy.get('#dx-9a2c5c79-6959-da57-a043-47472b4855af > .dx-scrollable-wrapper > .dx-scrollable-container > .dx-scrollable-content > .dx-scrollview-content > :nth-child(2) > .dx-item-content').click({ force: true })
    
       //cy.get('.dx-scrollview-content > :nth-child(2) > .dx-item-content').click({ force: true })
      // alert(a)

      //ESPECIFICACION DE LA CANTIDAD
      cy.get(':nth-child(5) > .dx-field-value > .ng-pristine > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type('18')

      //BOTON SAVE
      cy.get('#bton-green > .dx-button-content').click({ force: true })
      

    })
}
)