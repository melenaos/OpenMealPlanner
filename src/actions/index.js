import { recipesRef } from "../config/firebase"

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