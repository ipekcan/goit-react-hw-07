import "./App.css";
import ContactList from "./features/contacts/ContactsList";
import AddContactFrom from "./features/contacts/AddContactFrom";
import SearchBox from "./features/contacts/SearchContact";
import { useSelector, useDispatch } from "react-redux";
import { getError, getIsLoading } from "./redux/selector";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps.js";

function App() {

  const dispatch = useDispatch();
  const loading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
  <>
    <h1>Phonebook</h1>
    <AddContactFrom/>
    <SearchBox/>
    {loading && !error && <b>Request in progress...</b>}
    <ContactList />
  </>
  );
}

export default App;
