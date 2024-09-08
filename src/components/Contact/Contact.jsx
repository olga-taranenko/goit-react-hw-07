import { FaUser } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.contactItem}>
      <div className={css.textWrap}>
        <p className={css.contactName}>
          <FaUser />
          &ensp;{name}
        </p>
        <p className={css.contactPhone}>
          <BsFillTelephoneFill />
          &ensp;{number}
        </p>
      </div>
      <button
        onClick={() => dispatch(deleteContact(id))}
        type="button"
        className={css.deleteContactBtn}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
