import  Person  from "../Icons/Person.jsx";
import  Phone  from "../Icons/Phone.jsx";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps.js";

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <div>
        <p>
          <Person />
          {name}
        </p>
        <p>
          <Phone /> {number}
        </p>
      </div>
      <button onClick={handleDelete}>
        <p>Delete</p> 
      </button>
    </>
  );
}