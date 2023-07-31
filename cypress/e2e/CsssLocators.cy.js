
describe('CSSLocator',()=>{
    it("Locators",()=>{
        
        cy.visit("https://automationexercise.com/")
        cy.get("[class='material-icons card_travel']").click()

        cy.get("#search_product").type("T-shirt")
        cy.get("[id='submit_search']").click()

        cy.get("#search_product").contains("T-shirt") //Assertion

        cy.xpath("(//div[@class='productinfo text-center'])").should('have.length',3)
        
       
        
    })
})