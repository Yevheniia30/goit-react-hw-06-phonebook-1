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

// event и прочие события в actions не передаются
const filterContact = filter => ({
  type: actionTypes.FILTER,
  payload: filter,
});

export default { addContact, deleteContact, filterContact };
