import { useNavigate } from "react-router-dom";
import ContactList from "../components/contactLists/ContactList";

const HomePage = ({ contacts }) => {
  const navigate = useNavigate();
  const goToAddContactForm = () => {
    navigate("/AddContact");
  };
  return (
    <div>
      <button onClick={goToAddContactForm}>اضافه کردن مخاطب جدید</button>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default HomePage;
