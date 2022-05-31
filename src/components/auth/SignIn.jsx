import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import Input from "../ui/Input";
import Button from "../ui/Button";
import DisplayError from "../ui/DisplayError";
import AuthFormContainer from "./AuthFormContainer";
import AuthContext from "../../contexts/auth/authContext";
import Loading from "../ui/Loading";
import DashboardContainer from "../dashboard/DashboardContainer";

const SignIn = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    currentUser,
    signIn,
    setCurrentUser,
    authLoading,
    setAuthLoading,
    authError,
    clearAuthError,
  } = authContext;

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const { email, password } = user;

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (error) setError(null);
    if (authError !== null) clearAuthError();

    setAuthLoading();
    signIn({ email, password });
  };

  useEffect(() => {
    setAuthLoading();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (currentUser) navigate("/");
    // eslint-disable-next-line
  }, [currentUser]);

  if (authLoading) {
    return (
      <DashboardContainer>
        <Loading center={true} />
      </DashboardContainer>
    );
  }

  return (
    <AuthFormContainer title="Sign In" onSubmit={onSubmit}>
      {error && <DisplayError error={error} />}
      {authError && <DisplayError error={authError} />}

      <Input
        labelText="Email"
        type="email"
        name="email"
        value={email}
        required={true}
        onChange={onChange}
      />

      <Input
        labelText="Password"
        type="password"
        name="password"
        value={password}
        required={true}
        onChange={onChange}
      />

      <Button title="Sign In" type="submit" loading={authLoading} />
    </AuthFormContainer>
  );
};

export default SignIn;
