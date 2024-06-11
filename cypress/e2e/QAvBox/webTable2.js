/// <reference types="cypress" />

describe('Web Table', () => {
    beforeEach(() => {
        cy.visit("https://qavbox.github.io/demo/");
        cy.contains('WebTable').click();
    })

    //Scroll to various elements in the table
    it("Validate texts in web Table", () => {
        // cy.get('#table02 > tbody > tr > td:nth-child(1)').each(($el, index, $list) => {
            
        // })
        cy.get('#table02').scrollTo('bottom', {duration:2000})
        cy.contains('Gloria Little').scrollIntoView({duration:2000})
    });


    //if the Name is 'Michelle House' then Age is '37'
    it("Verify value from anywhere in the table", () => {
        cy.get('#table02 > tbody > tr > td:nth-child(1)').each(($el, index, $list) => {
            //cy.log($el.text())

            var text = $el.text()
            if(text.includes('Michelle House')) {
                cy.get('#table02 > tbody > tr > td:nth-child(1)').eq(index).next().next().next().then(function(Age) {
                    const actualAge = Age.text();
                    expect(actualAge.trim()).to.equal('37')
                })            
            }
        })     
    });


    it("All table-data text", () => {
        cy.get('#table02 > tbody > tr')
        .each(HTMLTableRowElement => {

            cy.wrap(HTMLTableRowElement)
            .find('td')
            .each(cellItem =>       
                cy.log(cellItem.text())
            );
        })   
    });

    it("Validate Assertions for table data", () => {

        cy.get('#table02 > tbody > tr').contains('td', 'Ashton Cox').should('be.visible')
        cy.get('#table02 > tbody > tr > td').should('have.length', 330)
        cy.get('#table02 > tbody > tr > td').should('have.length.greaterThan', 327)
        cy.get('#table02 > tbody > tr > td').should('have.length.above', 329)
        cy.get('#table02 > tbody > tr > td').should('have.length.below', 335)
        cy.get('#table02 > tbody > tr > td').should('have.length.lt', 332)
        cy.get('#table02 > tbody > tr > td').should('have.length.lessThan', 340)
           
    });
})
