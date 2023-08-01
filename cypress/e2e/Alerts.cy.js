describe('Alerts', ()=>{
    // 1. Javascript Alerts: It will have some text and 'OK' button
    it('JS Alert Have some text and ok button',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.xpath("//button[normalize-space()='Click for JS Alert']").click()

        // simple window alert that's why we use window.alert
        cy.on('window:alert',(t)=>{
            expect(t).to.equal('I am a JS Alert')
        })
        // alert window automatically closed by cypress
        cy.get('#result')
        .should('have.text', 'You successfully clicked an alert')



    })
    // 2. Javascript Confirm Alerts: It will have some text and 'OK' and 'Cancel' buttons

    it.only('JS confirm alert- Ok',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        // cofirm window alert that's why we use window:confirm

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm')
        })
        cy.get('#result')
        .should('contain', 'Ok')



    })
    it.only('JS cancel alert- Cancel',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(t)=>{
                    expect(t).to.contains('I am a JS Confirm')
        })
        cy.on('window:confirm',()=>false);
        cy.get('#result').should('have.text','You clicked: Cancel')

    })

    // specific kichu run korte chaile describe/it er pore only likhelei hobe


    // 3. Javascript Prompt Alerts: It will have some text and 'OK' and 'Cancel' buttons

    it.only('Javascript Prompt',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome to JavaScript');
        })
        cy.get("button[onclick='jsPrompt()']").click()

        // cy.on('window:prompt',()=>false);
        cy.get('#result').should('contain','welcome to JavaScript');

       

    })

    // 4. Authenicated Alert
    it.only('Javascript Prompt',()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth:{
            username:'admin',
            password:'admin'   
        }})
        cy.get("div[class='example'] p").should('have.contain','Congratulations');


       

    })




})