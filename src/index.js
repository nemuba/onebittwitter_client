import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'materialize-css/dist/js/materialize.js';
import 'materialize-css/dist/css/materialize.min.css';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

const Reducers = combineReducers({
  trendings: () => ({hashtags: [["#RubyOnRails","99k"],["#ReactJs","100k"]]})
});

const Store = createStore(Reducers);

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
