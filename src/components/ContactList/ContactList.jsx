import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contact/contact-selectors';
import { deleteContact } from '../../redux/contact/contact-actions';
import styles from './ContactList.module.scss';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const onDeleteContacts = id => dispatch(deleteContact(id));

  return (
    <ul className={styles.list}>
      {contacts.map(({ name, phone, id }) => {
        return (
          <li className={styles.list__item} key={id}>
            {name}: {phone}
            <button
              type="button"
              className={styles.btn}
              onClick={() => onDeleteContacts(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
