describe("Assertions Demo", () => {

    /*it("Implicit assertions", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

                            // should   end
        //cy.url().should('include', 'orangehrmlive.com')
        //cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //cy.url().should('contain', 'orangehrm')

        //applying multiple assertions
        //cy.url().should('include', 'orangehrmlive.com')
        //.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        //.url().should('contain', 'orangehrm')

        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')

        cy.title().should('include','Orange')
        .and('contains', 'HRM')

        cy.get('.orangehrm-login-branding > img').should('exist') //logo is exist or not
        .and('be.visible')  //logo is visible in the browser or not

        cy.xpath("//a").should('have.length', '5') // no of links

        cy.xpath("//input[@placeholder='username']").type("Admin") // provid a value into input box
        .should('have.value', 'Admin')

    })*/



    it("Explicit assertions", ()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin") 
        cy.xpath("//input[@placeholder='Password']").type("admin123") 
        cy.xpath("//button[normalize-space()='Login']").click()

        let expName = "Paul Collings"

        
        cy.xpath("//p[@class='oxd-userdropdown-name']").then((x) => {
            let actName = x.text()

            // BDD Assertions
            expect(actName).to.equal(expName)
            expect(actName).to.not.equal(expName)

            // TDD assertions
            assert.equal(actName,expName)
            assert.notEqual(actName, "Rifat")


        })
        
        

    })

})