import React, { Component } from "react"
import PropTypes from 'prop-types'

class RecipeListItem extends Component {

    constructor(props) {
        super(props)

        this.handleCompleteClick = this.handleCompleteClick.bind(this)
    }


    render() {
        const { recipeId, recipe } = this.props
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
        )
    }
}

RecipeListItem.propTypes = {
    recipeId: PropTypes.string,
    recipe: PropTypes.string,
    completeRecipe: PropTypes.func.isRequired
}

export default RecipeListItem