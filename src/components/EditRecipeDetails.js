import React, { Component } from "react"
import PropTypes from 'prop-types'
import { WithContext as ReactTags } from 'react-tag-input'

import * as Collections from '../data/Collections.js'
import M from "materialize-css/dist/js/materialize.min.js"
import '../css/react-tags.css'

class EditRecipeDetails extends Component {
    constructor(props) {
        super(props)

        this.onAddCuisine = this.onAddCuisine.bind(this)
        this.onDeleteCuisine = this.onDeleteCuisine.bind(this)
        this.onAddMainIngredient = this.onAddMainIngredient.bind(this)
        this.onDeleteMainIngredient = this.onDeleteMainIngredient.bind(this)
        this.onAddMeal = this.onAddMeal.bind(this)
        this.onDeleteMeal = this.onDeleteMeal.bind(this)
        this.onAddDietary = this.onAddDietary.bind(this)
        this.onDeleteDietary = this.onDeleteDietary.bind(this)
    }
    componentDidMount() {
        //initialize materialize select
        M.FormSelect.init(document.querySelectorAll('select'))
    }

    onAddCuisine(tag) {this.props.onAdd(tag, "cuisine")}
    onDeleteCuisine(tag) { this.props.onDelete(tag, "cuisine") }
    onAddMainIngredient(tag) { this.props.onAdd(tag, "main_ingredient") }
    onDeleteMainIngredient(tag) { this.props.onDelete(tag, "main_ingredient") }
    onAddMeal(tag) { this.props.onAdd(tag, "meal") }
    onDeleteMeal(tag) { this.props.onDelete(tag, "meal") }
    onAddDietary(tag) { this.props.onAdd(tag, "dietary") }
    onDeleteDietary(tag) { this.props.onDelete(tag, "dietary") }


    render() {
        return (
            <div className="row">
                <h2 className="kitchen-lib-title">Details</h2>
                <div className="row">
                    <RecipeDetailItem sizeClass="s12 l6"
                        name="cuisine"
                        title="Cuisine"
                        tags={this.props.cuisine}
                        suggestions={Collections.cuisines}
                        onAdd={this.onAddCuisine}
                        onDelete={this.onDeleteCuisine}
                    />
                    <RecipeDetailItem sizeClass="s12 l6"
                        name="main_ingredient"
                        title="Main ingredient"
                        tags={this.props.main_ingredient}
                        suggestions={Collections.mainIngredients}
                        onAdd={this.onAddMainIngredient}
                        onDelete={this.onDeleteMainIngredient}
                    />
                    <RecipeDetailItem sizeClass="s12 l6"
                        name="meal"
                        title="Meal"
                        tags={this.props.meal}
                        suggestions={Collections.meals}
                        onAdd={this.onAddMeal}
                        onDelete={this.onDeleteMeal}
                    />
                    <RecipeDetailItem sizeClass="s12 l6"
                        name="dietary"
                        title="Dietary"
                        tags={this.props.dietary}
                        suggestions={Collections.dietaries}
                        onAdd={this.onAddDietary}
                        onDelete={this.onDeleteDietary}
                    />
                </div>
            </div>
        )
    }

}

EditRecipeDetails.propTypes = {
    cuisine: PropTypes.array,
    main_ingredient: PropTypes.array,
    meal: PropTypes.array,
    dietary: PropTypes.array,

    onDelete: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
}

var RecipeDetailItem = ({ name, title, tags, suggestions, onAdd, onDelete, sizeClass }) =>
    <div className={sizeClass + " col input-field"}>
        <ReactTags
            id={name}
            allowDragDrop={false}
            data-name={name}
            tags={tags}
            placeholder="Add new"
            suggestions={suggestions}
            handleAddition={onAdd}
            handleDelete={onDelete}
            autofocus={false}
            classNames={{
                tags: 'chips',
                tagInput: 'input',
                tagInputField: 'inputField',
                selected: 'selectedClass',
                tag: 'chip',
                remove: 'material-icons',
            }}
        />
        <label className="active">{title}</label>
    </div>

export default EditRecipeDetails