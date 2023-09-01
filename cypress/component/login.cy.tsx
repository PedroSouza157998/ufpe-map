import LoginPage from '../../src/app/login'

describe('test login', () => {
  it('Visits the website url and get form', () => {
    cy.mount(<LoginPage />)

    cy.get('form').should('exist')
  })

  it('should fill out and submit the valid login form', () => {
    cy.mount(<LoginPage />)

    cy.get('form').should('exist')
    cy.get('input[type=email]').type('testeemail@gmail.com')
    cy.get('input[type=password]').type('12345')
    cy.get('button[type=submit]').click()
  })

  it('login with invalid login', () => {
    cy.mount(<LoginPage />)

    cy.get('form').should('exist')
    cy.get('input[type=email]').type('testeemailgmail.com')
    cy.get('input[type=password]').type('12345')
    cy.get('button[type=submit]').click()
  })
})