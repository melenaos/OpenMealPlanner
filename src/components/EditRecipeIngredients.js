import React, { Component } from "react"
import PropTypes from 'prop-types'
import _ from "lodash"
import M from "materialize-css/dist/js/materialize.min.js"

import '../css/EditRecipe.css'

class EditRecipeIngredients extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ingredients: props.ingredients || []
        }

        this.handleAddIngredient = this.handleAddIngredient.bind(this)
        this.handleRemoveIngredient = this.handleRemoveIngredient.bind(this)
        this.handleIngredientChange = this.handleIngredientChange.bind(this)
    }

    componentDidMount() {
        //initialize materialize select
        M.FormSelect.init(document.querySelectorAll('select'))
    }
    componentDidUpdate() {
        //initialize materialize select
        M.FormSelect.init(document.querySelectorAll('select'))
    }

    handleAddIngredient(ingredient, callback) {
        ingredient.id = new Date().getTime() + "_" + Math.random() * 9999
        this.setState(
            prevState => ({
                ingredients: [...prevState.ingredients, ingredient]
            }),
            () => {
                this.props.onIngredientsChange(this.state.ingredients)
                callback()
            }
        )
    }

    handleRemoveIngredient(event) {
        let id = event.target.getAttribute('data-id')
        this.setState(
            prevState => ({
                ingredients: prevState.ingredients
                    .filter((item) => item.id !== id)
            }),
            () => this.props.onIngredientsChange(this.state.ingredients)
        )
    }

    handleIngredientChange(event) {
        const id = event.target.getAttribute('data-id')
        const name = event.target.getAttribute('data-name')
        const value = event.target.value

        this.setState(
            prevState => ({
                ingredients: prevState.ingredients.map((ingredient, index, arr) => {
                    if (arr[index].id === id) {
                        let obj = {}
                        obj[name] = value
                        return Object.assign({}, ingredient, obj)
                    }
                    return ingredient
                })
            }),
            () => this.props.onIngredientsChange(this.state.ingredients)
        )


    }

    render() {
        return (
            <div className="row">
                <h2 className="kitchen-lib-title">Ingredients
                    {this.state.ingredients.length > 0 && 
                        <sup>({this.state.ingredients.length})</sup>}
                </h2>
                {this.state.ingredients.length > 0 &&
                    this.state.ingredients.map(
                        (ingredient) => {
                            return <RecipeIngredientItem
                                key={ingredient.id} {...ingredient}
                                onRemoveIngredient={this.handleRemoveIngredient}
                                onIngredientChange={this.handleIngredientChange}
                            />
                        })
                }
                <RecipeIngredientForm
                    onAddRecipeIngredient={this.handleAddIngredient}
                />
            </div>
        )
    }
}

EditRecipeIngredients.propTypes = {
    ingredients: PropTypes.array,
    onIngredientsChange: PropTypes.func.isRequired
}



const RecipeIngredientItem = ({ id, name, quantity, unit, onRemoveIngredient, onIngredientChange }) =>
    <div className="recipe-item">
        <div className="ingr-name">
            <input
                data-id={id}
                data-name="name"
                type="text"
                onChange={onIngredientChange}
                value={name}
            />
        </div>
        <div className="ingr-qty">
            <input
                data-id={id}
                data-name="quantity"
                type="text"
                onChange={onIngredientChange}
                value={quantity}
            />
        </div>
        <div className="ingr-unit">
            <select
                data-id={id}
                data-name="unit"
                value={unit}
                onChange={onIngredientChange}
            >
                <option value="tsp">Teaspoon</option>
                <option value="tbsp">Tablespoon</option>
                <option value="c">Cup</option>
                <option value="ml">Milliliter</option>
                <option value="l">Liter</option>
                <option value="lb">Pound</option>
                <option value="oz">Ounce (Oz)</option>
                <option value="mg">Milligram</option>
                <option value="kg">Kilogram</option>
                <option value="pt">Pint</option>
                <option value="q">Quart</option>
                <option value="g">Gallon</option>
            </select>
        </div>

        <button className="waves-effect waves-teal btn-flat remove-recipe-item"
            type="button" data-id={id}
            onClick={onRemoveIngredient}
        >
            <i className="material-icons">remove_circle_outline</i>
        </button>

    </div>

RecipeIngredientItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    quantity: PropTypes.string,
    unit: PropTypes.string,
    onRemoveIngredient: PropTypes.func.isRequired,
    onIngredientChange: PropTypes.func.isRequired
}

class RecipeIngredientForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",     // Required
            quantity: "", // Required
            unit: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.addIngredient = this.addIngredient.bind(this)
    }
    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.getAttribute('data-name')

        let obj = Object.assign({}, this.state, { [name]: value })
        this.setState(obj)
    }

    addIngredient(event) {
        event.preventDefault()
        if (!_.isEmpty(this.state.name) &&
            !_.isEmpty(this.state.quantity)) {
            this.props.onAddRecipeIngredient(this.state,
                () => {
                    this.setState({
                        name: "",     // Required
                        quantity: "", // Required
                        unit: ""
                    })
                    this.nameInput.focus()
                }
            )
        }
    }

    render() {
        return (
            <form onSubmit={this.addIngredient}>
                <div className="recipe-item">
                    <div className="input-field ingr-name">
                        <input
                            id="ingredientName" data-name="name"
                            type="text"
                            ref={(input) => { this.nameInput = input }}
                            value={this.state.name}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="ingredientName" className={!_.isEmpty(this.state.name) && "active"}>Name*</label>
                    </div>
                    <div className="input-field ingr-qty">
                        <input
                            id="ingredientQuantity" data-name="quantity"
                            type="text"
                            value={this.state.quantity}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="ingredientQuantity" className={!_.isEmpty(this.state.quantity) && "active"}>Qty*</label>
                    </div>
                    <div className="input-field ingr-unit">
                        <select
                            id="ingredientUnit"
                            data-name="unit"
                            value={this.state.unit}
                            onChange={this.handleInputChange}
                        >
                            <option value="tsp">Teaspoon</option>
                            <option value="tbsp">Tablespoon</option>
                            <option value="c">Cup</option>
                            <option value="ml">Milliliter</option>
                            <option value="l">Liter</option>
                            <option value="lb">Pound</option>
                            <option value="oz">Ounce (Oz)</option>
                            <option value="mg">Milligram</option>
                            <option value="kg">Kilogram</option>
                            <option value="pt">Pint</option>
                            <option value="q">Quart</option>
                            <option value="g">Gallon</option>
                        </select>
                        <label>Unit</label>
                    </div>
                </div>
                <button className="btn waves-effect orange darken-4" name="action" type="submit">Add ingredient</button>
            </form>
        )
    }
}

RecipeIngredientForm.propTypes = {
    onAddRecipeIngredient: PropTypes.func.isRequired
}


export default EditRecipeIngredients