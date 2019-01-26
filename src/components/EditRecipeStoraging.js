import React, { Component } from "react"
import PropTypes from 'prop-types'

class EditRecipeStoraging extends Component {

    render() {
        return (
            <div className="row">
                <h2 className="kitchen-lib-title">Storaging</h2>
                <div className="input-field col s12">
                    <input
                        id="refrigerate" data-name="refrigerate"
                        type="text"
                        className="validate"
                        value={this.props.refrigerate}
                        onChange={this.props.onInputChange}
                    />
                    <label htmlFor="refrigerate">Refrigerate</label>
                </div>
                <div className="input-field col s12">
                    <input
                        id="freeze" data-name="freeze"
                        type="text"
                        className="validate"
                        value={this.props.freeze}
                        onChange={this.props.onInputChange}
                    />
                    <label htmlFor="freeze">Freeze</label>
                </div>
            </div>
            )
    }
}

EditRecipeStoraging.propTypes = {
    refrigerate: PropTypes.string,
    freeze: PropTypes.string,
    onInputChange: PropTypes.func.isRequired
}

export default EditRecipeStoraging