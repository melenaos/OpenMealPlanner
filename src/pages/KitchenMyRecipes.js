import React, { Component } from "react"
import PropTypes from 'prop-types'
import KitchenLibraryTemplate from "../layout/KitchenLibraryTemplate"
import RecipeList from '../components/RecipeList'

class KitchenMyRecipes extends Component {

    render() {
        return (
            <KitchenLibraryTemplate  {...this.props}>
                <RecipeList data={this.props.data} completeRecipe={this.props.completeRecipe} />
            </KitchenLibraryTemplate>
        )
    }
}

KitchenMyRecipes.propTypes = {
    data: PropTypes.array,
    completeRecipe: PropTypes.func.isRequired
}

export default KitchenMyRecipes