import Scrollbars from "react-custom-scrollbars-2";
import ChecklistHeader from "./ChecklistHeader";
import Checklist from "./Checklist";

const ChecklistWrapper = ({
  securityChecklist,
  currentUser,
  updateSecurityChecklist,
  clearSecurityChecklistFilters,
}) => {
  return (
    <div className="flex flex-col rounded-md p-2">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm md:text-lg font-semibold">Security Checklist</h3>
        <button
          className="px-3 py-2 rounded-full bg-primary text-white text-xs"
          onClick={() => clearSecurityChecklistFilters()}
        >
          <p>Remove Filters</p>
        </button>
      </div>

      <div className="border py-3 rounded-md">
        <div className="checklist-container">
          <Scrollbars>
            <ChecklistHeader />
            {securityChecklist &&
              securityChecklist.map((securityChecklist, index) => (
                <Checklist
                  key={index}
                  securityChecklist={securityChecklist}
                  currentUser={currentUser}
                  updateSecurityChecklist={updateSecurityChecklist}
                />
              ))}
          </Scrollbars>
        </div>
      </div>
    </div>
  );
};

export default ChecklistWrapper;
