/// <reference types="cypress" />

describe('Iterate through elements', ()=> {

    it('Login information for all toothpaste elements', ()=> {

        //login to web
        cy.visit('https://bitetoothpastebits.com/');
        cy.get('.feat-products__item').each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        })
    })

    it('Add specific product to cart', ()=> {
        cy.visit('https://bitetoothpastebits.com/');
        cy.get('.feat-products__item').each(($el, index, $list) => {
            
            // if($el.text().includes('Deodorant')) {
            //     cy.wrap($el).click()
            // }

            if($el.text().includes('Mouthwash')){
                cy.wrap($el).click()
            }
        })
    })
})
