/// <reference types="cypress" />

describe('Test iteration over elements', ()=> {

    it('Calculate total price of all items on home page successfully', ()=> {

        
        cy.visit('https://bitetoothpastebits.com/');
        cy.get('.js-pc-price').invoke('text').as('itemPrice')

        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkPrice => {

            var itemsPriceTotal = 0;
            var itemPrice = $linkPrice.split('$');
            var i;
            for (i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
            }
            itemsTotal += itemsPriceTotal
            cy.log("sale price items: " + itemsPriceTotal)
            //expect(itemsTotal).to.equal(146.58999999999997)
        })
        
    })
})
