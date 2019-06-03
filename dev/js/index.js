import 'babel-polyfill';
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import App from './components/App'

const store = createStore(allReducers);

class First extends React.Component{
  render(){
    return (
      <Provider store = {store}>
        <App />
      </Provider>
    );
  }
}

//ReactDOM.render(<h1>Redux</h1>, document.getElementById('root'));
ReactDOM.render(<First />, document.getElementById('root'));
