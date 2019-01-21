import { recipesRef, authRef, provider } from "../config/firebase"
import { FETCH_RECIPES, FETCH_USER, ADD_RECIPE_INGREDIENT } from "./types"


export const addRecipe = (newRecipe, userId) => async dispatch => {
    recipesRef
        .child(userId)
        .push()
        .set(newRecipe)
}

export const deleteRecipe = (deleteRecipeId, uid) => async dispatch => {
    recipesRef
        .child(uid)
        .child(deleteRecipeId)
        .remove()
}

export const fetchRecipes = uid => async dispatch => {
    recipesRef.child(uid).on("value", snapshot => {
        dispatch({
            type: FETCH_RECIPES,
            payload: snapshot.val()
        })
    })
}

export const fetchUser = () => dispatch => {
    authRef.onAuthStateChanged(user => {
        if (user) {
            dispatch({
                type: FETCH_USER,
                payload: user
            })
        } else {
            dispatch({
                type: FETCH_USER,
                payload: null
            })
        }
    })
}

export const signIn = () => dispatch => {
    authRef
        .signInWithPopup(provider)
        .then(result => { })
        .catch(error => {
            console.log(error)
        })
}

export const signOut = () => dispatch => {
    authRef
        .signOut()
        .then(() => {
            // Sign-out successful.
        })
        .catch(error => {
            console.log(error)
        })
}

export const addRecipeIngredient = () => async dispatch => {
    dispatch({ type: ADD_RECIPE_INGREDIENT})
}