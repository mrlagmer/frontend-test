import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import counters from './Counters'
let devMode = false;

if (document.location.hostname == 'localhost') {
    devMode = true;
}

const loggerMiddleware = createLogger({
    predicate: (getState, action) => devMode
})

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware
)(createStore)

export default function configureStore(initialState) {
  return createStoreWithMiddleware(counters, initialState)
}
