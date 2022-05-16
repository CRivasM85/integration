describe('TESTCASE 001: REGISTER NEW TIME SHEET', function() {

  it('TESTCASE001: REGISTER NEW TIME SHEET', function() {
 
   //Amplitud de la resolucion de pantalla
      cy.viewport(1500, 920)

  //Diseño de la cadena de texto para el formulario y luego para validar
        var numero
        numero=Cypress.config('UniqueNumber', `${Math.floor(Math.random() * 1000)}`)
        var numero2="Automation Testing"+numero
        cy.log(numero2)
 
    // cy.visit('https://localhost:4200')
     cy.visit('http://localhost:4311/#/login')

     //LOGIN 
     cy.get('.row > .col-md-5 > .form-container1 > .md-form > #aaa').type('hector@sfc-mia.com')
     cy.get('.row > .col-md-5 > .form-container1 > .md-form:nth-child(2) > .font-weight-light').click()
     cy.get('.row > .col-md-5 > .form-container1 > .md-form > #bbb').type('123456')
     cy.get('.row > .col-md-5 > .form-container1 > .mt-4 > .btn').click({ force: true })
  
      cy.wait(1000)
  
      //Seleccion del menu Home
     cy.get('div > .list-group > div:nth-child(1) > .btn-group > .list-group-item').click({ force: true })
  
     cy.get('div:nth-child(1) > .btn-group > .collapse > .dropdown-item:nth-child(3) > .text-center > .fas').click({ force: true })
  
     
     //Seleccion del Botón "+Add New Time Sheet"
     cy.get('.pl-2 > .d-none > .btn-green1 > .dx-button-content > .dx-button-text').click({ force: true })


     //Seleccion del PayType
     cy.get(':nth-child(1) > .dx-field-value > .ng-pristine > .dx-dropdowneditor-input-wrapper > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').click({ force: true })
     cy.get('.dx-scrollview-content > :nth-child(2) > .dx-item-content').click({ force: true })
    
     //LLenado de Horas
     cy.get(':nth-child(3) > .dx-field-value > .ng-untouched > .dx-texteditor-container > .dx-texteditor-input-container > .dx-texteditor-input').type('08:00')
        
     //Llenado del Campo Notes
     cy.xpath('//dx-text-area/div/div/textarea').type(numero2)
   
     //Click en Save
     cy.get('.relative > .dx-button-content').click({ force: true })


     //Verificacion del timesheet registrado en el grid ppal
     
     //Colocando el valor del campo Notes en el filtro Notes del grid
     cy.xpath('//td[10]/div/div[2]/div/div/div/input').click({ force: true })
     cy.xpath('//td[10]/div/div[2]/div/div/div/input').type(numero2)


     //Validacion - Comprobación
     //cy.get('dx-cell-focus-disabled > .dx-template-wrapper').should('have.text',numero2)
     //cy.get('[aria-describedby="dx-col-157"] > .ng-star-inserted').should('have.text',' '+numero2+' ')
     cy.xpath('//div/div/div/div/table/tbody/tr/td[10]/div').should('have.text',' '+numero2+' ')


  
  })
 
 })