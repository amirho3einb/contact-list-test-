import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import NotFound from "./pages/NotFound";
import AuthProvider from "./Providers/AuthProvider";
import { useState } from "react";
import AddContact from "./components/AddContact/AddContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const addNewContactHandler = (data) => {
    setContacts([...contacts, data]);
  };
  const deleteContactHandler = (id) => {
    const updateContact = contacts.filter((contact) => contact.id != id);
    setContacts(updateContact);
  };
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/AddContact"
            element={
              <RequireAuth>
                <AddContact addNewContact={addNewContactHandler} />
              </RequireAuth>
            }
          />
          <Route
            path="/"
            element={
              <RequireAuth>
                <HomePage
                  contacts={contacts}
                  deleteContact={deleteContactHandler}
                />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
