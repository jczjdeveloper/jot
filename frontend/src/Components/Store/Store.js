import { createStore, compose, combineReducers, applyMiddleware } from 'redux'; // compose is used

import {routerReducer, routerMiddleware} from 'react-router-redux';
import createHistory  from 'history/createBrowserHistory';

import thunk from 'redux-thunk';

export let initStore = () => {
  const history = createHistory()
  const historyWare = routerMiddleware(history);
  const reducer = combineReducers({

  });

  const store = createStore( reducer,     // passing all reducer-- each reducer creates as an array inside this.props
    compose(applyMiddleware(thunk, historyWare),
    window.devToolsExtension ? window.devToolsExtension() : f => f      // f is just a way to do nothing
  ) )

  return [store,history];
}
