import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { mergeStyles } from '@fluentui/react';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Inject some global styles
mergeStyles({
   ':global(body,html,#root)': {
      margin: 0,
      padding: 0,
      height: '100vh',
   },
});

let number = 'korea';

const changRedux = (state?: string, action?: any) => {
   state = number;
   if (action.type === 'english') {
      number = 'english';
      return number;
   } else {
      number = 'korea';
      return number;
   }
};

let store = createStore(changRedux);

ReactDOM.render(
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
