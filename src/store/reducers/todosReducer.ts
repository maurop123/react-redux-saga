import { GET_TODOS_SUCCESS } from '../actions/todosAction.ts'
import type { GetTodosAction } from '../actions/todosAction.ts'

export default (state = { todos: [] }, action: GetTodosAction) => {
  switch (action.type) {
    case GET_TODOS_SUCCESS:
      return { ...state, todos: action.todos }
    default:
      return state
  }
}
