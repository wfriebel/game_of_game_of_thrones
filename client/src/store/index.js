import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/authReducer'
import charactersReducer from '../reducers/charactersReducer'
import actionsReducer from '../reducers/actionsReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        auth: authReducer,
        characters: charactersReducer,
        actions: actionsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);

export default store;