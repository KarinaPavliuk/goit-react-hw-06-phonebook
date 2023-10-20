import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { createContactAction, deleteContact } from 'store/contacts/slice';
import { handleFilterChanges } from 'store/filter/slice';

export const App = () => {
  const { contacts, filter } = useSelector(store => store);
  const contactsArray = contacts.contacts;
  const filterValue = filter.filter;

  const dispatch = useDispatch();

  const handleFilterChange = ({ target }) => {
    dispatch(handleFilterChanges(target.value));
  };

  const onDeleteClick = id => {
    dispatch(deleteContact(id));
  };

  const createContact = newContact => {
    if (
      contactsArray.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(createContactAction(newContact));
  };

  const getFilteredContacts = () => {
    return contactsArray.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm createContact={createContact} />
      <h2>Contacts</h2>
      <Filter handleChange={handleFilterChange} value={filterValue} />
      <ContactList
        filteredContacts={filteredContacts}
        onDeleteClick={onDeleteClick}
      />
    </div>
  );
};
