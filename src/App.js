import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import { render } from 'enzyme';

/* Initial setup of App
function App() {
  return (
    <div>
       <h1 className="App-header">My Recipes</h1>
       <p>There are no recipes to list.</p>
    </div>
  )
}
*/

class App extends React.Component {
  state = {
    isAddRecipeFormDisplayed: false,
    recipes: [],
    newRecipeName: "",
    newRecipeInstructions: ""

  }

  /*
  handleRecipeNameChange = (event) => {
    const value = event.target.value;

    this.setState({ newRecipeName: value })
  }

  handleRecipeInstructionsChange = (event) => {
    const value = event.target.value;

    this.setState({ newRecipeInstructions: value })
  }
*/

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;

    this.setState({ [name]: event.target.value })

  }

  handleAddRecipe = () => {
    this.setState({
      recipes: [...this.state.recipes, { newRecipeName: this.state.newRecipeName, newRecipeInstructions: this.state.newRecipeInstructions }]
    })
  }

  toggleAddRecipeForm = () => {
    this.setState({ isAddRecipeFormDisplayed: !this.state.isAddRecipeFormDisplayed })
  }

  submitRecipe = (event) => {
    event.preventDefault()
    this.setState({
      recipes: [
        {
          name: this.state.newRecipeName,
          instructions: this.state.newRecipeInstructions
        }
      ]
    })
  }

  render() {
    const addNewRecipeForm = (
      <form id="recipe-form" onSubmit={this.submitRecipe}>
        <label htmlFor="newRecipeName">Recipe name: </label>
        <input type="text" name="newRecipeName" onChange={this.handleAddRecipe} value={this.state.newRecipeName} />
        <label htmlFor="NewRecipeInstructions">Instructions:</label>
        <textarea name="newRecipeInstructions"
          placeholder="write recipe instructions here..."
          onChange={this.handleAddRecipe}
          value={this.state.newRecipeInstructions} />
        <input type="submit" />
      </form>
    )

    return (
      <div className="App">
        <h1 className="App-header">My Recipes</h1>
        {
          this.state.isAddRecipeFormDisplayed
            ? addNewRecipeForm
            : <button id="add-recipe" onClick={this.toggleAddRecipeForm}>Add Recipe</button>
        }
        {
          this.state.recipes.length > 0 ?
            <ul>
              <li>{this.state.recipes[0].name}</li>
            </ul> :
            <p>There are no recipes to list.</p>
        }
      </div>
    )
  }
}

export default App;
