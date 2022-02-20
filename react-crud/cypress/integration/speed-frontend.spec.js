describe('Input form', () => {
    
    it('Count time favourite botton', () => {
        cy.get('.star')
            .eq(999)
            .click()

        cy.get('.list-group li')
            .eq(0)
            .should('contain',"test 1000")
            .clock()

    })
})