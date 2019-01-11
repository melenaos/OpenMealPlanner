import React from "react"
import { Link } from 'react-router-dom'

const Header = ({ user, signOut }) =>
    <div className="navbar-fixed">
        <nav className="light-blue lighten-1" role="navigation">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo center">Logo</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li>{user && user.displayName}</li>
                    <li>{user === null ?
                        <Link to="login">Log-in</Link> :
                        <button onClick={signOut}>Log-out</button>}</li>
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

export default Header
