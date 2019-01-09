import React from "react"

const AddRecipeButton = (onClick) =>
    <div className="fixed-action-btn">
        <button
            onClick={onClick}
            className="btn-floating btn-large teal darken-4" 
        >
            <i className="large material-icons">add</i>
        </button>
    </div>

export default AddRecipeButton