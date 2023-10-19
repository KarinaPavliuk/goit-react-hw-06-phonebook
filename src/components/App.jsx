//import { useEffect } from 'react';
// import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { createContactAction, deleteContact } from 'store/contacts/slice';
import { handleFilterChanges } from 'store/filter/slice';

export const App = () => {
  const { contacts, filter } = useSelector(store => store);

  console.log('contacts', contacts.contacts);
  console.log('filter', filter.filter);

  const dispatch = useDispatch();

  // const [contacts, setContacts] = useState(() =>
  //   JSON.parse(localStorage.getItem('contacts') ?? initialContacts)
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleFilterChange = ({ target }) => {
    console.log(target);
    dispatch(handleFilterChanges(target.value));
    //setFilter(target.value);
  };

  const onDeleteClick = id => {
    dispatch(deleteContact(id));
    // setContacts(prevContacts =>
    //   prevContacts.filter(contact => contact.id !== id)
    // );
  };

  const createContact = newContact => {
    if (
      contacts.contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(createContactAction(newContact));
    // setContacts(prevContacts => [
    //   ...prevContacts,
    //   { ...newContact, id: nanoid() },
    // ]);
  };

  const getFilteredContacts = () => {
    return contacts.contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm createContact={createContact} />
      <h2>Contacts</h2>
      <Filter handleChange={handleFilterChange} value={filter.filter} />
      <ContactList
        filteredContacts={filteredContacts}
        onDeleteClick={onDeleteClick}
      />
    </div>
  );
};
