import { createStore, applyMiddleware }  from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootreducer from './reducers'; 

const initialstate = {};
// const middleware1 = [thunk];
const middleware = [thunk];

const store = createStore(
			rootreducer, 
			initialstate, 
			applyMiddleware(thunk)
			// applyMiddleware(...middleware)
    );

export default store;