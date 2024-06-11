/// <reference types="cypress" />

describe('Validate various links', ()=> {

    

    it('Verify NEW TAB link', ()=> {
        cy.visit("https://qavbox.github.io/demo/");
        cy.contains('Links').click()
        
        cy.get('.newtb > a').invoke('removeAttr', 'target').click({force:true})

        cy.url().should('include', 'https://qavalidation.com/demo-form/')

        cy.wait(3000)
        cy.go("back")
    }) 
})
