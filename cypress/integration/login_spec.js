describe('Login testing', () => {
  it('should show a success message with the right password', () => {
    cy.visit('http://localhost:3000');

    cy.get('input[type="email"]')
      .type('thomas@thomastuts.com');

    cy.get('input[type="password"]')
      .type('foo');

    cy.get('form').submit();

    cy.get('#message').contains('Success');
  });
});