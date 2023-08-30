describe('visit create new user page of UFPE Map', () => {
  it('passes', () => {
    cy.visit('/')
  })

  it('visit create new user and create new user', () => {
    cy.visit('/')

    cy.get('input[type=text]').type('Fulano Ciclano de Tal')
    cy.get('input[type=email]').type('testecin@gmail.com')
    cy.get('input#password').type('testecin12345')
    cy.get('input#confirmPassword').type('testecin12345')
    
    /*cy.get('input#password').invoke('val').then((value1) => {
      cy.get('input#confirmPassword').invoke('val').then((value2) => {
        expect(value1).to.equal(value2);
      });
    });*/
    
    cy.get('button[type=submit]').click()
  })

  it('Error create new user with invalid login', () => {
    cy.visit('/')

    cy.get('input[type=text]').type('Fulano Ciclano de Tal')
    cy.get('input[type=email]').type('testecin.com')
    cy.get('input#password').type('testecin12345')
    cy.get('input#confirmPassword').type('testecin12345') 
    
    cy.get('button[type=submit]').click()
  })

  it('error create new user confirm password not same', () => {
    cy.visit('/')

    cy.get('input[type=text]').type('Fulano Ciclano de Tal')
    cy.get('input[type=email]').type('testecin@gmail.com')
    cy.get('input#password').type('testecin12345')
    cy.get('input#confirmPassword').type('testecin')
    
    /*cy.get('input#password').invoke('val').then((value1) => {
      cy.get('input#confirmPassword').invoke('val').then((value2) => {
        expect(value1).to.equal(value2);
      });
    });*/
    
    cy.get('button[type=submit]').click()
  })
})