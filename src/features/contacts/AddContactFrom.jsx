import { useState } from "react";
import ContactFormCss from "../../components/ContactForm/ContactForm.module.css";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addContact } from "../../redux/contactsSlice";


const AddContactFrom = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const onNameChanged = e => setName(e.target.value);
  const onNumberChanged = e => setNumber(e.target.value);

  const dispatch = useDispatch();

  const onSaveContactClicked = () => {
    if (name && number) {
        dispatch(
            addContact({
                id: nanoid(),
                name,
                number
            })
        )
        
        setName('');
        setNumber('');
    }
  }
  
  return (
    <section>
        <h2>Add new Contact</h2>
        
                <form className={`${ContactFormCss.form}`} id="contactForm">
                <label htmlFor={name} className={`${ContactFormCss.lblName}`}>Name</label>
                <input id={name} name={name} className={`${ContactFormCss.fieldName}`} onChange={onNameChanged}></input>
                
                <label htmlFor={number} className={`${ContactFormCss.lblNumber}`}>Number</label>
                <input id={number} name={number} className={`${ContactFormCss.fieldNumber}`} onChange={onNumberChanged}></input>
               
                <button type="submit" className={`${ContactFormCss.btnAdd}`} onClick={onSaveContactClicked}>Add Contact</button>
                </form>
           
    </section>
  )
}

export default AddContactFrom