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

// выводим предупреждение если хотя бы одно из полей не заполнено
// if (!name || !number) {
//   alert('Enter name and phone number!');
//   return;
// }

// добавляем каждый введенный контакт в массив (кроме тех которые там уже есть)
//   contacts.find(
//     ({ name, number }) => name === contact.name || number === contact.number,
//   )
//     ? alert('This subscriber is already in contacts')
//     : this.setState(prevState => ({
//         contacts: [contact, ...prevState.contacts],
//       }));
// };

// редюсер для контактов
// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     //  добавление
//     case actionTypes.ADD:
//       return [...state, payload];

//     // удаление
//     case actionTypes.DELETE:
//       return state.filter(contact => contact.id !== payload);

//     default:
//       return state;
//   }
// };

// фильтр
// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [phoneBookActions.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
