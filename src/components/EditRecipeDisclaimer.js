import React, { Component } from 'react'


class EditRecipeDisclaimer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            opened: false
        }

        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
    }

    open() {
        this.setState(() => ({
            opened: true
        }))
    }

    close() {
        this.setState(() => ({
            opened: false
        }))
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 center-align">
                    {this.state.opened && <a onClick={this.close}>Close disclaimer</a>}
                    {!this.state.opened && <a onClick={this.open}>Read disclaimer</a>}
                </div>
                {this.state.opened &&
                    <div className="col s12">
                        <p>
                            Disclaimer here!!
                        </p>
                    </div>
                }
            </div>)
    }
}
export default EditRecipeDisclaimer