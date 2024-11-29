describe('',()=>{

    beforeEach(function(){
        cy.visit('https://demoqa.com/modal-dialogs')
    })
    
    it('Closures & Variables',()=>{
        cy.get('#showSmallModal').then($modalButton =>{
            const smallModalText=$modalButton.text();
            cy.log(smallModalText)
            $modalButton.click();
            cy.get('#example-modal-sizes-title-sm').contains(smallModalText,{matchCase:false})
        })
    })

    it('Aliases',function(){
        cy.get('#showSmallModal').invoke('text').as('InvokeText')
        cy.get('#showSmallModal').then($modalButton =>{
            const smallModalText=$modalButton.text();
            cy.log(smallModalText)
            cy.wrap(smallModalText).as('WrapText')
        })
    })
    it('Share Context', function(){
        cy.log("INVOKE: "+this.InvokeText)
        cy.log("WRAP: "+this.WrapText)
    })
})