import inventoryPage from '../../../pages/saucedemo/inventoryPage'
import homeSaucePage from '../../../pages/saucedemo/homeSaucePage'

describe('Commands Example',function(){

    beforeEach(function(){

        cy.visit('https://www.saucedemo.com/')
        cy.fixture('fixtures-demo/sauceCredentials')
        .then(credentials =>{
            this.credentials=credentials;
        })        
    });

    it('login with commands',function(){
        cy.typelogin(this.credentials.standardUser,this.credentials.systemPassword);
        inventoryPage.elements.titleSpan().should('contain.text','Products')
        cy.Logout();
        cy.url().should('eq','https://www.saucedemo.com/')
    });

    it('fail login test',function(){
        cy.typelogin(this.credentials.dummyUsername,this.credentials.systemPassword);
        homeSaucePage.elements.errorMessage().should('have.text','Epic sadface: Username and password do not match any user in this service');
    });
   
})