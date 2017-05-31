import reducers from './reducers';
import { createStore as _createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './middlewares/promiseMiddleware';

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const createStore = () => {
  return _createStore(
    combineReducers(
      reducers
    ),
    composeEnhancers(
      applyMiddleware(thunk),
      applyMiddleware(promiseMiddleware),
    )
  );
};

export default createStore;