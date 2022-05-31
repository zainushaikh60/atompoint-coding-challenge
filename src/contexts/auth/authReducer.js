import {
  SIGN_IN,
  SIGN_UP,
  SET_CURRENT_USER,
  FETCH_ADDITIONAL_USER_INFO,
  FETCH_ADDITIONAL_USER_INFO_ERROR,
  SET_AUTH_LOADING,
  AUTH_ERROR,
  CLEAR_AUTH_ERROR,
  UPDATE_USER_PRFOILE_INFO,
  SET_UPDATE_USER_PROFILE_INFO_LOADING,
  UPDATE_USER_PRFOILE_INFO_ERROR,
  CLEAR_UPDATE_USER_PRFOILE_INFO_ERROR,
  SIGN_OUT,
  SIGN_OUT_ERROR,
} from "../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        authLoading: false,
      };
    case SIGN_UP:
      return {
        ...state,
        authLoading: false,
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        authLoading: false,
        authError: state.authError ? null : state.authError,
      };
    case FETCH_ADDITIONAL_USER_INFO:
      return {
        ...state,
        currentUser: { ...state.currentUser, ...action.payload },
      };
    case SET_AUTH_LOADING:
      return {
        ...state,
        authLoading: true,
      };
    case AUTH_ERROR:
      return {
        ...state,
        authError: action.payload.code,
        authLoading: false,
      };
    case FETCH_ADDITIONAL_USER_INFO_ERROR:
      return {
        ...state,
        fetchAdditionalUserInfoError: action.payload.code,
      };
    case CLEAR_AUTH_ERROR:
      return {
        ...state,
        authError: null,
        authLoading: false,
      };
    case UPDATE_USER_PRFOILE_INFO:
      return {
        ...state,
        updateUserProfileStatus: action.payload,
        updateUserProfileLoading: false,
        updateUserProfileError: state.updateUserProfileError
          ? null
          : state.updateUserProfileError,
      };
    case SET_UPDATE_USER_PROFILE_INFO_LOADING:
      return {
        ...state,
        updateUserProfileLoading: true,
      };
    case UPDATE_USER_PRFOILE_INFO_ERROR:
      return {
        ...state,
        updateUserProfileError: action.payload.code,
      };
    case CLEAR_UPDATE_USER_PRFOILE_INFO_ERROR:
      return {
        ...state,
        updateUserProfileError: null,
        updateUserProfileLoading: false,
      };
    case SIGN_OUT:
      return {
        ...state,
        currentUser: null,
        authError: null,
        authLoading: false,
        updateUserProfileStatus: null,
        updateUserProfileLoading: false,
        updateUserProfileError: null,
        signOutError: null,
      };
    case SIGN_OUT_ERROR:
      return {
        ...state,
        signOutError: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
