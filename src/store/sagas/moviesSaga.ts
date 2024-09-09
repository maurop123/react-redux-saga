import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_MOVIES_FETCH, GET_MOVIES_SUCCESS } from '../actions/moviesAction.ts'

function getMoviesFetch() {
  return fetch('https://dummyapi.online/api/movies')
    .then(resp => resp.json())
}

function* workGetMoviesFetch() {
  const movies = yield call(getMoviesFetch)
  console.debug({ movies })
  yield put({ type: GET_MOVIES_SUCCESS, movies })
}

export default function * () {
  yield takeLatest(GET_MOVIES_FETCH, workGetMoviesFetch)
}
