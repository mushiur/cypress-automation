describe("Check UI Elements", ()=>{
    /*it("Checking Radio Buttons",() =>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get("#male").should("be.visible")
        .click()
        .should('be.checked')
        cy.wait(500)
        cy.get("#female").should("be.visible")
        .click()
        .should('be.checked')
        //cy.wait(450)
        //cy.get("#male").should('be.checked')
    })*/

    it("Checking Check Boxes Button", ()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        // visibilty of the element
        //cy.get("input#monday").should('be.visible')

        // Selecting single check box
        //.check().should('be.checked')

        // Unselecting checkbox
        //.uncheck().should('not.be.checked')

        /*Selecting all the check boxes*/
        //cy.get("input.form-check-input[type='checkbox']").check().should('be.checked').uncheck()

        cy.get("input.form-check-input[type='checkbox']").first().check()
        cy.get("input.form-check-input[type='checkbox']").last().check()
       
        
    })
})