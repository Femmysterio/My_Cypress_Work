/// <reference types="cypress" />

describe('Validate broken links', ()=> {   

    it('Navigate across the pages for broken links', ()=> {
        cy.visit("https://qavbox.github.io/demo/links/");

        let brokenLinks = 0
        let activeLinks = 0
        
        cy.get('a').each(($link, index) => {
            const href = $link.attr('href')
            if (href) {
                cy.request({ url: href ,failOnStatusCode:false}).then((response) => {
                    if (response.status >= 301) {

                        cy.log(`**** link ${index + 1} is a broken link ****`)
                        brokenLinks++
                    }
                    else {
                        cy.log(`*** link ${index + 1} is an active link ***`)
                        activeLinks++
                    }
                })
            }
        }).then(($links) => {
            const totalLinks = $links.length
            cy.log(`*** Total links are: ${totalLinks} ***`)
            cy.log(`*** Broken links are: ${brokenLinks} ***`)
            cy.log(`*** Active links are: ${activeLinks} ***`)
        })
    }) 
})
