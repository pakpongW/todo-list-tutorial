describe('Input form', () => {

    beforeEach(() => {
        cy.visit("/add")
    })

    it('Add title and description', () => {
        const typedText1 = 'Go to shopping'
        const typedText2 = 'today at 12:00'

        cy.get('.form-control')
            .eq(0)
            .type(typedText1)
            .should('have.value', typedText1)

        cy.get('.form-control')
            .eq(1)
            .type(typedText2)
            .should('have.value', typedText2)

        cy.get('.btn-success')
            .click()

        cy.get('h4')
            .should('be.visible')

        cy.get('.btn-success')
            .click()    

        cy.get('.form-control')
            .eq(0) 
            .should('have.value', "")

        cy.get('.form-control')
            .eq(1) 
            .should('have.value', "")
    })

    it('check todolist',() => {
        const typeText1 = 'Go to school'
        const typeText2 = 'today 8:00'

        cy.get('.form-control')
            .eq(0)
            .type(typeText1)
            .should('have.value', typeText1)

        cy.get('.form-control')
            .eq(1)
            .type(typeText2)
            .should('have.value', typeText2)

        cy.get('.btn-success')
            .click()

        cy.get('.btn-success')
            .click()

        cy.get('.nav-item')
            .eq(0)
            .click()
        
        cy.get('.list-group')

        cy.get('.list-group-item')
            .eq(0)
            .should('be.visible')

        cy.get('.list-group-item')
            .eq(1)
            .should('be.visible')    
    })

    it('Duplicate todo test', () => {
        const typedText1 = 'Go to shopping'
        const typedText2 = 'today at 12:00'

        cy.get('.form-control')
            .eq(0)
            .type(typedText1)
            .should('have.value', typedText1)

        cy.get('.form-control')
            .eq(1)
            .type(typedText2)
            .should('have.value', typedText2)

        cy.get('.btn-success')
            .click()

        cy.get('.btn-success')
            .click()    

            cy.get('.nav-item')
            .eq(0)
            .click()
        
        cy.get('.list-group')

        cy.get('.list-group-item')
            .eq(0)
            .should('be.visible')

        cy.get('.list-group-item')
            .eq(2)
            .should('be.visible')
    })

    it('Add only title', () => {
        const typedText1 = 'Not emply'

        cy.get('.form-control')
            .eq(0)
            .type(typedText1)
            .should('have.value', typedText1)

        cy.get('.btn-success')
            .click()

        cy.get('h4')
            .should('be.visible')
    })

    it('Add only description', () => {
        const typedText1 = 'Not emply'

        cy.get('.form-control')
            .eq(1)
            .type(typedText1)
            .should('have.value', typedText1)

        cy.get('.btn-success')
            .click()
        
        
    })

})