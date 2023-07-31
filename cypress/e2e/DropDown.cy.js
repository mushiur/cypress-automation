describe('handle dropdrowns', () =>{
    it.skip('Dropdown with Select', ()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country")
        .select('Italy')
        .should('have.value', 'Italy')
    })

    it.skip('Test Dropdown', ()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container')
        .click()
        cy.log("Rifat")
        let abc = cy.xpath("//ul[@class='select2-results__options']/li")
        
        .each(function($ele, index, list){
            cy.log($ele.text())
            if($ele.text() =='India'){
                cy.log("Found Element")
                cy.wrap($ele).click()
            }
        })
      
        
    })
    it.skip("Auto Suggest dropdown", ()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.get('#searchInput').type('Dhaka')
        cy.get(".suggestion-title").contains('Dhaka Metro Rail').click( )


    })
    it('Dynamic Dropdown', ()=>{
        cy.visit('https://www.google.com/')
        cy.xpath("//textarea[@id='APjFqb']").type("cypress automation")

        cy.wait(3000)
        
        let abc = cy.get("div.wM6W7d>span")
        
        .each(($ele, index, list)=>{
            cy.log($ele.text())
            if($ele.text() =='cypress automation vs selenium'){
                cy.log("Found Element")
                cy.wrap($ele).click()
            }
        })
    })

})