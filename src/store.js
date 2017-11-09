import {createStore,combineReducers,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import promise from 'redux-promise-middleware'
import homeReducer from './reducer/homeReducer'


export default createStore(
    combineReducers({
    	homeReducer
  	}),
    {},
    applyMiddleware(promise())
)
