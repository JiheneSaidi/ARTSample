describe('Check JS Alerts ', () => {

    beforeEach(() => {
        cy.get("#alerttest").click();

    });

    it('Alert box is displayed', () => {

        cy.get('#alertexamples').click();
        cy.on('Window:alert',($alert) => {
            expect($alert).to.contain('I am an alert box!')
        })
    });

    it('Confirmation dialog is displayed', () => {

        cy.get('#confirmexample').click();
        cy.on('Window:confirm', ($alert) => {
            expect($alert).to.contain('I am a confirm alert');
        });
        cy.get('#confirmexplanation').should('contain', 'You clicked OK');
    })
})