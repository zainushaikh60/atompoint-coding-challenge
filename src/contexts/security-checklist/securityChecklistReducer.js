import {
  FETCH_SECURITY_CHECKLIST,
  SET_FETCH_SECURITY_CHECKLIST_LOADING,
  FETCH_SECURITY_CHECKLIST_ERROR,
  CLEAR_FETCH_SECURITY_CHECKLIST_ERROR,
  FILTER_SECURITY_CHECKLIST_BY_CLOUD_PROVIDER,
  FILTER_SECURITY_CHECKLIST_BY_SERVICE_PROVIDER,
  UPDATE_SECURITY_CHECKLIST,
  UPDATE_SECURITY_CHECKLIST_ERROR,
  SET_UPDATE_SECURITY_CHECKLIST_LOADING,
  CLEAR_UPDATE_SECURITY_CHECKLIST_ERROR,
  CLEAR_SECURITY_CHECKLIST_FILTERS,
  CLEAR_SECURITY_CHECKLIST_STATE,
} from "../types";

const securityChecklistReducer = (state, action) => {
  switch (action.type) {
    case FETCH_SECURITY_CHECKLIST:
      return {
        ...state,
        securityChecklist: action.payload,
        securityChecklistLoading: false,
      };
    case SET_FETCH_SECURITY_CHECKLIST_LOADING:
      return {
        ...state,
        securityChecklistLoading: true,
      };
    case FETCH_SECURITY_CHECKLIST_ERROR:
      return {
        ...state,
        securityChecklistError: action.payload,
      };
    case CLEAR_FETCH_SECURITY_CHECKLIST_ERROR:
      return {
        ...state,
        securityChecklistError: null,
      };
    case FILTER_SECURITY_CHECKLIST_BY_CLOUD_PROVIDER:
      return {
        ...state,
        filteredByCloud: state.securityChecklist.filter(
          (checklist) => checklist.cloud === action.payload
        ),
        filteredByService: null,
        currentFilter:
          state.filteredByCloud && state.filteredByService
            ? null
            : action.payload,
      };
    case FILTER_SECURITY_CHECKLIST_BY_SERVICE_PROVIDER:
      return {
        ...state,
        filteredByService: state.securityChecklist.filter(
          (checklist) => checklist.service === action.payload
        ),
        filteredByCloud: null,
        currentFilter:
          state.filteredByCloud && state.filteredByService
            ? null
            : action.payload,
      };
    case CLEAR_SECURITY_CHECKLIST_FILTERS:
      return {
        ...state,
        filteredByCloud: null,
        filteredByService: null,
        currentFilter: null,
      };

    case UPDATE_SECURITY_CHECKLIST:
      return {
        ...state,
        securityChecklist: state.securityChecklist.map((doc) =>
          doc.id === action.payload.docId
            ? { ...doc, isChecked: action.payload.isChecked }
            : doc
        ),
        filteredByCloud:
          state.filteredByCloud &&
          state.filteredByCloud.map((doc) =>
            doc.id === action.payload.docId
              ? { ...doc, isChecked: action.payload.isChecked }
              : doc
          ),
        filteredByService:
          state.filteredByService &&
          state.filteredByService.map((doc) =>
            doc.id === action.payload.docId
              ? { ...doc, isChecked: action.payload.isChecked }
              : doc
          ),
      };
    case UPDATE_SECURITY_CHECKLIST_ERROR:
      return {
        ...state,
        updateSecurityChecklistError: action.payload,
      };
    case CLEAR_UPDATE_SECURITY_CHECKLIST_ERROR:
      return {
        ...state,
        updateSecurityChecklistError: null,
      };
    case SET_UPDATE_SECURITY_CHECKLIST_LOADING:
      return {
        ...state,
        updateSecurityChecklistLoading: true,
      };
    case CLEAR_SECURITY_CHECKLIST_STATE:
      return {
        ...state,
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
    default:
      return state;
  }
};

export default securityChecklistReducer;
