import React, { Component } from "react"
import PropTypes from 'prop-types'
import _ from "lodash"

import KitchenLibraryTemplate from "../layout/KitchenLibraryTemplate"

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
            ingredientForm: {
                key: this.getKey(),
                name: "", //    Required
                quantity: "",// Required
                unit: ""
            },
            ingredientError: "",
            recipeError: ""
        }

        this.getKey = this.getKey.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.addIngredient = this.addIngredient.bind(this)
    }

    getKey() {
        return this.keyCount++
    }

    addIngredient() {
        if (this.validIngredientForm()) {
            let obj = JSON.parse(JSON.stringify(this.state))
            obj.recipe.ingredients.push(this.state.ingredientForm)
            obj.ingredientForm = {
                key: this.getKey(),
                name: "",
                quantity: "",
                unit: ""
            }
            this.setState(obj)
        }
    }

    validIngredientForm() {
        return !_.isEmpty(this.state.ingredientForm.name) &&
            !_.isEmpty(this.state.ingredientForm.quantity)
    }



    handleFormSubmit() {
        //validation
    }

    handleClear() {
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const parent = event.target.getAttribute('data-parent')
        const name = event.target.getAttribute('data-name')

        let obj = Object.assign({}, this.state)//, { [name]: value }
        let parentObj = parent ? obj[parent] : obj
        parentObj[name] = value
        this.setState(obj)
        console.log(this.state)
    }

    render() {
        return (
            <KitchenLibraryTemplate fullwidth={true} {...this.props}>
                <div className="row">
                    <div className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    id="title" data-parent="recipe" data-name="title"
                                    type="text"
                                    className="validate"
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="title">Recipe Title*</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    id="prep_time" data-parent="recipe" data-name="prep_time"
                                    placeholder="HH:MM"
                                    type="text"
                                    className="validate"
                                    pattern="^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$"
                                    value={this.state.prep_time}
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="prep_time" className="active">Preparation time</label>
                            </div>
                            <div className="input-field col s6">
                                <input
                                    id="cook_time" data-parent="recipe" data-name="cook_time"
                                    placeholder="HH:MM"
                                    type="text"
                                    className="validate"
                                    pattern="^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$"
                                    value={this.state.cook_time}
                                    onChange={this.handleInputChange}
                                />
                                <label htmlFor="cook_time" className="active">Cook time</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea
                                    id="description" data-parent="recipe" data-name="description"
                                    className="materialize-textarea"
                                    value={this.state.description}
                                    onChange={this.handleInputChange}
                                ></textarea>
                                <label htmlFor="description">Description</label>
                            </div>
                        </div>
                        <div className="row">
                            <h3>Ingredients</h3>
                            {!_.isEmpty(this.state.recipe.ingredients) &&
                                _.map(this.state.recipe.ingredients,
                                    ({ key, name, quantity, unit }) => {
                                        return <IngredientItem key={key} name={name} quantity={quantity} unit={unit} />
                                    })
                            }
                            <IngredientForm
                                name={this.state.ingredientForm.name}
                                quantity={this.state.ingredientForm.quantity}
                                unit={this.state.ingredientForm.unit}
                                addIngredient={this.addIngredient}
                                onChange={this.handleInputChange}
                            />
                        </div>
                    </div>
                </div>

            </KitchenLibraryTemplate>
        )
    }
}

KitchenCreateRecipe.propTypes = {
    data: PropTypes.array,
    completeRecipe: PropTypes.func.isRequired
}

const IngredientItem = ({name, quantity, unit }) =>
    <div className="row">
        <div className="col s8">
            <input
                type="text"
                readOnly
                value={name}
            />
        </div>
        <div className="col s1">
            <input
                type="text"
                readOnly
                value={quantity}
            />
        </div>
        <div className="col s3">
            <input
                type="text"
                readOnly
                value={unit}
            />
        </div>
    </div>

const IngredientForm = ({ name, quantity, unit, onChange, addIngredient }) =>
    <div>
        <div className="row">
            <div className="input-field col s8">
                <input
                    id="ingredientName" data-parent="ingredientForm" data-name="name"
                    type="text"
                    value={name}
                    onChange={onChange}
                />
                <label htmlFor="ingredientName" className={!_.isEmpty(name) && "active"}>Name*</label>
            </div>
            <div className="input-field col s1">
                <input
                    id="ingredientQuantity" data-parent="ingredientForm" data-name="quantity"
                    type="text"
                    value={quantity}
                    onChange={onChange}
                />
                <label htmlFor="ingredientQuantity" className={!_.isEmpty(quantity) && "active"}>Quantity*</label>
            </div>
            <div className="input-field col s3">
                <input
                    id="ingredientUnit" data-parent="ingredientForm" data-name="unit"
                    type="text"
                    value={unit}
                    onChange={onChange}
                />
                <label htmlFor="ingredientUnit" className={!_.isEmpty(unit) && "active"}>Unit</label>
            </div>
        </div>
        <button className="btn waves-effect orange darken-4" name="action" onClick={addIngredient}>Add ingredient</button>
    </div>

export default KitchenCreateRecipe