import "./App.css";
import ContactList from "./features/contacts/ContactsList";
import AddContactFrom from "./features/contacts/AddContactFrom";
import SearchBox from "./features/contacts/SearchContact";
import { useSelector } from "react-redux";

function App() {

  const filtered = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts);

  const filterContact = () => {
    const filteredContacts = contacts.items.filter(contact =>
      contact.name.includes(filtered)
    );
    return filteredContacts;
  };

  return (
  <>
    <AddContactFrom/>
    <SearchBox/>
    <ContactList />
  </>
  );
}

export default App;
