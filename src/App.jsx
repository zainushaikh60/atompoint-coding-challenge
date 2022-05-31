import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppContainer from "./components/app/AppContainer";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Dashboard from "./components/dashboard/Dashboard";
import AuthState from "./contexts/auth/AuthState";
import SecurityChecklistState from "./contexts/security-checklist/SecurityChecklistState";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <AuthState>
      <SecurityChecklistState>
        <Router>
          <AppContainer>
            <Routes>
              <Route element={<PrivateRoute />}>
                <Route exact path="/" element={<Dashboard />} />
              </Route>
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/signin" element={<SignIn />} />
            </Routes>
          </AppContainer>
        </Router>
      </SecurityChecklistState>
    </AuthState>
  );
};

export default App;
