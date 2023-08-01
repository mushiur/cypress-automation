describe('Handle tabs',()=>{

    it('Approach 1', () =>{

        cy.visit('https://the-internet.herokuapp.com/windows') // parent window

        cy.get("a[href='/windows/new']").invoke('removeAttr','target').click() // clicking on the new window

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') // new window
        
        cy.wait(5000)

        cy.go('back'); // back to the parent tab/window


    }) 

    it('Approach 2', () =>{
        cy.visit('https://the-internet.herokuapp.com/windows') // parent window

        cy.get("a[href='/windows/new']").then((e)=>{
            let url = e.prop('href');

            cy.visit(url);
        })

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new') // new window
        
        cy.wait(5000)

        cy.go('back'); // back to the parent tab/window
        
        // have limitation in the 2nd approach
        // target domain should be similar like that. Like same domain ; only in this case 2nd approach will work perfectly



    })
})