/// <reference types="cypress" />

describe('Validate Multiple Window', ()=> {
  
    let newUrl = []  

    it('Verify Multiple Window', ()=> {
        cy.visit("https://qavbox.github.io/demo/");
        
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake(url => {
                newUrl = url;
                return win.open(url)
            })
        })
        .as('windowOpen')

        cy.get('[href*="inks"]').click()
        cy.get('[value="Multi Window"]').click()

        cy.get('@windowOpen').then(() => {
            cy.visit('https://qavalidation.com/about-me/#google_vignette' + newUrl)
        });
    }) 
})
