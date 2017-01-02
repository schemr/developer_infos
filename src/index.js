import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import App from './containers/App';
import './styles/index.css';
import Login from './components/Login'
import NotFound from './components/NotFound'
import CardList from './components/CardList'
import { store, history } from './store/global'


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={CardList}/>
        <Route path="/login" component={Login}/>
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
