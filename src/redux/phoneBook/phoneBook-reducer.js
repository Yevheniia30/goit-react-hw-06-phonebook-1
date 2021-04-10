import { combineReducers } from 'redux';
import actionTypes from './phoneBook-types';

// редюсер для контактов
const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      //   return [...state, payload];
      return state.find(
        contact => payload === contact.name || payload === contact.number,
      )
        ? alert('This subscriber is already in contacts')
        : [...state, payload];

    case actionTypes.DELETE:
      return state.filter(contact => contact.id !== payload);

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
