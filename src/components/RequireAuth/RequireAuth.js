import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";

const RequireAuth = ({ children }) => {
  const { stateAuth } = useAuth(); // false true => true false
  const location = useLocation();

  const renderRequireAuth = () => {
    if (stateAuth) return children;
    if (!stateAuth)
      return (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
      );
  };
  return renderRequireAuth();
};

export default RequireAuth;
