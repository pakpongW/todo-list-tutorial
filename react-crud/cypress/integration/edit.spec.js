describe('Input form', () => {

    // beforeEach(() => {
    //     cy.visit("/todo")
    // })

    it('Add Sell doge for test', () => {
        const typedText0 = 'Sell doge'

        cy.visit("/todo")

        cy.get('.btn-danger')
            .click()

        cy.get('.nav-link')
            .eq(1)
            .click()

        cy.get('.form-control')
            .eq(0)
            .type(typedText0)

        cy.get('.btn-success')
            .click()

        cy.get('.nav-link')
            .eq(0)
            .click()

        cy.wait(2000)

        cy.get('.list-group li')
            .contains(typedText0)
            .click()
        
        cy.get('.badge-warning')
            .click()

    })

    it('Test edit title & description', () => {
        const typedText = 'Sell shiba'
        const typedText2 = 'Short now'
        
        cy.get('.form-control')
            .eq(0)
            .clear()
            .type(typedText)

        cy.get('.form-control')
            .eq(1)
            .clear()
            .type(typedText2)

        cy.get('.badge-success')
            .click()

        cy.get('.edit-form')
            .should('contain','The todo was updated successfully!')

    })

    it('Check title & description', () => {
        const typedText = 'Sell shiba'
        const typedText2 = 'Short now'

        cy.visit("/todo")

        cy.get('.list-group li')
            .should('contain',typedText)
            .click()
        
        cy.get('.col-md-6')
            .should('contain',typedText)
            .should('contain',typedText2)

    })

    it.only('Test edit title & description without title', () => {
        const typedText = 'Sell shiba'

        cy.visit("/todo")

        cy.get('.list-group li')
            .contains(typedText)
            .click()
        
        cy.get('.badge-warning')
            .click()
        
        cy.get('.form-control')
            .eq(0)
            .clear()

        cy.get('.badge-success')
            .click()

    })

    it.only('Test edit status', () => {

        cy.get('.badge-primary')
            .click()
        
        cy.get('.form-group')
            .eq(2)
            .should('contain','Done')

        cy.get('.badge-primary')
            .click()

        cy.get('.form-group')
            .eq(2)
            .should('contain','Not finish')

    })

    it.only('Test delete', () => {
        const typedText = 'Sell shiba'
        
        cy.get('.badge-danger')
            .click()
        
        cy.url().should('eq', 'http://localhost:3000/todo')

        cy.get('.list-group')
            .should('not.contain',typedText)
           
    })

})