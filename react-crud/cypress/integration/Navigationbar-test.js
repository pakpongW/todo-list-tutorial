describe('Input form', () => {

    beforeEach(() => {
        cy.visit("/")
    })

    it('Go to Add', () => {
        cy.get('.nav-link')
          .eq(1)
          .click()

        cy.location('href')
          .should('include', '/add')
    })

    it('Go to Todo', () => {
        cy.visit("/add")

        cy.get('.nav-link')
          .eq(0)
          .click()

        cy.location('href')
          .should('include', '/todo')
    })

    it('Go to Todo by GROUP3', () => {
        cy.visit("/add")

        cy.get('.navbar-brand')
          .click()

        cy.location('href')
          .should('include', '/todo')
    })

    
})