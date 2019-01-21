import { ADD_RECIPE_INGREDIENT,	REMOVE_RECIPE_INGREDIENT, UPDATE_RECIPE_INGREDIENT} from "../actions/types"

export default(state = [], action)=> {
	switch (action.type) {
		case ADD_RECIPE_INGREDIENT:
			return state.concat([action.obj])
		case REMOVE_RECIPE_INGREDIENT:{
			let index = state.indexOf(action.obj)
			state.splice(index, 1)
			return state
		}
		case UPDATE_RECIPE_INGREDIENT:{
			return state.map((todo, index, arr) => {
				if (arr[index].id.toString() === action.obj.id) {
					let obj = {}
					obj[action.obj.name] = action.obj.value
					return Object.assign({}, todo, obj)
				}
				return todo
			})
		}
		default:
			return state
	}
}