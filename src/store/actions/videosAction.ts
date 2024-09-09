export const CHANGE_VIDEOS_PAGE = 'CHANGE_VIDEOS_PAGE'
export const GET_VIDEOS_FETCH = 'GET_VIDEOS_FETCH'
export const GET_VIDEOS_FAIL = 'GET_VIDEOS_FAIL'
export const GET_VIDEOS_SUCCESS = 'GET_VIDEOS_SUCCESS'

export const getVideosFetch = () => ({
  type: GET_VIDEOS_FETCH
})

export const changeVideosPage = (pageNumber) => ({
  type: CHANGE_VIDEOS_PAGE,
  pageNumber
})
