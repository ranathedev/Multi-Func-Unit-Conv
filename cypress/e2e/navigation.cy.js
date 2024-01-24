/// <reference types="Cypress" />

describe('Navigation test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('navigates properly', () => {
    cy.get('[data-cy=navbar] li:eq(1)').click()
    cy.should('have.css', 'background-color', 'rgba(44, 62, 80, 0.8)')
    cy.get('[data-cy=navbar] li:eq(2)').click()
    cy.should('have.css', 'background-color', 'rgba(44, 62, 80, 0.8)')
    cy.get('[data-cy=navbar] li:eq(3)').click()
    cy.should('have.css', 'background-color', 'rgba(44, 62, 80, 0.8)')
    cy.get('[data-cy=navbar] li:eq(0)').click()
    cy.should('have.css', 'background-color', 'rgba(44, 62, 80, 0.8)')
  })
})
