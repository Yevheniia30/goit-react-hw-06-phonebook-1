import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import phoneBookActions from './phoneBook-actions';
// import actionTypes from './phoneBook-types';

console.log(phoneBookActions.addContact.type);

// редюсер на тулкит
const contacts = createReducer([], {
  // добавление
  [phoneBookActions.addContact]: (state, { payload }) =>
    state.find(
      ({ name, number }) => name === payload.name || number === payload.number,
    )
      ? alert('This subscriber is already in contacts')
      : [...state, payload],

  // удаление
  [phoneBookActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// фильтр
const filter = createReducer('', {
  [phoneBookActions.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
