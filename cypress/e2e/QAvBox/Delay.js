/// <reference types="Cypress" />

describe("Test Mouse Action", () =>{
   
    it("Validating drag and drop a draggable item", () => {
        cy.visit('https://qavbox.github.io/demo/');
        cy.contains('Delay').click()

        cy.get('[value="Click me!"]').click()
        cy.wait(5000)
        cy.get('#two').should('have.text', 'I am here!');

        cy.get('[value="Try me!"]').click()
        cy.wait(5000);
        cy.get('#delay').should('contain.text', 'after 5 sec')

    }); 
}) 