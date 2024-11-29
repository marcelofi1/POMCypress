class homeSaucePage{

    elements={
        usernameInput:()=>cy.get('#user-name'),
        passwordinput:()=>cy.get('#password'),
        loginBtn:()=>cy.get('#login-button'),
        errorMessage:()=>cy.get('h3[data-test="error"]'),
        burgerLink:()=>cy.get('#react-burger-menu-btn'),
        logoutLink:()=>cy.get('#logout_sidebar_link')
    }
    
    typeUserName(username){
        this.elements.usernameInput().type(username)
    }

    typePassword(password){
        this.elements.passwordinput().type(password)
    }

    clickLogin(){
        this.elements.loginBtn().click();
    }

    clickBurger(){
        this.elements.burgerLink().click();
    }

    clickLogout(){
        this.elements.logoutLink().click();
    }
}
module.exports=new homeSaucePage();