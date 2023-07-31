/*describe('My First test',()=>
{
    it('test1',() =>{
        expect(true).to.equal(true)
    })
})*/

describe('My First Test', () => {
    it('verify title-positive', () => {
      //all the steps
      cy.visit("https://opensource-demo.orangehrmlive.com")

      //insert assertion
      //catch title
      cy.title().should('eq','OrangeHRM')

    })
    it('verify title-Negative test', () => {
        //all the steps
        cy.visit("https://opensource-demo.orangehrmlive.com")
  
        //insert assertion
        //catch title
        cy.title().should('eq','OrangeHRM123')
        
      })
  })
