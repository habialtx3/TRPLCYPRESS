describe('Sauce Demo Test', () => {
  it('berhasil', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('[data-test = "password"]').type('secret_sauce')
    cy.get('.submit-button btn_action').click()
  })
})