import React from "react"
import { Link } from 'react-router-dom'

const KitchenLibraryActionbar = () =>
    <div className="kitchen-action-bar">
        <Link to="/user/kitchen-library/create-recipe" className="btn grey-text link"><i className="material-icons left">library_add</i> Create recipe</Link>
        <Link to="/browse-recipes" className="btn grey-text link"><i className="material-icons left">library_books</i> Browse recipes</Link>
    </div>

export default KitchenLibraryActionbar
