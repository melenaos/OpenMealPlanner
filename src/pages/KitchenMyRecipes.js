import React, { Component } from "react"
import PropTypes from 'prop-types'
import KitchenLibraryTemplate from "../layout/KitchenLibraryTemplate"
import RecipeList from '../components/RecipeList'
import KitchenLibraryActionbar from '../layout/KitchenLibraryActionbar'

class KitchenMyRecipes extends Component {

    render() {
        return (
            <KitchenLibraryTemplate  {...this.props}>
                <KitchenLibraryActionbar />
                <RecipeList data={this.props.data}  />
            </KitchenLibraryTemplate>
        )
    }
}

KitchenMyRecipes.propTypes = {
    data: PropTypes.array,
}

export default KitchenMyRecipes