/// <reference types="Cypress" />

describe("Test Mouse Action", () =>{
   
    it("Validating drag and drop a draggable item", () => {
        cy.visit('https://qavbox.github.io/demo/');
        cy.get('[href="/demo/dragndrop"]').scrollIntoView().invoke('removeAttr', 'target').click({force : true})

        cy.get('#draggable').trigger('mousedown', {which: 1})

        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force:true})
        cy.get('#dropText').should('have.text', 'Dropped!')
    });

    it("Validating dragging slide bar", () => {
        cy.visit('https://qavbox.github.io/demo/');
        cy.get('[href="/demo/dragndrop"]').scrollIntoView().invoke('removeAttr', 'target').click({force : true})

        cy.get('[type="range"]').invoke('val', '60').trigger('change')
        cy.get('#range').should('have.text', 60)       
    })   
}) 