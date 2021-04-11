import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';

import PropTypes from 'prop-types';
import s from './ContactsList.module.css';

const ContactsList = ({ contacts = [], onDelete }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <span className={s.name}>{name}:</span>{' '}
          <span className={s.number}>{number}</span>
          <button className={s.btn} onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { contacts, filter } = state.phoneBook;
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
  return {
    contacts: filteredContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(phoneBookActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
