import { CHANGE_VIDEOS_PAGE, GET_VIDEOS_SUCCESS } from '../actions/videosAction.ts'

const initialState = {
  videos: [],
  page: 1,
  pageSize: 6
}

export default (state = {...initialState}, action) => {
  switch (action.type) {
    case CHANGE_VIDEOS_PAGE:
      return { ...state, page: action.pageNumber }
    case GET_VIDEOS_SUCCESS:
      return { ...state, videos: action.videos }
    default:
      return state
  }
}

