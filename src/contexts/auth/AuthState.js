import { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  auth,
  doc,
  db,
  getDoc,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "../../firebase";
import addSecurityChecklistDocumentToDb from "../../util/addSecurityChecklistDocumentToDb";
import addNewUserToDb from "../../util/addNewUserToDb";
import {
  SIGN_UP,
  SIGN_IN,
  SET_CURRENT_USER,
  SET_AUTH_LOADING,
  AUTH_ERROR,
  CLEAR_AUTH_ERROR,
  UPDATE_USER_PRFOILE_INFO,
  SET_UPDATE_USER_PROFILE_INFO_LOADING,
  UPDATE_USER_PRFOILE_INFO_ERROR,
  CLEAR_UPDATE_USER_PRFOILE_INFO_ERROR,
  SIGN_OUT,
  SIGN_OUT_ERROR,
  FETCH_ADDITIONAL_USER_INFO,
  FETCH_ADDITIONAL_USER_INFO_ERROR,
} from "../types";

const AuthState = ({ children }) => {
  const initialState = {
    currentUser: null,
    authError: null,
    fetchAdditionalUserInfoError: null,
    authLoading: false,
    updateUserProfileStatus: null,
    updateUserProfileLoading: false,
    updateUserProfileError: null,
    signOutError: null,
  };

  // Sign Up

  const signUp = async ({
    fullName,
    email,
    phoneNumber,
    company,
    password,
  }) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      addNewUserToDb({
        userId: res.user.uid,
        fullName,
        phoneNumber,
        company,
      });

      addSecurityChecklistDocumentToDb({ userId: res.user.uid });

      dispatch({
        type: SIGN_UP,
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: error,
      });
    }
  };

  // Sign In

  const signIn = async ({ email, password }) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);

      dispatch({
        type: SIGN_IN,
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: error,
      });
    }
  };

  // Set Current User

  const setCurrentUser = (data) => {
    if (data) {
      dispatch({
        type: SET_CURRENT_USER,
        payload: data,
      });
    } else {
      dispatch({
        type: AUTH_ERROR,
        payload: "Something went wrong.",
      });
    }
  };

  // Fetch Additional User Info

  const fetchAdditionalUserInfo = async (params) => {
    try {
      const userDocRef = doc(db, "users", params.userId);
      const userDocSnap = await getDoc(userDocRef);

      dispatch({
        type: FETCH_ADDITIONAL_USER_INFO,
        payload: userDocSnap.data(),
      });
    } catch (error) {
      dispatch({ type: FETCH_ADDITIONAL_USER_INFO_ERROR, payload: error });
    }
  };

  // Set Auth Loading

  const setAuthLoading = () => {
    dispatch({
      type: SET_AUTH_LOADING,
    });
  };

  // Clear Auth Error

  const clearAuthError = () => {
    dispatch({
      type: CLEAR_AUTH_ERROR,
    });
  };

  // Update User Info

  const updateUserInfo = async ({ currentUser, displayName, phoneNumber }) => {
    try {
      await updateProfile(currentUser, {
        displayName,
        phoneNumber,
      });

      dispatch({
        type: UPDATE_USER_PRFOILE_INFO,
        payload: "Profile updated!",
      });
    } catch (error) {
      dispatch({
        type: UPDATE_USER_PRFOILE_INFO_ERROR,
        payload: error,
      });
    }
  };

  // Set Update User Info Loading

  const setUpdateUserInfoLoading = () => {
    dispatch({
      type: SET_UPDATE_USER_PROFILE_INFO_LOADING,
    });
  };

  // Clear Update User Info Loading

  const clearUpdateUserProfileInfoError = () => {
    dispatch({
      type: CLEAR_UPDATE_USER_PRFOILE_INFO_ERROR,
    });
  };

  // Sign Out

  const onSignOut = async () => {
    try {
      await signOut(auth);
      dispatch({
        type: SIGN_OUT,
      });
    } catch (error) {
      dispatch({
        type: SIGN_OUT_ERROR,
        payload: error,
      });
    }
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        currentUser: state.currentUser,
        authError: state.authError,
        authLoading: state.authLoading,
        updateUserProfileStatus: state.updateUserProfileStatus,
        updateUserProfileLoading: state.updateUserProfileLoading,
        updateUserProfileError: state.updateUserProfileError,
        fetchAdditionalUserInfoError: state.fetchAdditionalUserInfoError,
        signUp,
        signIn,
        setCurrentUser,
        fetchAdditionalUserInfo,
        setAuthLoading,
        clearAuthError,
        updateUserInfo,
        setUpdateUserInfoLoading,
        clearUpdateUserProfileInfoError,
        onSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
