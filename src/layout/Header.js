import React from "react"
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { Link } from 'react-router-dom'

const Header = ({ user, kitchenLibraryOpen }) =>
    <div className="navbar-fixed">
        <nav className="white  grey-text text-darken-1" role="navigation">
            <div className="nav-wrapper">
                <a href="#logo" className="brand-logo center">Logo</a>
                <ul id="nav-mobile" className="left">
                    <li>{user === null ?
                        <Link to="/login" className="btn link grey-text text-darken-1">Log-in</Link> :
                        kitchenLibraryOpen  ?
                            <button href="#" data-target="kitchen-menu-sidebar" className="btn link orange-text text-darken-4 sidenav-trigger"><i className="material-icons left">restaurant_menu</i>My kitchen</button> :
                            <Link to="/user/kitchen-library/all-recipes" className="btn link orange-text text-darken-4"><i className="material-icons left">restaurant_menu</i>My kitchen</Link>
                    }
                    </li>

                </ul>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>Follow</li>
                    <li><a href="badges.html">FB</a></li>
                    <li><a href="badges.html">INST</a></li>
                    <li><a href="collapsible.html">Search</a></li>
                </ul>
            </div>
        </nav>
    </div>

Header.propTypes = {
    user: PropTypes.object,
    kitchenLibraryOpen: PropTypes.bool
}

function mapStateToProps({ user }) {
    return { user }
}
export default connect(mapStateToProps,null)(Header)
