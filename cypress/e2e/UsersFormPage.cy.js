describe('Check user Form', () => {

    beforeEach(() => {
      cy.get("#htmlformtest").click();
    });

  it('From Page is displayed', () => {

      cy.get("h1").then(($title) => {
          expect($title).to.have.text("Basic HTML Form Example");
      })

      cy.get("#HTMLFormElements").should('be.visible');

  });

  it('Submit correct form successfully', () => {

        var username = "Jihene";
        var password = "Pass1";

        cy.get('input[name="username"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('input[value="cb1"]').check();
        cy.get('input[value="cb1"]').should('be.checked')
        cy.get('input[value="rd1"]').click();
        cy.get('select[name="dropdown"]').select("dd2");
        cy.get('input[Value="submit"]').click();

        cy.get("h2").then(($title) => {
            expect($title).to.have.text("Submitted Values");
        });

        cy.get("#_valueusername").then(($usernameresult) => {
            expect($usernameresult).to.have.text(username);
        });
  })

   it('Submit Empty form successfully', () => {

        cy.get('input[Value="submit"]').click();

        cy.get("h2").then(($title) => {
            expect($title).to.have.text("Submitted Values");
        });
   })

})