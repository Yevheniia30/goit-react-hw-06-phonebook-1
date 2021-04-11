import { createAction } from '@reduxjs/toolkit';
// import actionTypes from './phoneBook-types';
import shortid from 'shortid';

// const addContact = contact => ({
//   type: actionTypes.ADD,
//   payload: {
//     id: shortid.generate(),
//     name: contact.name,
//     number: contact.number,
//   },
// });

const addContact = createAction('contacts/add', ({ name, number }) => {
  return {
    payload: {
      id: shortid.generate(),
      name,
      number,
    },
  };
});

// const deleteContact = id => ({
//   type: actionTypes.DELETE,
//   payload: id,
// });

const deleteContact = createAction('contacts/delete');

// event и прочие события в actions не передаются
// const filterContact = filter => ({
//   type: actionTypes.FILTER,
//   payload: filter,
// });

const filterContact = createAction('contacts/filter');

export default { addContact, deleteContact, filterContact };
