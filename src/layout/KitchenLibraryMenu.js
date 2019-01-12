import React, { Component } from "react"
import M from "materialize-css/dist/js/materialize.min.js"

import { NavLink, Link } from 'react-router-dom'

const selectedMenu = {
    backgroundColor: "white",
    color: "slategray"
}
//<li><SearchLibrary searchValue="" onSearchChange={searchChange} /></li>
class KitchenLibraryMenu extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav")
        M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        })
    }

    render() {
        return (
            <ul id="kitchen-menu-sidebar" className={"sidenav kitchen-menu orange darken-3 " + (this.props.fullwidth ? "" : "sidenav-fixed")} >

                <li><a className="header">Kitchen library</a></li>
                <li><NavLink activeStyle={selectedMenu} to="/user/kitchen-library/all-recipes">All recipes</NavLink></li>
                <li><NavLink activeStyle={selectedMenu} to="/user/kitchen-library/my-recipes">My recipes</NavLink></li>
                <li><NavLink activeStyle={selectedMenu} to="/user/kitchen-library/meal-planning">Meal planning</NavLink></li>
                <li><div className="divider"></div></li>
                <li><NavLink activeStyle={selectedMenu} to="/user/settings">Settings</NavLink></li>
                <li><Link to="/login" onClick={this.props.signOut}>Logout</Link></li>
            </ul>)
    }
}
//const SearchLibrary = (searchValue, onSearchChange) =>
//    <form action="" className="row col">
//        <input 
//            placeholder="Search library" type="text"
//            className="browser-default search-field"
//            value={searchValue}
//            onChange={onSearchChange}
//            autoComplete="off"/>
//    </form>

export default KitchenLibraryMenu