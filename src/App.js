import React, { Component } from "react"
import * as actions from "./actions"
import RecipeList from "./components/RecipeList"
import { HashRouter, Switch, Redirect } from "react-router-dom"
import { PrivateRoute, PropsRoute } from "./infrastructure/routes"

import Login from './pages/Login'
import Home from './pages/Home'


class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            recipes: null,
            user: null
        }

        this.handleUser = this.handleUser.bind(this)
        this.handleRecipesData = this.handleRecipesData.bind(this)
        this.handleAddRecipeClick = this.handleAddRecipeClick.bind(this)
    }
    componentDidMount() {
        actions.fetchUser(this.handleUser)
        actions.fetchRecipes(this.handleRecipesData)
    }

    handleUser(user) {
        let obj = Object.assign({}, this.state, { user: user })
        this.setState(obj)
    }

    handleRecipesData(data) {
        let obj = Object.assign({}, this.state, { recipes: data })
        this.setState(obj)
    }

    handleAddRecipeClick() {
        //            
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
                        user={this.state.user}
                        signOut={actions.signOut}
                    />
                    <PropsRoute
                        path="/login"
                        component={Login}
                        user={this.state.user}
                        signIn={actions.signIn}
                    />
                    <Redirect exact from="/user/kitchen-library" to="/user/kitchen-library/all-recipes" />
                    <PrivateRoute
                        path="/user/kitchen-library/all-recipes"
                        component={RecipeList}
                        user={this.state.user}
                        addRecipe={actions.addRecipe}
                        fetchRecipes={actions.fetchRecipes}
                        completeRecipe={actions.completeRecipe}
                        data={this.state.recipes}
                    />
                </Switch>
            </HashRouter>


        )
    }
}

export default App