import { useState, useContext, createContext, useEffect } from "react";

const AuthPrividerContext = createContext();
const AuthProviderContextDispatcher = createContext();

const LOCAL_STORAGE_AUTH_KEY = "authState";

function AuthProvider({ children }) {
  const [stateAuth, setStateAuth] = useState(false);

  return (
    <AuthPrividerContext.Provider value={{ stateAuth }}>
      <AuthProviderContextDispatcher.Provider value={setStateAuth}>
        {children}
      </AuthProviderContextDispatcher.Provider>
    </AuthPrividerContext.Provider>
  );
}

export default AuthProvider;

export const useAuth = () => useContext(AuthPrividerContext);
export const useAuthActions = () => useContext(AuthProviderContextDispatcher);
