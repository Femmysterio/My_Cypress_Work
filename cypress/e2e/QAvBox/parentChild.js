/// <reference types="cypress" />

describe('Parent - Child', ()=> {

    beforeEach(() => {
        cy.visit("https://qavbox.github.io/demo/");
        cy.get('[href*="/listitems"]').click();
    })

    it('Validate Parent-child', ()=> {
        
        //parent-child
        cy.get('div > p').should('have.length', 6)
        cy.get('div > p > strong').should('include.text', 'preceding-sibling')
        cy.get('div > p').should('contain.text', 'CSS')

        cy.get('div > ul').should('have.length', 1)
        cy.get('div > ul').should('have.id', 'mygroup')
        cy.get('div > ul').should('have.prop', 'id')
        cy.get('div > ul').should('not.have.class')

        cy.get('div > ul >li > ul > li').should('have.text', ' Sub list 1 ')
        cy.get('div > ul >li > ul > li').should('contain.text', 'Sub list 1')

        cy.get('div > ul >li > ul').should('have.length', 1)
        cy.get('div > ul >li > ul').should('have.id', 'subgroup')
        cy.get('div > ul >li > ul').should('not.have.class')
     
    });

    it('Validate siblings', ()=> {

        //siblings
        cy.get('ul ~ p').should('have.length', 4)
        cy.get('#mygroup ~ p').should('have.length', 4)
        cy.get('#mygroup ~ p').eq(2).should('have.text', ' Paragraph 3 ')

        cy.get('#mygroup ~ p').first()
        .should('have.text', ' Paragraph 1 ')
        .next().should('have.text', ' Paragraph 2 ')
        
    }) 
})
