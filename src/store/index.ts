import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import todosReducer from './reducers/todosReducer.ts'
import todosSaga from './sagas/todosSaga.ts'

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(todosSaga)

export default store

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
