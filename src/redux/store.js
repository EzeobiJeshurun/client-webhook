import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
//helps in handling dispatch
import thunk from 'redux-thunk';


//import uiReducer from './reducers/uiReducer';
//import userReducer from './reducers/userReducer';


import dataReducer from './reducers/dataReducer';

const initialState ={};
const middleware = [thunk];

const reducers = combineReducers({
    //user: userReducer, 
    data: dataReducer,
   // UI: uiReducer
});

//const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
const store = createStore(
    reducers, 
    initialState, 
    compose(
        applyMiddleware(...middleware)
    
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        ));

export default store;        

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()   the original, but did't work on mobile when
//placed after applyMiddleware(...middleware)