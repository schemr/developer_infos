import { createStore, combineReducers, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { browserHistory } from 'react-router'
import  thunk from 'redux-thunk'

const reducer = combineReducers({
  routing: routerReducer
})

export const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export const history = syncHistoryWithStore(browserHistory, store)
