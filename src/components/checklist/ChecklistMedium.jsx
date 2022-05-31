import IconContainer from "../ui/IconContainer";
import { ChevronDownIcon, ChevronUpIcon } from "../../icons";

const ChecklistMedium = ({
  securityChecklist,
  showAdditionalInfo,
  onSetShowAdditionalInfo,
  updateSecurityChecklist,
  currentUser,
}) => {
  return (
    <div className="hidden md:flex items-center border border-primary mx-4 p-4 my-3 rounded-md text-sm">
      <div className="flex-[0.5] flex items-center">
        <div
          className="w-5 h-5 p-1 border border-primary rounded-md cursor-pointer"
          onClick={() =>
            updateSecurityChecklist({
              userId: currentUser.uid,
              docId: securityChecklist.id,
              currentState: securityChecklist.isChecked,
            })
          }
        >
          {securityChecklist.isChecked ? (
            <div className="w-full h-full bg-primary rounded-sm"></div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="flex-1">
        <p>{securityChecklist.name}</p>
      </div>
      <div className="flex-1">
        <p>{securityChecklist.category}</p>
      </div>
      <div className="flex-1 flex flex-col">
        <p>{securityChecklist.cloud}</p>
        <p>{securityChecklist.service}</p>
      </div>
      <div className="flex-1">
        <p>{securityChecklist.risk}</p>
      </div>

      <div className="flex-1 flex items-center">
        <IconContainer
          className="text-primary w-7 h-7 cursor-pointer ml-auto"
          onClick={onSetShowAdditionalInfo}
        >
          {showAdditionalInfo ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </IconContainer>
      </div>
    </div>
  );
};

export default ChecklistMedium;
