import React, { Component } from "react"
import PropTypes from 'prop-types'

class EditRecipeInformation extends Component {

    componentDidMount() {
        this.recipeTitleInput.focus()
    }

    render() {

        return (
            <div>
                <div className="row">
                    <div className="input-field col s12">
                        <input
                            id="title" data-name="title"
                            ref={(input) => { this.recipeTitleInput = input }}
                            type="text"
                            className="validate"
                            value={this.props.title}
                            onChange={this.props.onInputChange}
                        />
                        <label htmlFor="title">Recipe Title*</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col m6">
                        <select
                            data-name="servings"
                            value={this.props.servings}
                            onChange={this.props.onInputChange}
                        >
                            {[...Array(60).keys()].slice(1).map(
                                (i) => <option key={i} value={i}>{i}</option>
                            )}

                        </select>
                        <label>Servings</label>
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
                            value={this.props.prep_time}
                            onChange={this.props.onInputChange}
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
                            value={this.props.cook_time}
                            onChange={this.props.onInputChange}
                        />
                        <label htmlFor="cook_time" className="active">Cook time</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea
                            id="description" data-name="description"
                            className="materialize-textarea"
                            value={this.props.description}
                            onChange={this.props.onInputChange}>
                        </textarea>
                        <label htmlFor="description">Description</label>
                    </div>
                </div>
            </div>)
    }
}

EditRecipeInformation.propTypes = {
    title: PropTypes.string,
    servings: PropTypes.string,
    prep_time: PropTypes.string,
    cook_time: PropTypes.string,
    description: PropTypes.string,
    onInputChange: PropTypes.func.isRequired
}

export default EditRecipeInformation