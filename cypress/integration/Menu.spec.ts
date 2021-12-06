/// <reference types="cypress" />
// import cy from 'cypress'

describe('Menu Test', () => {
  it('コンソールに必要な要素がある', () => {
    cy.visit('https://localhost:4300/')
    cy.findByRole('button', { name: 'handleMenuOpen' }).should('be.visible')
  })

  it('Menuの開閉', () => {
    cy.visit('https://localhost:4300/')
    cy.findByRole('button', { name: 'handleMenuOpen' }).click()
    cy.findByLabelText('handleMenuClose').click()
  })

  it('リンクチェック', () => {
    cy.visit('https://localhost:4300/')
    cy.get('h1').contains('UCLab')
    cy.findByRole('button', { name: 'handleMenuOpen' }).click()

    cy.get('a[href*="covid"]').click()
    cy.url().should('include', '/covid')
    cy.get('h1').contains('- 大阪のコロナ感染データ -')
  })
})
