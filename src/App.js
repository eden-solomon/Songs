// src/App.js
import React from 'react';
import SongList from './Components/SongList';  // Only imports SongList
import SongForm from './Components/SongForm';  // Only imports SongForm
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>Song Management App</h1>
        <SongForm />
        <SongList />
      </div>
    </Provider>
  );
};

export default App;
     


