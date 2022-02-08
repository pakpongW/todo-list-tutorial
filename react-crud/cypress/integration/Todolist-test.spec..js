describe('Input form', () => {

    beforeEach(() => {
        cy.visit("/")
    })

    it('Search test', () => {
        const typeText1 = 'Go to shopping'

        cy.get('.form-control')
            .type(typeText1)
            .should('have.value', typeText1)

        cy.get('.btn-outline-secondary')
            .click()
    })
    
    it('Search Not found', () => {
        const typeText2 = 'Buy SLP'

        cy.get('.form-control')
            .type(typeText2)
            .should('have.value', typeText2)

        cy.get('.btn-outline-secondary')
            .click()
    })

    it('Information test', () => {
        const typeText3 = 'Go to shopping'

        cy.get('.list-group li')
            .contains(typeText3)
            .click()
    })

    it('Removeall test', () => {
        
        cy.get('.btn-danger')
            .click()
    })

})