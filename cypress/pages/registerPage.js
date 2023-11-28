export class registerPage{

    weblocators={
       firstName : '#input-firstname',
       lastName :'#input-lastname',
       email :'#input-email',
       telephone :'#input-telephone',
       password :'#input-password',
       passwordConfirm : '#input-confirm',
       checkbox :'input[type="checkbox"]',
       submit:'.btn.btn-primary'
    }

    openURL() {
        cy.visit(Cypress.env('URL'));
    }

    enterFirstName(FName){
        cy.get(this.weblocators.firstName).type(FName);

    }

    enterLastName(LName){
        cy.get(this.weblocators.lastName).type(LName);

    }

    enterEmail(email){
        cy.get(this.weblocators.email).type(email);

    }

    enterPhoneNum(phoneNum){
        cy.get(this.weblocators.telephone).type(phoneNum);

    }

    enterPassword(password){
        cy.get(this.weblocators.password).type(password);
        cy.get(this.weblocators.passwordConfirm).type(password);

    }

    selectCheckBox(){
        cy.get(this.weblocators.checkbox).click();
    }

    clickonContinue(){
        cy.get(this.weblocators.submit).click();
    }
}