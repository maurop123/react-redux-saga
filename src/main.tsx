import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import moviesReducer from './store/reducers/moviesReducer.ts'
import moviesSaga from './store/sagas/moviesSaga.ts'
import todoReducer from './store/reducers/todoReducer.ts'
import todoSaga from './store/sagas/todoSaga.ts'
import videosReducer from './store/reducers/videosReducer.ts'
import videosSaga from './store/sagas/videosSaga.ts'

import App from './App.tsx'
import './index.css'

//redux store setup
const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  todoReducer,
  movies: moviesReducer, 
  videos: videosReducer
})
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(todoSaga)
sagaMiddleware.run(moviesSaga)
sagaMiddleware.run(videosSaga)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
