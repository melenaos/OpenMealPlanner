import React, { Component } from "react";
import RecipeList from "./components/RecipeList";
import * as actions from "./actions";

class App extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            data: null
        }

        this.handleRecipesData = this.handleRecipesData.bind(this) 
    }
    componentWillMount() {
        actions.fetchRecipes(this.handleRecipesData);
    }

    handleRecipesData(data) {
        this.setState({
            data: data
        })
    }

    render() {
        return (
            <div className="container">
                <RecipeList
                    addRecipe={actions.addRecipe}
                    fetchRecipes={actions.fetchRecipes}
                    completeRecipe={actions.completeRecipe}
                    data={this.state.data}
                />
            </div>
        );
    }
}

export default App;