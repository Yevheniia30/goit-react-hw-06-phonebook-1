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

export default { addContact };
