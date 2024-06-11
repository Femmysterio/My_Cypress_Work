/// <reference types="cypress" />

describe('Contact Us', () => {

    var email = 'orungbejaoluwafemi17@gmail.com';
    var subject = 'ATTENTION';
    var message = "i'm a software QA engineer with 5 years experience and i'm sending this message to you via cypress automation. Please if there is a vacancy for me, i'll like to showcase my skills";

    it('Validate Contact Us ', () => {

        cy.visit('https://www.konga.com/')
        cy.get('#about-konga').find('[href="/help/contact-us"]').as('contactUs')
        .scrollIntoView({duration:2000});
        cy.get('@contactUs').should('be.visible');
        cy.get('@contactUs').click();

        cy.get('#emailAddress').type(email);
        cy.get('#subject').type(subject);
        cy.get('#message').type(message)
        cy.get('._60ead_3bB7d').click({force:true})
    })
})
