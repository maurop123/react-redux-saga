import { GET_TODOS_SUCCESS } from '../actions/todoAction.ts'

export default (state = { todos: [] }, action) => {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return { ...state, todos: action.todos }
    default:
      return state
  }
}
