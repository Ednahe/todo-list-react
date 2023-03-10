import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { createStore } from 'redux';
// import rootReducer from './reducers'
import store from './source/app/store';
import { Provider } from 'react-redux';

// const store = createStore(rootReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
