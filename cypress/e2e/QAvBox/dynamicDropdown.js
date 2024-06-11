/// <reference types="cypress" />

describe('Autocomplete Suggestions', ()=> {

    it('Verify dynamic dropdown', ()=> {
        cy.visit("https://qavbox.github.io/demo/");
        cy.contains('Auto Suggestions').click()
        
        cy.get('#myInput').type('Ni')

        cy.get('#myInputautocomplete-list > div').each(($el, index, $list) => {     
 
            cy.log($el.text())
            
            if($el.text() == 'Nigeria'){
                cy.wrap($el).click()
            }
            
        })
    }) 
})
