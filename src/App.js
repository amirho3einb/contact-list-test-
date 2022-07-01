import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard/"
          element={
            <RequireAuth>
              <Dashborad />
            </RequireAuth>
          }
        />

      </Routes>
    </div>
  );
}

export default App;
