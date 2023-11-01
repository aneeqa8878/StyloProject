// store.js
import { createStore, combineReducers } from 'redux';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  // other reducers here
});

const store = createStore(rootReducer);

export default store;
