import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contact/contact-selectors';
import { changeFilter } from '../../redux/contact/contact-actions';
import styles from './Filter.module.scss';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={e => dispatch(changeFilter(e.target.value))}
        placeholder="Find your contact"
        autoComplete="off"
      />
    </label>
  );
};

export default Filter;
