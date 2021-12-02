import {createStore, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from 'redux-devtools-extension'
import { categoryReducers } from "./reducers/catagoryReducer";

const middleware = [thunk];

const reducers = combineReducers({
    category : categoryReducers
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

export default store;