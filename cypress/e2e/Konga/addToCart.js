/// <reference types="cypress" />

describe('Add to cart', ()=> {

    it('Add Mobile Phone items to Cart', ()=> {

        cy.visit('https://www.konga.com/');
        cy.get('.ef511_2c5_i').contains('Phones and Tablets').click();
        cy.get('div > div > ul > li > a > label > span').contains('Mobile Phones').click();
        cy.get('a > label > span').contains('Smartphones').click();
        cy.get('ul>li>a>label>span').contains('Above ₦40000').click();
        cy.get('ul>li>a._41bb1_2mCF_>label').contains('Samsung').click();
        cy.contains("Samsung Galaxy A35 - 6.6'' - 8gb...").click();
        cy.get('[type="submit"]').eq(7).click();
        cy.wait(2000);
        cy.go(-2);
        cy.contains('Samsung Galaxy S24 Plus - 6.7" -...').click();
        cy.get('._6d187_pzjfk').eq(1).click();

        cy.get('._3078f_2Lc4W').contains('1,938,500').should('have.text', '₦1,938,500');     
    }) 
})
