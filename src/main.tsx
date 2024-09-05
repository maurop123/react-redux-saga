import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import todoReducer from './store/reducers/todoReducer.ts'
import todoSaga from './store/sagas/todoSaga.ts'

import App from './App.tsx'
import './index.css'

//redux store setup
const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({ todoReducer })
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(todoSaga)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
