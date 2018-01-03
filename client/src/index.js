import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom'
//Import Components
import App from './MainPage/App';
import TeachersPage from './Teachers/TeachersPage'
//Import Reducers
import teachersReducer from './ReduxReducers/teachersReducer'
//Import Reducers End 

//Set MiddleWare
const middleware = [thunk]; 

//Set Root Reducer
const rootReducer = combineReducers({
  teachersReducer,
});

//Create Store
let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
)

//Render App
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App}/>
        <Route exact path="/teachers/:id" component={TeachersPage}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)
