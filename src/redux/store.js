import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import phoneBookReducer from './phoneBook/phoneBook-reducer';

const rootReducer = combineReducers({
  phoneBook: phoneBookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
