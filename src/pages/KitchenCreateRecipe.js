import React, { Component } from "react"
import PropTypes from 'prop-types'
import { connect } from "react-redux"

import * as actions from '../actions'
import KitchenLibraryTemplate from "../layout/KitchenLibraryTemplate"
import EditRecipeInformation from '../components/EditRecipeInformation'
import EditRecipeIngredients from '../components/EditRecipeIngredients'
import EditRecipeSteps from '../components/EditRecipeSteps'
import EditRecipeDetails from '../components/EditRecipeDetails'
import EditRecipeStoraging from '../components/EditRecipeStoraging'
import EditRecipeVisibility from '../components/EditRecipeVisibility'
import EditRecipeActions from '../components/EditRecipeActions'
//import EditRecipeDisclaimer from '../components/EditRecipeDisclaimer'


class KitchenCreateRecipe extends Component {
    constructor(props) {
        super(props)

        this.keyCount = 0

        this.state = {
            recipe: {
                // information
                title: "",
                servings:"1",
                prep_time: "",
                cook_time: "",
                description: "",

                ingredients: [],

                steps: [],

                // details
                cuisine:[],
                main_ingredient: [],
                meal: [],
                dietary: [],

                //storage
                refrigerate: "",
                freeze: "",

                publicRecipe: "true"
            },

            ingredientError: "",
            recipeError: ""
        }

        this.handleIngredientsChanged = this.handleIngredientsChanged.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleStepsChanged = this.handleStepsChanged.bind(this)
        this.handleAddTag = this.handleAddTag.bind(this)
        this.handleDeleteTag = this.handleDeleteTag.bind(this)
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

    handleStepsChanged(steps) {
        this.setState(prevState => ({
            ...prevState,
            recipe: {
                ...prevState.recipe,
                steps
            }
        }))
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.getAttribute('data-name')

        this.setState(prevState => ({
            ...prevState,
            recipe: {
                ...prevState.recipe,
                [name]: value
            }
        }))
    }

    handleAddTag(tag, name) {
        //const name = event.target.getAttribute('data-name')

        this.setState(prevState => ({
            ...prevState,
            recipe: {
                ...prevState.recipe,
                [name]: [...prevState.recipe[name], tag]
            }
        }))

    }

    handleDeleteTag(i, name) {// event
        //const name = event.target.getAttribute('data-name')

        this.setState(prevState => ({
            ...prevState,
            recipe: {
                ...prevState.recipe,
                [name]: prevState.recipe[name].filter((_, index) => index !== i)
            }
        }))
    }

    render() {
        return (
            <KitchenLibraryTemplate fullwidth={true} {...this.props}>
                <div className="row">
                    <div className="col s12">
                        <EditRecipeInformation {...this.state.recipe} onInputChange={this.handleInputChange} />
                        <EditRecipeIngredients ingredients={this.state.ingredients} onIngredientsChange={this.handleIngredientsChanged} />
                        <EditRecipeSteps steps={this.state.steps} onStepsChange={this.handleStepsChanged} />
                        <EditRecipeDetails {...this.state.recipe} onAdd={this.handleAddTag} onDelete={this.handleDeleteTag} />
                        <EditRecipeStoraging {...this.state.recipe} onInputChange={this.handleInputChange} />
                        <EditRecipeVisibility publicRecipe={this.state.recipe.publicRecipe} onInputChange={this.handleInputChange}/>
                        <EditRecipeActions />
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
