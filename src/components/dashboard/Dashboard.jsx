import { useContext, useEffect } from "react";
import AuthContext from "../../contexts/auth/authContext";
import SecurityChecklistContext from "../../contexts/security-checklist/securityChecklistContext";
import ChecklistContainer from "../checklist/ChecklistContainer";
import DashboardContainer from "./DashboardContainer";
import FilterContainer from "../ui/FilterContainer";
import AppHeader from "../app/AppHeader";
import Loading from "../ui/Loading";

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const securityChecklistContext = useContext(SecurityChecklistContext);

  const { currentUser, fetchAdditionalUserInfo } = authContext;

  const {
    fetchSecurityChecklist,
    updateSecurityChecklist,
    securityChecklist,
    filteredByCloud,
    filteredByService,
    setSecurityChecklistLoading,
    securityChecklistLoading,
    filterSecurityChecklistByCloudProvider,
    filterSecurityChecklistByServiceProvider,
    currentFilter,
    clearSecurityChecklistFilters,
  } = securityChecklistContext;

  useEffect(() => {
    setSecurityChecklistLoading();
    fetchSecurityChecklist({ userId: currentUser.uid });
    fetchAdditionalUserInfo({ userId: currentUser.uid });
    // eslint-disable-next-line
  }, []);

  if (securityChecklistLoading) {
    return (
      <DashboardContainer>
        <Loading center={true} />
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <AppHeader
        fullName={currentUser.fullName}
        email={currentUser.email}
        phoneNumber={currentUser.phoneNumber}
        company={currentUser.company}
      />

      <FilterContainer
        securityChecklist={securityChecklist}
        filterSecurityChecklistByCloudProvider={
          filterSecurityChecklistByCloudProvider
        }
        filterSecurityChecklistByServiceProvider={
          filterSecurityChecklistByServiceProvider
        }
        currentFilter={currentFilter}
      />

      <ChecklistContainer
        currentUser={currentUser}
        securityChecklist={securityChecklist}
        updateSecurityChecklist={updateSecurityChecklist}
        filteredByCloud={filteredByCloud}
        filteredByService={filteredByService}
        clearSecurityChecklistFilters={clearSecurityChecklistFilters}
      />
    </DashboardContainer>
  );
};

export default Dashboard;
