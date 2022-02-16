describe('Favourite', () => {

    it('Input Text', () => {

        cy.visit("/")
            
        cy.get(".btn-danger")
            .click()
    
        cy.visit("/add")

        const typedText1 = 'Go to shopping'
        const typedText2 = 'today at 12:00'

        cy.get('.form-control')
            .eq(0)
            .type(typedText1)

        cy.get('.form-control')
            .eq(1)
            .type(typedText2)
        
        cy.get('.btn-success')
          .click()
        
        cy.get(".btn-success")
          .click()

        const typedText3 = 'Homework Softdev2'
        const typedText4 = 'today at 20:00'

        cy.get('.form-control')
            .eq(0)
            .type(typedText3)

        cy.get('.form-control')
            .eq(1)
            .type(typedText4)
        
        cy.get('.btn-success')
          .click()
        
        cy.get(".btn-success")
          .click()


        const typedText5 = 'Play Game'
        const typedText6 = 'today at 22:00'

        cy.get('.form-control')
            .eq(0)
            .type(typedText5)

        cy.get('.form-control')
            .eq(1)
            .type(typedText6)
        
        cy.get('.btn-success')
          .click()
        
        cy.get(".btn-success")
          .click()
react-crud/cypress/integration/Fav-test.spec.js
    })

    it('Check Favourite status', () => {

        cy.visit("/todo")

        cy.get('.list-group li')
          .contains("Go to shopping")
          .click()

        cy.get('.col-md-6')
          .should('contain',"Unfavourite")
        
        cy.get('.list-group li')
          .contains("Homework Softdev2")
          .click()

        cy.get('.col-md-6')
          .should('contain',"Unfavourite")

        cy.get('.list-group li')
          .contains("Play Game")
          .click()

        cy.get('.col-md-6')
          .should('contain',"Unfavourite")

    })

    it('Click Star', () => {

        cy.visit("/todo")

        cy.get('.star')
          .eq(0)
          .click()

        cy.get(".list-group li")
          .eq(0)
          
        
        cy.get('.list-group li')
          .contains("Go to shopping")
          .click()
        
        cy.get('.col-md-6')
          .should('contain',"Favourite")
          
        
    })

    it('Check Favourite Order', () => {

        cy.visit("/todo")

        cy.get('.star')
          .eq(2)
          .click()

        cy.get('.list-group li')
          .eq(0)
          .contains("Go to shopping")

        cy.get('.list-group li')
          .eq(1)
          .contains("Play Game")

        cy.get('.list-group li')
          .eq(2)
          .contains("Homework Softdev2")
          
        
        
          
        
    })

})