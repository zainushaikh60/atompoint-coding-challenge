import { useState } from "react";
import ChecklistMedium from "./ChecklistMedium";
import ChecklistSmall from "./ChecklistSmall";
import ChecklistAdditionalInfo from "./ChecklistAdditionalInfo";

const Checklist = ({
  securityChecklist,
  updateSecurityChecklist,
  currentUser,
}) => {
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  const onSetShowAdditionalInfo = () => {
    setShowAdditionalInfo((showAdditionalInfo) => !showAdditionalInfo);
  };

  return (
    <>
      <ChecklistSmall
        securityChecklist={securityChecklist}
        showAdditionalInfo={showAdditionalInfo}
        onSetShowAdditionalInfo={onSetShowAdditionalInfo}
        updateSecurityChecklist={updateSecurityChecklist}
        currentUser={currentUser}
      />
      <ChecklistMedium
        securityChecklist={securityChecklist}
        showAdditionalInfo={showAdditionalInfo}
        onSetShowAdditionalInfo={onSetShowAdditionalInfo}
        updateSecurityChecklist={updateSecurityChecklist}
        currentUser={currentUser}
      />

      {showAdditionalInfo && (
        <ChecklistAdditionalInfo securityChecklist={securityChecklist} />
      )}
    </>
  );
};

export default Checklist;
