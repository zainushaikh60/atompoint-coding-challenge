import ChecklistWrapper from "./ChecklistWrapper";

const ChecklistContainer = ({
  currentUser,
  securityChecklist,
  updateSecurityChecklist,
  filteredByService,
  filteredByCloud,
  clearSecurityChecklistFilters,
}) => {
  if (!filteredByCloud && filteredByService) {
    return (
      <ChecklistWrapper
        securityChecklist={filteredByService}
        currentUser={currentUser}
        updateSecurityChecklist={updateSecurityChecklist}
        clearSecurityChecklistFilters={clearSecurityChecklistFilters}
      />
    );
  }

  if (filteredByCloud && !filteredByService) {
    return (
      <ChecklistWrapper
        securityChecklist={filteredByCloud}
        currentUser={currentUser}
        updateSecurityChecklist={updateSecurityChecklist}
        clearSecurityChecklistFilters={clearSecurityChecklistFilters}
      />
    );
  }

  return (
    <ChecklistWrapper
      securityChecklist={securityChecklist}
      currentUser={currentUser}
      clearSecurityChecklistFilters={clearSecurityChecklistFilters}
    />
  );
};

export default ChecklistContainer;
