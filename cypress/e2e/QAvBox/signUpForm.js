/// <reference types="cypress" />

describe('Sign Up Form', ()=> {

    var fullname = 'Oluwafemi Orungbeja';
    var email = 'femi17@gmail.com';
    var telephone = '08140972006';
    var fax = '08172758540'

    it('Validate Sign Up Form', ()=> {
        cy.visit("https://qavbox.github.io/demo/");
        cy.get('[href*="/signup"]').click();
        cy.get('#container').should('include.text', 'learn automation testing');

        cy.get('input[id="username"]').type(fullname);
        cy.get('[id="email"]').type(email);
        cy.get('#tel').type(telephone);
        cy.get('#fax').type(fax, {force:true});

        //Select Gender
        cy.get('[name="sgender"]').select(1).should('have.value', 'male')
        .and('contain.text', 'Male');
        cy.wait(2000)

        cy.get('[name="sgender"]').select('na').invoke('val').then((value) => {
            expect(value).to.eql('na')
            cy.log('Selected Value: ' + value)
        })
        cy.wait(2000)

        cy.get('[name="sgender"]').select('na').find('option:selected').invoke('text').then((textVal) => {
            cy.log('Selected Text: ' + textVal)
            expect(textVal).to.equal('Not Applicable')
        })

        //years of experience is to be checked
        cy.get('input[name="experience"]').eq(4).check();

        //Select skills
        cy.get('#ip').eq(0).check();
        cy.get('[value="manualtesting"]').check();
        cy.get('[value="automationtesting"]').check();
        cy.get('[value="apitesting"]').check();
        cy.get('[value="html"]').check();

        //Select some Automation Tools   
    cy.get('#tools').select(['Selenium', 'Cypress', 'Jenkins', 'Postman', 'JMeter'])
    .find('option:selected')
    .each(($el) => {
            cy.wrap($el).invoke('val').then((value) => {
                cy.log(value)
            })
        })

        //Alert window pop-up After submitting form
        cy.on("window:alert", (msg) => {
            expect(msg).to.equal('Registration Done!')
        });      
    }) 
})
