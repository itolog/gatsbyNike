import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer/rootReducer';
import thunk from 'redux-thunk';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const enhancer = composeEnhancers(applyMiddleware(thunk));
const enhancer = applyMiddleware(thunk);

const store = createStore(reducer, enhancer);

export default store;
