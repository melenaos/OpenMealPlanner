import "../css/RecipeList.css"
import React, { Component } from "react"
import _ from "lodash"
import RecipeListItem from "./RecipeListItem"
import PropTypes from 'prop-types'

 
class RecipeList extends Component {

    render() {
        const { data } = this.props
        return (
            <div className="recipe-list-container">
                <div className="row">
                    {_.isEmpty(data) ? <EmptyRecipes /> :
                        _.map(data, (value, key) => {
                            return <RecipeListItem key={key} recipeId={key} recipe={value} completeRecipe={this.props.completeRecipe} />
                        })
                    }
                </div>
            </div>
        )
    }
}

RecipeList.propTypes = {
    data: PropTypes.array,
    completeRecipe: PropTypes.func.isRequired
} 

const EmptyRecipes = () => <div className="col s10 offset-s1 center-align">
    <img
        alt="Nothing was found"
        id="nothing-was-found"
        src="/img/nothing.png"
    />
    <h4>You don&apos;t have any recipes</h4>
    <p>Start by clicking add button in the bottom of the screen</p>
</div>

export default RecipeList