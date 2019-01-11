import React from "react"
import { Route, Redirect } from "react-router-dom"


export const PrivateRoute = ({ component, user,  ...rest }) => {
    return (
        <Route {...rest} render={routeProps => {
            return user !== null ? (
                renderMergedProps(component, routeProps, rest)
            ) : (
                    <Redirect to={{
                        pathname: '/login',
                        state: { from: routeProps.location }
                    }} />
                )
        }} />
    )
}

export const PropsRoute = ({ component, ...rest }) => {
    return (
        <Route {...rest} render={routeProps => {
            return renderMergedProps(component, routeProps, rest)
        }} />
    )
}


const renderMergedProps = (component, ...rest) => {
    const finalProps = Object.assign({}, ...rest)
    return (
        React.createElement(component, finalProps)
    )
}