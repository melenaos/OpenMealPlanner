import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const EditRecipeVisibility = ({ publicRecipe, onInputChange }) =>
    <div className="row  text-center">
        <h2 className="kitchen-lib-title">Share with community</h2>
        <span className="orange-text text-darken-4">Did you create this recipe?</span>
        &nbsp;
        <Link to="/recipe-sharing-disclaimer" target="_blank" className="grey-text">Read sharing disclaimer</Link>
        <p>
            <label>
                <input
                    data-name="publicRecipe"
                    className="with-gap"
                    name="PublicRecipeGroup"
                    type="radio"
                    value="true"
                    onChange={onInputChange}
                    checked={publicRecipe === "true"}
                />
                <span>Yes</span>
            </label>
        </p>
        <p>
            <label>
                <input
                    data-name="publicRecipe"
                    className="with-gap"
                    name="PublicRecipeGroup"
                    type="radio"
                    value="false"
                    onChange={onInputChange}
                    checked={publicRecipe !== "true"}
                />
                <span>No</span>
            </label>
        </p>
        <p>
            <span>Please turn sharing off if this recipe comes from any published source (magazines, blog, cookbook, etc). </span>
        </p>
    </div>

EditRecipeVisibility.propTypes = {
    publicRecipe: PropTypes.string,
    onInputChange: PropTypes.func.isRequired
}


export default EditRecipeVisibility