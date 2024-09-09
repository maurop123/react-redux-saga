import { GET_MOVIES_SUCCESS } from '../actions/moviesAction.ts'

const initialState = {
  movies: [],
  page: 1,
  pageSize: 10
}

export default (state = {...initialState}, action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      console.log('action', action)
      return { ...state, movies: action.movies }
    default:
      return state
  }
}
