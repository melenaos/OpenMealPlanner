import { recipesRef, authRef, provider } from "../config/firebase"

export const addRecipe = async(newRecipe)=> {
    recipesRef.push().set(newRecipe) 
}

export const completeRecipe = async(completeRecipeId)=> { 
    recipesRef.child(completeRecipeId).remove()
}

export const fetchRecipes = (dispatch) =>  {
    recipesRef.on("value", snapshot => {
        dispatch(snapshot.val())
    })
}

export const fetchUser = (dispatch) => {
    authRef.onAuthStateChanged(user => {
        dispatch(user?user:null)
    })
}

export const signIn = (/*dispatch*/) => {
    authRef
        .signInWithPopup(provider)
        .then(() => { })
        .catch(error => {
            console.log(error)
        })
}

export const signOut = (/*dispatch*/)  => {
    authRef
        .signOut()
        .then(() => {
            // Sign-out successful.
        })
        .catch(error => {
            console.log(error)
        })
}