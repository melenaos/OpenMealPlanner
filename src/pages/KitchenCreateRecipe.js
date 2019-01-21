import React, { Component } from "react"
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import _ from "lodash"

import * as actions from '../actions'
import KitchenLibraryTemplate from "../layout/KitchenLibraryTemplate"
import EditRecipeInformation from '../components/EditRecipeInformation'
import EditRecipeIngredients from '../components/EditRecipeIngredients'

class KitchenCreateRecipe extends Component {
    constructor(props) {
        super(props)

        this.keyCount = 0

        this.state = {
            recipe: {
                title: "",
                prep_time: "",
                cook_time: "",
                description: "",
                ingredients: []
            },

            ingredientError: "",
            recipeError: ""
        }

        this.handleIngredientsChanged = this.handleIngredientsChanged.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleIngredientsChanged(ingredients) {
        this.setState(prevState => ({
            ...prevState,
            recipe: {
                ...prevState.recipe,
                ingredients
            }
        }))
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.getAttribute('data-name')

        let obj = Object.assign({}, this.state)//, { [name]: value }
        let parentObj =  obj.recipe
        parentObj[name] = value
        this.setState(parentObj)
    }

    render() {
        return (
            <KitchenLibraryTemplate fullwidth={true} {...this.props}>
                <div className="row">
                    <div className="col s12">
                        <EditRecipeInformation {...this.state} onInputChange={this.handleInputChange} />
                        <EditRecipeIngredients ingredients={this.state.ingredients} onIngredientsChange={this.handleIngredientsChanged} />
                    </div>
                </div>

            </KitchenLibraryTemplate>
        )
    }
}

KitchenCreateRecipe.propTypes = {
    data: PropTypes.array,
}


const mapDispatchToProps = dispatch => {
    return {
        onAddIngredientClick: () => {
            dispatch(actions.addRecipeIngredient())
        },
        onCreateRecipeClick: (recipe, userId) => {
            dispatch(actions.addRecipe(recipe, userId))
        }
    }


}

function mapStateToProps({ user }) {
    return { user }
}
export default connect(mapStateToProps, mapDispatchToProps)(KitchenCreateRecipe)
