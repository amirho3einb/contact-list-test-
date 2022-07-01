import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";

const RequireAuth = ({ children }) => {
  const { stateAuth, loadingAuth } = useAuth(); // false true => true false
  const location = useLocation();

  const renderRequireAuth = () => {
    if (stateAuth && !loadingAuth) return children;
    if (!stateAuth && !loadingAuth)
      return (
        <Navigate to="/login" replace state={{ path: location.pathname }} />
      );
  };
  return renderRequireAuth();
  // return auth ? (
  //   children
  // ) : (
  //   <Navigate to="/login" replace state={{ path: location.pathname }} />
  // );
};

export default RequireAuth;
