import { combineReducers } from 'redux';
import actionTypes from './phoneBook-types';

// редюсер для контактов
const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [...state, payload];

    case '':
      return;

    default:
      return state;
  }
};

const filter = (state = '', action) => {
  return state;
};

export default combineReducers({
  contacts,
  filter,
});
