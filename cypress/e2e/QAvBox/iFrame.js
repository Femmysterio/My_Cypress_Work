/// <reference types="cypress" />

describe('handling I-Frame', ()=> {


    it('Validate handling iframe-1', ()=> {
        cy.visit("https://qavbox.github.io/demo/");
        cy.contains('iFrames').click()
        cy.get('#input1').type('Boluwatife Orungbeja')

        //First I-Frame
        cy.get('#Frame1').then(($iframe1) => {
            const body1 =  $iframe1.contents()
            cy.wrap(body1).as('iframe1')
        });

        //Assertion method 1
        cy.get('@iframe1').find('#frametext').as('msg')
        cy.get('@msg').then(($expectedText) => {
            const text = $expectedText.text()
            expect(text).to.equal('I am inside Frame')
        })

        //Assertion method 2
        // cy.get('@iframe1')
        // .find('#frametext')
        // .should('have.text', 'I am inside Frame')

        cy.get('@iframe1').find('[href="http://google.com/"]').click()

        //Any one of this will also work
        //cy.get('@iframe1').find('[href*="google.c"]').click()
        //cy.get('@iframe1').find('[href^="http://goog"]').click()
        //cy.get('@iframe1').find('[href$="oogle.com/"]').click()
    });


    it('Validate handling iframe-2', () => {
        cy.visit("https://qavbox.github.io/demo/");
        cy.contains('iFrames').click()

        //Second I-Frame
        cy.get('#Frame2').then(($iframe2) => {
            const body2 =  $iframe2.contents()
            cy.wrap(body2).as('iframe2')
        });

        //Text Assertion
        cy.get('@iframe2')
        .find('#frameinputtext')
        .should('have.text', 'Enter something!')

        //Type inside textbox in i-frame
        cy.get('@iframe2').find('#frameinput').type('Olamiposi')

        //OR
        //cy.get('#Frame2').its('0.contentDocument.body').find('#frameinput').type('Olamiposi Orungbeja')


        cy.get('@iframe2').find('[href*="basicjava"]').click({force:true}) //click on 'Category3'       
    })
})
