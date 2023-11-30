import { homePage } from "../../pages/homePage";
const homePageOb = new homePage()

import testData from "../../fixtures/testData.json";

describe('Add To Cart Flow',() =>{
   before(()=>{

    cy.login(testData.login.username,testData.login.password)
   })

    it('Test case - Add to cart',() =>{
        homePageOb.searchProductName(testData.product.productName);
        homePageOb.addToCart();
        homePageOb.verifySuccessMessage().should('contain',testData.message.successMessage);

        // validate if there are any broken links 
        cy.brokenLinks();
    })
})