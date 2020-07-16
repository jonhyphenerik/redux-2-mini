import {createStore, applyMiddleware} from 'redux';
import hackerNewsReducer from './hackerNewsReducer';


export default createStore(hackerNewsReducer, applyMiddleware(promiseMiddleware));