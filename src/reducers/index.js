
import { combineReducers } from "redux"

import data from "./dataReducer"
import user from "./userReducer"
import recipeIngredient from "./recipeIngredientReducer"

export default combineReducers({
    data,
    user,
    recipeIngredient
})