import { useReducer } from "react";
import SecurityChecklistContext from "./securityChecklistContext";
import securityChecklistReducer from "./securityChecklistReducer";
import { db, collection, doc, getDocs, updateDoc } from "../../firebase";
import {
  FETCH_SECURITY_CHECKLIST,
  SET_FETCH_SECURITY_CHECKLIST_LOADING,
  FETCH_SECURITY_CHECKLIST_ERROR,
  CLEAR_FETCH_SECURITY_CHECKLIST_ERROR,
  FILTER_SECURITY_CHECKLIST_BY_CLOUD_PROVIDER,
  FILTER_SECURITY_CHECKLIST_BY_SERVICE_PROVIDER,
  SET_UPDATE_SECURITY_CHECKLIST_LOADING,
  CLEAR_UPDATE_SECURITY_CHECKLIST_ERROR,
  UPDATE_SECURITY_CHECKLIST,
  UPDATE_SECURITY_CHECKLIST_ERROR,
  CLEAR_SECURITY_CHECKLIST_FILTERS,
  CLEAR_SECURITY_CHECKLIST_STATE,
} from "../types";

const SecurityChecklistState = ({ children }) => {
  const initialState = {
    securityChecklist: null,
    filteredSecurityChecklist: null,
    securityChecklistLoading: false,
    securityChecklistError: null,
    updateSecurityChecklistError: null,
    updateSecurityChecklistLoading: null,
    currentFilter: null,
    filteredByCloud: null,
    filteredByService: null,
  };

  // Fetch Security Checklist

  const fetchSecurityChecklist = async (data) => {
    try {
      const securityChecklistRef = collection(
        db,
        "users",
        data.userId,
        "security_checklist"
      );

      const securityChecklistData = await getDocs(securityChecklistRef);
      const dataSnap = securityChecklistData.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));

      dispatch({
        type: FETCH_SECURITY_CHECKLIST,
        payload: dataSnap,
      });
    } catch (error) {
      dispatch({
        type: FETCH_SECURITY_CHECKLIST_ERROR,
        payload: error.code,
      });
    }
  };

  // Filter Security Checklist By Cloud Provider

  const filterSecurityChecklistByCloudProvider = (data) => {
    dispatch({
      type: FILTER_SECURITY_CHECKLIST_BY_CLOUD_PROVIDER,
      payload: data,
    });
  };

  // Filter Security Checklist By Service Provider

  const filterSecurityChecklistByServiceProvider = (data) => {
    dispatch({
      type: FILTER_SECURITY_CHECKLIST_BY_SERVICE_PROVIDER,
      payload: data,
    });
  };

  // Clear Security Checklist Filters

  const clearSecurityChecklistFilters = () => {
    dispatch({
      type: CLEAR_SECURITY_CHECKLIST_FILTERS,
    });
  };

  // Set Security Checklist Loading

  const setSecurityChecklistLoading = () => {
    dispatch({
      type: SET_FETCH_SECURITY_CHECKLIST_LOADING,
    });
  };

  // Clear Security Checklist Error

  const clearSecurityChecklistError = () => {
    dispatch({
      type: CLEAR_FETCH_SECURITY_CHECKLIST_ERROR,
    });
  };

  // Update Security Checklist

  const updateSecurityChecklist = async (data) => {
    let isChecked = !data.currentState;
    try {
      const securityChecklistRef = doc(
        db,
        "users",
        data.userId,
        "security_checklist",
        data.docId
      );

      await updateDoc(securityChecklistRef, {
        isChecked: isChecked,
      });

      dispatch({
        type: UPDATE_SECURITY_CHECKLIST,
        payload: { docId: data.docId, isChecked },
      });
    } catch (error) {
      dispatch({
        type: UPDATE_SECURITY_CHECKLIST_ERROR,
        payload: error.code,
      });
    }
  };

  // Set Update Security Checklist Loading

  const setUpdateSecurityChecklistLoading = () => {
    dispatch({
      type: SET_UPDATE_SECURITY_CHECKLIST_LOADING,
    });
  };

  // Clear Security Checklist Error

  const clearUpdateSecurityChecklistError = () => {
    dispatch({
      type: CLEAR_UPDATE_SECURITY_CHECKLIST_ERROR,
    });
  };

  // Clear Security Checklist State

  const clearSecurityChecklistState = () => {
    dispatch({
      type: CLEAR_SECURITY_CHECKLIST_STATE,
    });
  };

  const [state, dispatch] = useReducer(securityChecklistReducer, initialState);

  return (
    <SecurityChecklistContext.Provider
      value={{
        securityChecklist: state.securityChecklist,
        filteredSecurityChecklist: state.filteredSecurityChecklist,
        securityChecklistLoading: state.securityChecklistLoading,
        securityChecklistError: state.securityChecklistLoading,
        currentFilter: state.currentFilter,
        filteredByCloud: state.filteredByCloud,
        filteredByService: state.filteredByService,
        fetchSecurityChecklist,
        setSecurityChecklistLoading,
        clearSecurityChecklistError,
        filterSecurityChecklistByCloudProvider,
        filterSecurityChecklistByServiceProvider,
        updateSecurityChecklist,
        setUpdateSecurityChecklistLoading,
        clearUpdateSecurityChecklistError,
        clearSecurityChecklistFilters,
        clearSecurityChecklistState,
      }}
    >
      {children}
    </SecurityChecklistContext.Provider>
  );
};

export default SecurityChecklistState;
