import React, { Component } from "react"
import PropTypes from 'prop-types'
import KitchenLibraryTemplate from "../layout/KitchenLibraryTemplate"
import RecipeList from '../components/RecipeList'
import KitchenLibraryActionbar from '../layout/KitchenLibraryActionbar'

class KitchenMealPlanning extends Component {

    render() {
        return (
            <KitchenLibraryTemplate  {...this.props}>
                <KitchenLibraryActionbar />
                <RecipeList data={this.props.data}  />
            </KitchenLibraryTemplate>
        )
    }
}

KitchenMealPlanning.propTypes = {
    data: PropTypes.array,
}

export default KitchenMealPlanning