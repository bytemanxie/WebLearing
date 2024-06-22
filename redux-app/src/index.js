import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {combineReducers, configureStore} from '@reduxjs/toolkit'; 
import {Provider} from 'react-redux';
import App from './components/app';

const f1 = (state = 10, action) => {
  switch (action.type) {
    case 'add':
      return state + action.val;
    case 'sub':
      return state - action.val;
    default:
      return state;
  }
}

const f2 = (state = "byteman", action) => {
  switch(action.type) {
    case 'concat':
      return state + action.val;
    default:
      return state;
  }
}

const f3 = combineReducers({
  number: f1,
  string: f2,
})

const store = configureStore({
  reducer: f3
});

store.subscribe(() => {
  console.log(store.getState());
});
// store.dispatch({type: 'add', val: 5});
// store.dispatch({type: 'add', val: 5});
// store.dispatch({type: 'add', val: 5});
// store.dispatch({type: 'sub', val: 5});
// store.dispatch({type: 'sub', val: 5});
// store.dispatch({type: 'concat', val: "Hello"});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
