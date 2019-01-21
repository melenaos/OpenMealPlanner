import React from "react"
import PropTypes from 'prop-types'

const EditRecipeInformation = ({
    title, prep_time, cook_time, description,
    onInputChange}) =>
    <div>
        <div className="row">
            <div className="input-field col s12">
                <input
                    id="title" data-name="title"
                    type="text"
                    className="validate"
                    value={title}
                    onChange={onInputChange}
                />
                <label htmlFor="title">Recipe Title*</label>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s6">
                <input
                    id="prep_time" data-name="prep_time"
                    placeholder="HH:MM"
                    type="text"
                    className="validate"
                    pattern="^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$"
                    value={prep_time}
                    onChange={onInputChange}
                />
                <label htmlFor="prep_time" className="active">Preparation time</label>
            </div>
            <div className="input-field col s6">
                <input
                    id="cook_time" data-name="cook_time"
                    placeholder="HH:MM"
                    type="text"
                    className="validate"
                    pattern="^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$"
                    value={cook_time}
                    onChange={onInputChange}
                />
                <label htmlFor="cook_time" className="active">Cook time</label>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s12">
                <textarea
                    id="description" data-name="description"
                    className="materialize-textarea"
                    value={description}
                    onChange={onInputChange}>
                </textarea>
                <label htmlFor="description">Description</label>
            </div>
        </div>
    </div>

EditRecipeInformation.propTypes = {
    title: PropTypes.string,
    prep_time: PropTypes.string,
    cook_time: PropTypes.string,
    description: PropTypes.string,
    onInputChange: PropTypes.func.isRequired
}

export default EditRecipeInformation