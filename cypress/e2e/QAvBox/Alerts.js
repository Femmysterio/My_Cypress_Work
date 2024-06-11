/// <reference types="cypress" />

describe('Validate Web Alert', ()=> {

    it('Validate window prompt text', ()=> {
        cy.visit("https://qavbox.github.io/demo/");
        cy.get('[href="/demo/alerts"]').click()
        cy.get('[name="commit"]').click()

        cy.on('window:alert', (text) => {
            expect(text).to.eq('Have a nice day!!!')
            return true
        })
    })

    it('Validate window prompt text', ()=> {
        cy.visit("https://qavbox.github.io/demo/");
        cy.get('[href="/demo/alerts"]').click()
        cy.get('#delayalert').click()
        cy.wait(5000)

        cy.on('window:alert', (txt) => {
            expect(txt).to.eq('I appeared after 5 seconds!')
            return true
        })
    })

    //Entering text in an Alert pop up
    it('Validate window prompt text', ()=> {
        cy.visit("https://qavbox.github.io/demo/alerts/", {
            onBeforeLoad(win) {
                cy.stub(win, 'prompt').returns('Aries')            
            }       
        });
        
        cy.get('#prompt').click()
        cy.get('#Parademo').should('contain.text', 'Hello Aries! How are you today?')      
    })

    it("Confirm dialog box returns the user's selection", ()=> {
        cy.visit("https://qavbox.github.io/demo/alerts/")
        cy.get('#confirm').click();

        cy.on('window:confirm', (str) => {
            return false;
        })

        cy.get('#Parademo').should('have.text', 'You pressed Cancel!')       
    })

    it("Confirm dialog box returns the user's selection", ()=> {
        cy.visit("https://qavbox.github.io/demo/alerts/")
        cy.get('#confirm').click();

        cy.on('window:confirm', (str) => {
            return true;
        })

        cy.get('#Parademo').should('have.text', 'You pressed OK!')     
    })
})
