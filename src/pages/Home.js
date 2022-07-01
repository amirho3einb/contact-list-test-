import { useNavigate } from "react-router-dom";
import ContactList from "../components/contactLists/ContactList";

const HomePage = ({ contacts, deleteContact }) => {
  const navigate = useNavigate();
  const goToAddContactForm = () => {
    navigate("/AddContact");
  };
  return (
    <div>
      <button onClick={goToAddContactForm}>اضافه کردن مخاطب جدید</button>
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
};

export default HomePage;
