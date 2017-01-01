import { createStore, combineReducers, applyMiddleware } from 'redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { browserHistory } from 'react-router'
import * as articleReducers from '../reducers/Article'
import  thunk from 'redux-thunk'

const reducer = combineReducers({
  ...articleReducers,
  routing: routerReducer
})

export const store = createStore(
  reducer,
  composeWithDevTools(
  applyMiddleware(thunk)
  )
)

export const history = syncHistoryWithStore(browserHistory, store)
