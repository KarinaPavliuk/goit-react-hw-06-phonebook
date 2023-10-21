import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'store/contacts/slice';
import { getContacts, getFilter } from 'store/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onDeleteClick = id => {
    dispatch(deleteContact(id));
  };

  const getFilteredContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          {contact.name} {contact.number}
          {onDeleteClick && (
            <button type="button" onClick={() => onDeleteClick(contact.id)}>
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};
