import React, { Component } from "react";

class RecipeListItem extends Component {
    handleCompleteClick = completeRecipeId => {
        const { completeRecipe } = this.props;
        completeRecipe(completeRecipeId);
    };

    render() {
        const { recipeId, recipe } = this.props;
        return (
            <div key="recipeName" className="col s10 offset-s1 recipe-list-item teal">
                <h4>
                    {recipe.title}{" "}
                    <span
                        onClick={() => this.handleCompleteClick(recipeId)}
                        className="complete-recipe-item waves-effect waves-light teal lighten-5 teal-text text-darken-4 btn"
                    >
                        <i className="large material-icons">done</i>
                    </span>
                </h4>
            </div>
        );
    }
}

export default RecipeListItem;