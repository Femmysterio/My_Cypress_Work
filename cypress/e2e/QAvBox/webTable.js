/// <reference types="cypress" />

describe('Web Table', () => {
    beforeEach(() => {
        cy.visit("https://qavbox.github.io/demo/");
        cy.contains('WebTable').click();
    })

    it("Validate check box and deleting on same row as 'Functional'", () => {
        cy.get('#table01 > tbody > tr > td:nth-child(1)').each(($el, index, $list) => {

            cy.contains('td', 'Functional')
                .prev('td')
                .find('input')
                .check()

            cy.contains('td', 'Bugzilla')
                .next('td')
                .find('input').click().then((del) => {
                    const actualVal = del.val();
                    expect(actualVal).to.equal('Deleted')
                })           
        });

           ///OR

        //    cy.get('#table01 > tbody > tr:nth-child(1) > td:nth-child(1) > input').check()    
        //    cy.get('#table01 > tbody > tr:nth-child(1) > td:nth-child(5)').click()
    });


    it("Validate check box and deleting on same row as 'GUI'", () => {
        cy.get('#table01 > tbody > tr').each(($row) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($col) => {
                    if($col.text() == 'GUI'){
                        cy.get('td').eq(0).click() //click box on same row with GUI
                        cy.get('td').eq(4).click() //Click 'Delete' on same row with GUI
                    }
                })
            })
            
        });
         
    });


    it("Validate check box and deleting on same row as 'Performance'", () => {
        cy.get('#table01').contains('tr', 'Performance').within(() => {
            cy.get('td').eq(0).click() //click box on same row with Performance
            cy.get('td').eq(4).click() //Click 'Delete' on same row with Performance
        })
    });


    it("Get All Cell Text", () => {
        cy.get('#table01 > tbody > tr').each(($row) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($col) => {
                    cy.log($col.text())
                })
            })
        })
    });


    it("display texts in specific column", () => {
        cy.get('#table01 > tbody > tr > td:nth-child(2)').each(($el) => {
            cy.log($el.text())
        })
    });


    it("display texts in specific row", () => {
        cy.get('#table01 > tbody > tr:nth-child(1) > td').each(($el) => {
           cy.log($el.text())         
        })
    });


    it("To click on 'Selenium' in the table", () => {
        cy.get('#table01 > tbody > tr:nth-child(2) > td').each(($el) => {
            
            if($el.text() == 'Selenium'){
                cy.get($el).click()  
                
                cy.get('div>div>div>h1').then((newPage) => {
                    expect(newPage.text()).to.include("Selenium automates")
                })
            }                  
        })
    });
})
