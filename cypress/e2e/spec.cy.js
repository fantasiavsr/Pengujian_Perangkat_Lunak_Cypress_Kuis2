

describe('login admin', () => {
  it('passes', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('admin');
    cy.get('#password').type('matahariku');
    cy.get('form > .btn').click()
  })
})

describe('edit list transaksi', () => {
  it('passes', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('admin');
    cy.get('#password').type('matahariku');
    cy.get('form > .btn').click();
    cy.get(':nth-child(6) > .nav-link').click();
    cy.get(':nth-child(1) > :nth-child(9) > .btn').click(); 
    cy.get(':nth-child(7) > :nth-child(2) > .form-control').select("Pending");
    cy.get(':nth-child(8) > :nth-child(2) > .btn').click();
  })
})

describe('edit item category', () => {
  it('passes', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('admin');
    cy.get('#password').type('matahariku');
    cy.get('form > .btn').click();
    cy.get(':nth-child(9) > .nav-link').click();
    cy.get(':nth-child(1) > :nth-child(7) > .btn').click()
    cy.get(':nth-child(4) > :nth-child(3) > .form-control').select("Red")
    cy.get(':nth-child(17) > :nth-child(2) > .btn').click()
  })
})

describe('edit item name', () => {
  it('passes', () => {
    cy.visit('http://greenvestvsr.herokuapp.com/login')
    cy.get('#username').type('admin');
    cy.get('#password').type('matahariku');
    cy.get('form > .btn').click();
    cy.get(':nth-child(9) > .nav-link').click();
    cy.get(':nth-child(1) > :nth-child(7) > .btn').click()
    cy.get(':nth-child(3) > :nth-child(1) > .form-control').clear().type('test')
    cy.get(':nth-child(17) > :nth-child(2) > .btn').click()
  })
})


