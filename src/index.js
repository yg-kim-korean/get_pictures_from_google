import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import rootReducer from './module';
import reportWebVitals from './reportWebVitals';
import reduxThunk from 'redux-thunk'
import { Provider } from 'react-redux';
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(reduxThunk))
  )
ReactDOM.render(
  
  <Provider store = {store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
