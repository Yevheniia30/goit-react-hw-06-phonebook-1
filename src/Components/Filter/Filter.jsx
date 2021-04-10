import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phoneBook-actions';

import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <div className={s.filter}>
      <label htmlFor="" className={s.label}>
        Find contacts by name
        <input
          type="text"
          name="filter"
          placeholder="Search"
          className={s.input}
          value={filter}
          onChange={onChange}
        ></input>
      </label>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.phoneBook.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: event =>
    dispatch(phoneBookActions.filterContact(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
