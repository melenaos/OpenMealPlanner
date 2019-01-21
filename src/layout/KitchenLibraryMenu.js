import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from 'prop-types'
import M from "materialize-css/dist/js/materialize.min.js"

import { signOut } from '../actions'
import { NavLink, Link } from 'react-router-dom'

const selectedMenu = {
    backgroundColor: "white",
    color: "slategray"
}
class KitchenLibraryMenu extends Component {
   
    componentDidMount() {
        var elem = document.querySelector(".sidenav")
         M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        })
    }

    render() {
        // Add className="sidenav-close" to every link that change page.
        // Materialize sidenav creates an overlay outside of #root and thus React-Route doesn't removes it
        //  when rerenders the page.
        // The fix is to close the sidenav when a page changes so the addon closes the overlay and NavLink change the page
        return (
            <ul id="kitchen-menu-sidebar" className={"sidenav kitchen-menu orange darken-3 " + (this.props.fullwidth ? "" : "sidenav-fixed")} >

                <li><a href="#Kitchen" className="header">Kitchen library</a></li>
                <li className="sidenav-close"><NavLink activeStyle={selectedMenu} to="/user/kitchen-library/all-recipes">All recipes</NavLink></li>
                <li className="sidenav-close"><NavLink activeStyle={selectedMenu} to="/user/kitchen-library/my-recipes">My recipes</NavLink></li>
                <li className="sidenav-close"><NavLink activeStyle={selectedMenu} to="/user/kitchen-library/meal-planning">Meal planning</NavLink></li>
                <li><div className="divider"></div></li>
                <li className="sidenav-close"><NavLink activeStyle={selectedMenu} to="/user/settings">Settings</NavLink></li>
                <li className="sidenav-close"><Link to="/login" onClick={this.props.signOut}>Logout</Link></li>
            </ul>)
    }
}

KitchenLibraryMenu.propTypes = {
    fullwidth: PropTypes.bool,
    signOut: PropTypes.func.isRequired
}

export default connect(null, { signOut })(KitchenLibraryMenu)


//<li><SearchLibrary searchValue="" onSearchChange={searchChange} /></li>
//const SearchLibrary = (searchValue, onSearchChange) =>
//    <form action="" className="row col">
//        <input 
//            placeholder="Search library" type="text"
//            className="browser-default search-field"
//            value={searchValue}
//            onChange={onSearchChange}
//            autoComplete="off"/>
//    </form>



