import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import videosReducer from './store/reducers/videosReducer.ts';
import videosSaga from './store/sagas/videosSaga.ts';
//App
import App from './App.tsx';
import './index.css';

//redux store setup
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  videos: videosReducer,
});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(videosSaga);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
