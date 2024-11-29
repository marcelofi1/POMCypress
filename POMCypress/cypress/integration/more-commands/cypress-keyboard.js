describe('Cypress Keyboard Demo',()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('standard Speed typing',()=>{
        cy.get('#user-name').type('test demo for typing')
    });

    it('Slow Speed Typing',{keystrokeDelay:150},()=>{
        cy.get('#user-name').type('test demo for typing')
    });
})