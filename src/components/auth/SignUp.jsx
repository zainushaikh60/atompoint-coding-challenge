import { useState, useContext, useEffect } from "react";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import Button from "../ui/Button";
import DisplayError from "../ui/DisplayError";
import AuthContext from "../../contexts/auth/authContext";
import AuthFormContainer from "./AuthFormContainer";

const SignUp = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    currentUser,
    signUp,
    setCurrentUser,
    authLoading,
    setAuthLoading,
    authError,
    clearAuthError,
  } = authContext;

  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    company: "",
    password: "",
    passwordConfirm: "",
  });

  const [error, setError] = useState(null);

  const { fullName, email, phoneNumber, company, password, passwordConfirm } =
    user;

  const onChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (password !== passwordConfirm)
      return setError("Passwords do not match.");
    if (error) setError(null);
    if (authError !== null) clearAuthError();

    setAuthLoading();
    signUp({ fullName, email, phoneNumber, company, password });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setCurrentUser(user));
    return unsubscribe;
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [currentUser]);

  return (
    <AuthFormContainer title="Sign Up" onSubmit={onSubmit}>
      {error && <DisplayError error={error} />}
      {authError && <DisplayError error={authError} />}

      <Input
        labelText="Full Name"
        type="text"
        name="fullName"
        value={fullName}
        required={true}
        onChange={onChange}
      />

      <Input
        labelText="Email"
        type="email"
        name="email"
        value={email}
        required={true}
        onChange={onChange}
      />

      <Input
        labelText="Phone Number"
        type="text"
        name="phoneNumber"
        value={phoneNumber}
        required={true}
        onChange={onChange}
      />

      <Input
        labelText="Company"
        type="text"
        name="company"
        value={company}
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

      <Input
        labelText="Password Confirm"
        type="password"
        name="passwordConfirm"
        value={passwordConfirm}
        required={true}
        onChange={onChange}
      />

      <Button title="Sign Up" type="submit" loading={authLoading} />
    </AuthFormContainer>
  );
};

export default SignUp;
