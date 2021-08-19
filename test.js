
import chaiColors from 'chai-colors'
chai.use(chaiColors)

        const uuid = () => Cypress._.random(0, 1e4)
        const id = uuid()
    describe('example to-do app', () => {
    before(() => {
     // accés à la site "automationpractise"
      cy.visit('http://automationpractice.com/index.php')
    })
      // click sur sign in 
    it('sign in', () => {
        cy.contains('Sign in').click()
  
    })
    // saisir email adresse pour creer un compte
    it('saisir email address', () => {
        const uuid = () => Cypress._.random(0, 1e4)
        const id = uuid()
        cy.get(":input[name='email_create']").type(`test${id}${'@gmail.com'}`)
        // clique sur le bouton "create an account"
        cy.get(":input[name='SubmitCreate']").contains('Create an account').click()
        cy.get('[id=account-creation_form]', { timeout: 10000 }).should('be.visible');
    })
    it ('saisir adresse erroné' , () => {
        //entrer une adresse erronée
        cy.get(":input[data-validate='isEmail']").clear()
        .type('test@')
        .should('have.value', 'test@')
        // cliquer sur un autre champs "password"
        cy.get(":input[data-validate='isPasswd']").click()
        cy.get(":input[data-validate='isEmail']").scrollIntoView().should('be.visible')
        cy.get(":input[data-validate='isEmail']")
        .should('have.css', 'background-color') 
        .and('be.colored', '#fff1f2') // case rouge du champs adresse erronée
    })
    it ('saisir adresse correcte' , () => {
        
        cy.get(":input[data-validate='isEmail']").clear().type(`test${id}${'@gmail.com'}`)
        cy.get(":input[data-validate='isPasswd']").click()
        cy.get(":input[data-validate='isEmail']").scrollIntoView().should('be.visible')
        cy.get(":input[data-validate='isEmail']")
        .should('have.css', 'background-color')
        .and('be.colored', '#ddf9e1')
    })
    //remplissage de formulaire
    it ('remplir le formulaire' , () => {
        cy.contains('Your personal information').scrollIntoView().should('be.visible')
        cy.get(":input[name='customer_firstname']")
        .type('mariem')
        .should('have.value', 'mariem')
        cy.get(":input[name='customer_lastname']")
        .type('benomrane')
        .should('have.value', 'benomrane')
        cy.get(":input[data-validate='isPasswd']")
        .type('benomrane')
        .should('have.value', 'benomrane')
        cy.get(":input[name='address1']")
        .type('Cité ghazela Tunis')
        .should('have.value', 'Cité ghazela Tunis')
        cy.get(":input[name='city']")
        .type('Tunis')
        .should('have.value', 'Tunis')
        cy.get(":input[name='id_state']").select('Arizona')
        cy.get(":input[name='postcode']")
        .type('60606')
        .should('have.value', '60606')
        cy.get(":input[name='id_country']").select('United States')
        cy.get(":input[name='phone_mobile']")
        .type('12345678')
        .should('have.value', '12345678')
        
     })
     // cliquer sur register
     it ('valider le formulaire' , () => {
        cy.contains('Register').click()
     })
     // message d'erreur s'affiche en rouge s'il ya un ou plus champs manquants
     it ('verifier champs manquants' , () => {
        cy.get('.alert.alert-danger')
        .should('have.css', 'background-color')
        .and('be.colored', '#f3515c')
        
     })
     //remplir les champs manquants
     it ('renseigne element manquant' , () => {
        const uuid = () => Cypress._.random(0, 1e4)
        const id = uuid()
        cy.get(":input[name='alias']").clear().type(`test${id}${'@orange.com'}`)
        
        cy.get(":input[data-validate='isPasswd']")
        .type('benomrane')
        .should('have.value', 'benomrane')
     
        cy.get(":input[name='id_country']").select('United States')

     })
     // cliquer sur register pour valider le formulaire
     it ('valider le formulaire' , () => {
        cy.get(":input[name='id_state']").select('Arizona') 
        cy.contains('Register').click()
     })
     // l'utilisateur est bien connecté avec le "first name et last name"
     it ('verifier la connexion' , () => {
        cy.get(".account").should('be.visible')
     })
     // l'affichage de 5 boutons
     it ('verifier l affichage des boutons' , () =>{
        cy.contains('Order history and details').should('be.visible')
        cy.contains('My credit slips').should('be.visible')
        cy.contains('My addresses').should('be.visible')
        cy.contains('My personal information').should('be.visible')
        cy.contains('My wishlists').should('be.visible')
     })
     //acceder à "my personal information"
     it ('cliquer sur my personal information' , () =>{
        cy.scrollTo('bottom')
        cy.contains('li', 'My personal information').click()
        //cy.get(":input[title='Manage my personal information']").click()
       // cy.visit('http://automationpractice.com/index.php?controller=identity')
     })
 
     //it ('cliquer sur my personal information' , () =>{
        // cy.get(":input[title='Manage my personal information']").click()
    // })
     it ('verification des champs', () => {
        cy.get(":input[name='firstname']").click({ force: true })
        expect(":input[name='customer_firstname']").to.equal(":input[name='firstname']")
     })
     //entrer le password et enregistrer les information modifié
     it ('entrer password', () => {
        cy.get(":input[name='old_passwd']")
        .type('benomrane')
        cy.get(":input[name='passwd']")
        .type('benomrane')
        cy.get(":input[name='confirmation']")
        .type('benomrane')
        cy.contains('save').click()
        
     })
     it ('modification avec succés' , () => {
         cy.contains('Your personal information has been successfully updated').should('be.visible')
     })
     // se deconnecter et se connecter
     it ('se deconnecter et connecter de nouveau' , () => {
         cy.contains('Sign out').click()
         cy.get(":input[id='email']")
        .type(`test${id}${'@gmail.com'}`)
        cy.get(":input[id='passwd']")
        .type('benomrane')
        cy.get(":input[name='SubmitLogin']").click()

     })

    })
