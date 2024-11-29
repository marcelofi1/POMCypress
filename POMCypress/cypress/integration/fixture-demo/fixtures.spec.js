import homeSaucePage from '../../../pages/saucedemo/homeSaucePage'
import inventoryPage from '../../../pages/saucedemo/inventoryPage'
describe ('Fixtures Demo',function(){
    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/')
        cy.fixture('fixtures-demo/sauceCredentials')
        .then(credentials =>{
            this.credentials=credentials;
        })
    });

    it('Standard username',function(){
        homeSaucePage.typeUserName(this.credentials.standardUser);
        homeSaucePage.typePassword(this.credentials.systemPassword);
        homeSaucePage.clickLogin();
        inventoryPage.elements.titleSpan().should('have.text','Products')
    })

    it('Incorrect username',function(){
        homeSaucePage.typeUserName(this.credentials.dummyUsername);
        homeSaucePage.typePassword(this.credentials.systemPassword);
        homeSaucePage.clickLogin();
        homeSaucePage.elements.errorMessage().should('have.text','Epic sadface: Username and password do not match any user in this service');
    })

    it('Incorrect password',function(){
        homeSaucePage.typeUserName(this.credentials.standardUser);
        homeSaucePage.typePassword(this.credentials.dummyPassword);
        homeSaucePage.clickLogin();
        homeSaucePage.elements.errorMessage().should('have.text','Epic sadface: Username and password do not match any user in this service');
    })

    it('locked out username',function(){
        homeSaucePage.typeUserName(this.credentials.lockedUsername);
        homeSaucePage.typePassword(this.credentials.systemPassword);
        homeSaucePage.clickLogin();
        homeSaucePage.elements.errorMessage().should('have.text','Epic sadface: Sorry, this user has been locked out.');
    })
})