import actionTypes from './phoneBook-types';
import shortid from 'shortid';

const addContact = ({ name, number }) => ({
  type: actionTypes.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
  },
});

const deleteContact = id => ({
  type: actionTypes.DELETE,
  payload: id,
});

export default { addContact, deleteContact };
