import React, { Component } from "react"
import { fetchUser } from "./actions"
import { HashRouter, Switch, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { PrivateRoute, PropsRoute } from "./infrastructure/routes"
import PropTypes from "prop-types"

import './css/site.css'

import Login from './pages/Login'
import Home from './pages/Home'
import KitchenAllRecipes from "./pages/KitchenAllRecipes"
import KitchenMyRecipes from "./pages/KitchenMyRecipes"
import KitchenMealPlanning from "./pages/KitchenMealPlanning"
import KitchenCreateRecipe from "./pages/KitchenCreateRecipe"



class App extends Component {
   
    componentDidMount() {
        this.props.fetchUser()
    }

    render() {
        //<Route exact path="/" render={() => (<SignIn signIn={actions.signIn} />)} />
        // {this.state.user && <AddRecipeButton onClick={this.handleAddRecipeClick} />}
        return (
            <HashRouter>
                <Switch>
                    
                    <PropsRoute exact
                        path="/"
                        component={Home}
                    />
                    <PropsRoute
                        path="/login"
                        component={Login}
                    />
                    <Redirect exact from="/user/kitchen-library" to="/user/kitchen-library/all-recipes" />
                    <PrivateRoute
                        title="All recipes"
                        path="/user/kitchen-library/all-recipes"
                        component={KitchenAllRecipes}
                    />
                    <PrivateRoute
                        title="My recipes"
                        path="/user/kitchen-library/my-recipes"
                        component={KitchenMyRecipes}
                    />
                    <PrivateRoute
                        title="Meal planning"
                        path="/user/kitchen-library/meal-planning"
                        component={KitchenMealPlanning}
                    />
                    <PrivateRoute
                        title="Create recipe"
                        path="/user/kitchen-library/create-recipe"
                        component={KitchenCreateRecipe}
                    />
                </Switch>
            </HashRouter>


        )
    }
}

App.propTypes = {
    fetchUser: PropTypes.func.isRequired
}

export default connect(null, { fetchUser })(App)