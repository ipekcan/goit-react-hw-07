import { useSelector } from "react-redux";
import ContactCss from "../../components/Contact/Contact.module.css";

import { selectAllContacts } from "../../redux/contactsSlice";

import Person from "../../components/Icons/Person/Person";
import Phone from "../../components/Icons/Phone/Phone";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

import { getFilter } from "../../redux/selector";

const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);
  const filtered = useSelector(getFilter);
  
  const normalizedFilter = filtered?.toLowerCase();
  const filteredContacts = contacts?.filter((contact) =>
    contact?.name?.toLowerCase().includes(normalizedFilter)
  );
 
  const renderedContacts = filteredContacts.map((contact) => (
    <li className={`${ContactCss.ulListStyle}`} key={contact.id}>
      {
        
          <div className={`${ContactCss.form}`}>
            <div className={`${ContactCss.card}`}>
              <div className={`${ContactCss.person}`}>
                <Person/>
                <p>{contact.name}</p>
              </div>
              <div className={`${ContactCss.phone}`}>
                <Phone />
                <p>{contact.number}</p>
              </div>
              <div className={`${ContactCss.divBtn}`}>
              <button type="button" className={`${ContactCss.btnDelete}`} onClick={()=>{dispatch(deleteContact(contact.id))}}>Delete</button>
              </div>
            </div>
          </div>
        
      }
    </li>
  ));

  
  
  return (
    <section>
        <h2>PhoneBook</h2>
        <ul>
          {renderedContacts}
        </ul>
    </section>
  )
}

export default ContactsList;