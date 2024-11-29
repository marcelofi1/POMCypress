import homeSaucePage from '../../../pages/saucedemo/homeSaucePage'
import inventoryPage from '../../../pages/saucedemo/inventoryPage'

const tests=require('../../fixtures/data-driven/sauceUsers.json');

describe('Data Driven Test reading data fro a Json File',function(){

    beforeEach(function(){
        cy.visit('https://www.saucedemo.com/');
    });

    tests.forEach(test => {
        it(test.name,function(){
            homeSaucePage.typeUserName(test.username);
            homeSaucePage.typePassword(test.password);
            homeSaucePage.clickLogin();

            if(test.name ==='Standard User'){
                inventoryPage.elements.titleSpan().should('contain.text',test.expected);
            } else{
                homeSaucePage.elements.errorMessage().should('contain.text',test.expected);
            }
        });
    });
});