import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import songReducer from './Features/songSlice';
import songSaga from './Features/songSaga';
import App from './App';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { songs: songReducer },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(songSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
export default store;