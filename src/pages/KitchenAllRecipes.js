import React, { Component } from "react"
import PropTypes from 'prop-types'
import KitchenLibraryTemplate from "../layout/KitchenLibraryTemplate"
import RecipeList from '../components/RecipeList'

class KitchenAllRecipes extends Component {

    render() {
        return (
            <KitchenLibraryTemplate  {...this.props}>
                <RecipeList data={this.props.data} completeRecipe={this.props.completeRecipe} />
            </KitchenLibraryTemplate>
        )
    }
}

KitchenAllRecipes.propTypes = {
    data: PropTypes.array,
    completeRecipe: PropTypes.func.isRequired
}

export default KitchenAllRecipes