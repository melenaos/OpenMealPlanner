import "../css/RecipeList.css";
import React, { Component } from "react";
import _ from "lodash";
import RecipeListItem from "./RecipeListItem";

class RecipeList extends Component {
    state = {
        addFormVisible: false,
        addFormValue: ""
    };

    handleInputChange = event => {
        this.setState({ addFormValue: event.target.value });
    };

    handleFormSubmit = event => {
        const { addFormValue } = this.state;
        const { addRecipe } = this.props;
        event.preventDefault();
        addRecipe({ title: addFormValue });
        this.setState({ addFormValue: "" });
    };

    renderAddForm = () => {
        const { addFormVisible, addFormValue } = this.state;
        if (addFormVisible) {
            return (
                <div id="recipe-add-form" className="col s10 offset-s1">
                    <form onSubmit={this.handleFormSubmit}>
                        <div className="input-field">
                            <i className="material-icons prefix">note_add</i>
                            <input
                                value={addFormValue}
                                onChange={this.handleInputChange}
                                id="recipeNext"
                                type="text"
                            />
                            <label htmlFor="recipeNext">What To Do Next</label>
                        </div>
                    </form>
                </div>
            );
        }
    };

    renderRecipes() {
        const { data } = this.props;
        const recipes = _.map(data, (value, key) => {
            return <RecipeListItem key={key} recipeId={key} recipe={value} completeRecipe={this.props.completeRecipe} />;
        });
        if (!_.isEmpty(recipes)) {
            return recipes;
        }
        return (
            <div className="col s10 offset-s1 center-align">
                <img
                    alt="Nothing was found"
                    id="nothing-was-found"
                    src="/img/nothing.png"
                />
                <h4>You don't have any recipes</h4>
                <p>Start by clicking add button in the bottom of the screen</p>
            </div>
        );
    }

 

    render() {
        const { addFormVisible } = this.state;
        return (
            <div className="recipe-list-container">
                <div className="row">
                    {this.renderAddForm()}
                    {this.renderRecipes()}
                </div>
                <div className="fixed-action-btn">
                    <button
                        onClick={() => this.setState({ addFormVisible: !addFormVisible })}
                        className="btn-floating btn-large teal darken-4"
                    >
                        {addFormVisible ? (
                            <i className="large material-icons">close</i>
                        ) : (
                                <i className="large material-icons">add</i>
                            )}
                    </button>
                </div>
            </div>
        );
    }
}

export default RecipeList;