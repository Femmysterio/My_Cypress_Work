/// <reference types="cypress" />

describe("Test contact us form through Goal", () => {
    it("Should be able to make a successful submission via contact us form", () => {
        cy.visit('https://www.goal.com/en-ng');
        // cy.get('[data-testid="footer-links"] > :nth-child(1) > a').click()
        cy.get('[href="/en-ng/contact"]').click({force:true})
        cy.get('#name').type('Oluwafemi Orungbeja', {force:true})
        cy.get('#email').type('orungbejaoluwafemi17@gmail.com', {force:true})
        //cy.get('#category').select(4, {force:true})
        cy.get('#category').select('I have a suggestion', {force:true}).should('have.value', "new_feature_request")
        cy.get('#subject').type('VERY IMPORTANT INFORMATION!!!', {force:true})
        cy.get('#message').type('I am a Software Quality Assurance Engineer with a 5years experience, i specialize in both manual and automation testing, i sent this message via automation. Im in need of a job.', {force:true})
        cy.get('[type="submit"]').click({force:true})
        cy.get('h1').contains('Thank you for contacting us!')
    });
})

