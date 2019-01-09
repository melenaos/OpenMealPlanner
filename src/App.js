import React, { Component } from "react"
import RecipeList from "./components/RecipeList"
import * as actions from "./actions"
import AddRecipeButton from "./components/AddRecipeButton"

class App extends Component {
    constructor(props) {
        super(props) 

        this.state = { 
            recipes: null
        }

        this.handleRecipesData = this.handleRecipesData.bind(this) 
        this.handleAddRecipeClick = this.handleAddRecipeClick.bind(this)
    }
    componentDidMount() {
        actions.fetchRecipes(this.handleRecipesData)
    }

    handleRecipesData(data) {
        this.setState({
            recipes: data
        })
    }

    handleAddRecipeClick() {

    }

    render() {
        return (
            <div className="container">
                <RecipeList
                    addRecipe={actions.addRecipe}
                    fetchRecipes={actions.fetchRecipes}
                    completeRecipe={actions.completeRecipe}
                    data={this.state.recipes}
                />
                <AddRecipeButton onClick={this.handleAddRecipeClick} />

            </div>
        )
    }
}

export default App