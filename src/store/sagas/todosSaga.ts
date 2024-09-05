import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_TODOS_FETCH, GET_TODOS_SUCCESS } from '../actions/todosAction.ts'

function getTodosFetch() {
  return fetch('https://jsonplaceholder.typicode.com/todos')
    .then(resp => {
      const res = resp.json()
      console.debug('res', res)
      return res
    })
}

function* workGetTodosFetch() {
  const todos = yield call(getTodosFetch)
  yield put({ type: GET_TODOS_SUCCESS, todos })
}

export default function * () {
  yield takeEvery(GET_TODOS_FETCH, workGetTodosFetch)
}
