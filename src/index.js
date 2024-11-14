import React from 'react';           // Ensure React is imported
import ReactDOM from 'react-dom';    // Ensure ReactDOM is imported
import App from './App';
import { Provider } from 'react-redux';
import store from './store'; // Ensure this points to the correct store file

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);