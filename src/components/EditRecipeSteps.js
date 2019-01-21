import React, { Component } from "react"
import PropTypes from 'prop-types'
import _ from "lodash"

import '../css/EditRecipe.css'


class EditRecipeSteps extends Component {
    constructor(props) {
        super(props)

        this.state = {
            steps: props.steps || []
        }

        this.handleAddStep = this.handleAddStep.bind(this)
        this.handleRemoveStep = this.handleRemoveStep.bind(this)
        this.handleStepChange = this.handleStepChange.bind(this)
    }


    handleAddStep(step, callback) {
        step.id = new Date().getTime() + "_" + Math.random() * 9999
        this.setState(
            prevState => ({
                steps: [...prevState.steps, step]
            }),
            () => {
                this.props.onStepsChange(this.state.steps)
                callback()
            }
        )
    }

    handleRemoveStep(event) {
        let id = event.target.getAttribute('data-id')
        this.setState(
            prevState => ({
                steps: prevState.steps
                    .filter((item) => item.id !== id)
            }),
            () => this.props.onStepsChange(this.state.ingredients)
        )
    }

    handleStepChange(event) {
        const id = event.target.getAttribute('data-id')
        const name = event.target.getAttribute('data-name')
        const value = event.target.value

        this.setState(
            prevState => ({
                steps: prevState.steps.map((step, index, arr) => {
                    if (arr[index].id === id) {
                        let obj = {}
                        obj[name] = value
                        return Object.assign({}, step, obj)
                    }
                    return step
                })
            }),
            () => this.props.onStepsChange(this.state.steps)
        )


    }

    render() {
        return (
            <div className="row">
                <h2 className="kitchen-lib-title">Steps
                    {this.state.steps.length > 0 &&
                        <sup>({this.state.steps.length})</sup>}
                </h2>
                {this.state.steps.length > 0 &&
                    this.state.steps.map(
                        (step) => {
                            return <RecipeStepItem
                                key={step.id} {...step}
                                onRemoveStep={this.handleRemoveStep}
                                onStepChange={this.handleStepChange}
                            />
                        })
                }
                <RecipeStepForm
                    onAddRecipeStep={this.handleAddStep}
                />
            </div>
        )
    }
}

EditRecipeSteps.propTypes = {
    steps: PropTypes.array,
    onStepsChange: PropTypes.func.isRequired
}


const RecipeStepItem = ({ id, title, onRemoveStep, onStepChange }) =>
    <div className="recipe-item">
        <div className="step-title">
            <input
                data-id={id}
                data-name="title"
                type="text"
                onChange={onStepChange}
                value={title}
            />
        </div>


        <button className="waves-effect waves-teal btn-flat remove-recipe-item"
            type="button" data-id={id}
            onClick={onRemoveStep}
        >
            <i className="material-icons">remove_circle_outline</i>
        </button>

    </div>

RecipeStepItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    onRemoveStep: PropTypes.func.isRequired,
    onStepChange: PropTypes.func.isRequired
}

class RecipeStepForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.addStep = this.addStep.bind(this)
    }
    handleInputChange(event) {
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value
        const name = target.getAttribute('data-name')

        let obj = Object.assign({}, this.state, { [name]: value })
        this.setState(obj)
    }

    addStep(event) {
        event.preventDefault()
        if (!_.isEmpty(this.state.title)) {
            this.props.onAddRecipeStep(this.state,
                () => {
                    this.setState({
                        title: ""
                    })
                    this.titleInput.focus()
                }
            )
        }
    }

    render() {
        return (
            <form onSubmit={this.addStep}>
                <div className="recipe-item">
                    <div className="input-field ingr-name">
                        <input
                            id="stepTitle" data-name="title"
                            type="text"
                            ref={(input) => { this.titleInput = input }}
                            value={this.state.title}
                            onChange={this.handleInputChange}
                        />
                        <label htmlFor="stepTitle" className={!_.isEmpty(this.state.title) && "active"}>Title*</label>
                    </div>
                </div>
                <button className="btn waves-effect orange darken-4" name="action" type="submit">Add step</button>
            </form>
        )
    }
}

RecipeStepForm.propTypes = {
    onAddRecipeStep: PropTypes.func.isRequired
}


export default EditRecipeSteps