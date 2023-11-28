/// <reference types = "cypress"/>

import {registerPage} from "../../pages/registerPage"
const pageOb = new registerPage()
import registerData from "../../fixtures/registerData.json"


describe('User Registration',() =>{
    it('TC 01 - Test user registration',() =>{

        pageOb.openURL();
        pageOb.enterFirstName(registerData.firstName);
        pageOb.enterLastName(registerData.lastName);
        pageOb.enterEmail(registerData.email);
        pageOb.enterPhoneNum(registerData.telephone);
        pageOb.enterPassword(registerData.password);

        pageOb.selectCheckBox();
        pageOb.clickonContinue();



    })
})