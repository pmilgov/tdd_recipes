describe("Home page", () => {
    beforeEach(() => {
        cy.visit('/')
    })

    /*
    Story: As a Chef, I want to store my recipes so I can keep track of them
    Gherkin Syntax: (behavior descriptions) - removes logic details from behavior tests
    Scenario: ==> (story)
    Given (And): ==> some precondition(s)
    When (And):  ==> some action(s) by the actor
    Then (And): ==> some testable outcome is achieved
    */

    // 1. As a Chef, I want to store my recipes so that I can keep track of them
    // Given I am on the landing page, When the page loads, Then I should see a heading 
    // that reads "My Recipes" And I should see tet beneath the heading that reads "There are no recipes to list."
    //
    // 2. As a Chef, I want to be able to add recipes to my collection so that I may have a record of them. - 
    // Given I am on the landing page, When the page loads, Then I should see a button that says "Add Recipe" beneath 
    // the "My Recipes" heading. 
    //
    // 3. As a Chef, I want to be able to see a recipe that I have added show up under "My Recipes". - Given I have clicked the add recipe button, When I enter the details of a recipe in the form And I click the submit button Then I should see that recipe's name in the list under a heading that reads "My Recipes".
    // Given I am on the landing page, When I click the add recipe button, Then I should see a form with fields: "Recipe Name" and "Recipe Instructions" 
    // And the "Add Recipe" button should no longer be on the screen. 


    /** TESTS */
    // 1. As a Chef, I want to store my recipes so that I can keep track of them
    // Given I am on the landing page, When the page loads, Then I should see a heading 
    // that reads "My Recipes" And I should see text beneath the heading that reads "There are no recipes to list."

    it("header contains recipe heading with a message that there are no recipes", () => {
        cy.get('.App-header').should('contain', 'My Recipes')
        cy.get('p').should('contain', 'There are no recipes to list.')
    })

    // 2. As a Chef, I want to be able to add recipes to my collection so that I may have a record of them. - 
    // Given I am on the landing page, When the page loads, Then I should see a button that says "Add Recipe" beneath 
    // the "My Recipes" heading. 
    it("page contains an add recipe button that when clicked opens a form", () => {
        const addRecipeButton = cy.get("#add-recipe")
        addRecipeButton.click()

        expect(cy.get('#recipe-form')).toExist()
    })

    // TODO: add tests for adding r
    // 3. As a Chef, I want to be able to see a recipe that I have added show up under "My Recipes". - Given I have clicked the add recipe button, When I enter the details of a recipe in the form And I click the submit button Then I should see that recipe's name in the list under a heading that reads "My Recipes".
    // Given I am on the landing page, When I click the add recipe button, Then I should see a form with fields: "Recipe Name" and "Recipe Instructions" 
    // And the "Add Recipe" button should no longer be on the screen. 
    it("contains a form with fields 'Recipe Name' and 'Recipe Instructions' after clicking the 'Add Recipe' button", () => {
        const addRecipeButton = cy.get('#add-recipe')
        addRecipeButton.click()

        expect(cy.get('input[name="newRecipeName"]')).toExist()
        expect(cy.get('textarea[name="newRecipeInstructions"]')).toExist()
    })

    it("displays a recipe name under the 'My Recipes' heading after it has been added through the 'Add Recipe' form", () => {
        const addRecipeButton = cy.get('#add-recipe')
        addRecipeButton.click().then(() => {  
          cy.get('input[name="newRecipeName"]').type("Tofu Scramble Tacos")
          cy.get('textarea[name="newRecipeInstructions"]').type("1. heat a skillet on medium with a dollop of coconut oil {enter} 2. warm flour tortillas")
          cy.get('input[type="submit"]').click()
          cy.get('ul').then(() => { 
            cy.get('ul').contains("Tofu Scramble Tacos")
          }) 
        }) 
      })

   
    })  //end of describe()