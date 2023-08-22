describe('visit website UFPE Map', () => {
  it('passes', () => {
    cy.visit('/')
  })

  it('visit website and submit the valid login', () => {
    cy.visit('/')

    cy.get('input[type=email]').type('testecin@gmail.com')
    cy.get('input[type=password]').type('testecin12345')
    cy.get('button[type=submit]').click()
  })

  it('login with invalid login', () => {
    cy.visit('/')

    cy.get('input[type=email]').type('testeemailgmail.com')
    cy.get('input[type=password]').type('12345')
    cy.get('button[type=submit]').click()

    cy.contains('Invalid email format').should('be.visible')    
  })

})