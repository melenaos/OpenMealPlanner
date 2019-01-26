import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import KitchenLibraryTemplate from "../layout/KitchenLibraryTemplate"
import RecipeList from '../components/RecipeList'
import KitchenLibraryActionbar from '../layout/KitchenLibraryActionbar'

class KitchenAllRecipes extends Component {

    render() {
        return (
            <KitchenLibraryTemplate  {...this.props}>
                <KitchenLibraryActionbar />
                <RecipeList data={this.props.data}  />
            </KitchenLibraryTemplate>
        )
    }
}

KitchenAllRecipes.propTypes = {
    data: PropTypes.array
}

function mapStateToProps({ user }) {
    return { user }
}

export default connect(mapStateToProps,null)(KitchenAllRecipes)
