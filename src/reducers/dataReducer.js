
import { FETCH_RECIPES } from "../actions/types"

export default (state = "loading", action) => {
    switch (action.type) {
        case FETCH_RECIPES:
            return action.payload
        default:
            return state
    }
}