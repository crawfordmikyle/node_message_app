import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './MainPage/App';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory'

//Import Reducers
import teachersReducer from './ReduxReducers/teachersReducer'
//Import Reducers End 
const middleware = [thunk]; 
const rootReducer = combineReducers({
  teachersReducer,
});
const history = createHistory();

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>npm</Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
