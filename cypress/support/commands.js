// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login',(username, password) =>{
    cy.visit('');
    cy.get('#input-email').type(username);
    cy.get('#input-password').type(password);
    cy.get('input[type="submit"]').click()
});

Cypress.Commands.add('brokenLinks',() =>{
    //cy.visit(url);
    let brokenLinks = 0;
    let activeLinks = 0;

    cy.get('a').each(($links,index)=>{
        const href = $links.attr('href');
        if(href){
            cy.request({url:href, failOnStatusCode:false}).then((response) =>{
                if(response.status >= 400){
                    cy.log(`Link ${index + 1} is Broken link ${href}`)
                    brokenLinks++
                } else {
                    cy.log(`link ${index + 1 } is Active link`)
                    activeLinks++
                }
            })
        }

    }).then(($links) => {
        const totalLinks = $links.length
        cy.log(`Total links on page are ${totalLinks}`)
        cy.log(`Total Active links on page are ${activeLinks}`)
        cy.log(`Total Broken links on page are ${brokenLinks}`)
    })

});