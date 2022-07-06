import { compose, createStore, applyMiddleware } from 'redux'
import reducerUser from '../reducers/reducerUser'
import thunk from 'redux-thunk'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducerUser, composeEnhancers(applyMiddleware(thunk)))

export default store