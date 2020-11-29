import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import TodoList from './components/TodoList';

import Home from './components/Home';
import News from './components/News';
import NewsSearch from './components/NewsSearch';

import Wiki from './components/Wiki';
import WikiResults from './components/WikiResults';

import Navi from './components/Navi';

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import { incrementCounter } from './actions/index';
import counter from './reducers/index';
import './index.css';

import { HashRouter, Route } from "react-router-dom";

let store = createStore(counter, applyMiddleware(thunkMiddleware));
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
    <div>
      <Navi />
      <Route exact={true} path="/" component={Home} />
      <Route path="/news" component={News} />
      <Route path="/newssearch" component={NewsSearch} />

      <Route path="/click" component={App} />
      <Route path="/todo" component={TodoList} />

      <Route path="/wiki" component={Wiki} />
      <Route path="/wiki-results/:search" component={WikiResults} />

    </div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);