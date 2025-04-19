import css from "../../components/Contact/Contact.module.css";
import { useSelector } from "react-redux";
import { selectVisibleContacts } from "../../redux/selector.js";
import Contact from "../../components/Contact/Contact.jsx";

export default function ContactList() {
  const filteredBook = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactList}>
      {filteredBook.map(data => (
        <li key={data.id} className={css.contact}>
          <Contact data={data} />
        </li>
      ))}
    </ul>
  );
}