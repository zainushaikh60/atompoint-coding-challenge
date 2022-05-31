import { useContext } from "react";
import { Outlet } from "react-router-dom";
import AuthContext from "../contexts/auth/authContext";
import SignIn from "./auth/SignIn";

const PrivateRoute = () => {
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;

  return currentUser ? <Outlet /> : <SignIn />;
};

export default PrivateRoute;
