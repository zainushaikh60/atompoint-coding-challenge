import IconContainer from "../ui/IconContainer";
import { ChevronDownIcon, ChevronUpIcon } from "../../icons";

const ChecklistSmall = ({
  securityChecklist,
  showAdditionalInfo,
  onSetShowAdditionalInfo,
  updateSecurityChecklist,
  currentUser,
}) => {
  return (
    <div className="md:hidden flex flex-col mx-4 my-3 border border-primary p-4 rounded-md text-sm">
      <div className="flex items-center justify-between">
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

        <IconContainer
          className="text-primary w-7 h-7 cursor-pointer ml-auto"
          onClick={onSetShowAdditionalInfo}
        >
          {showAdditionalInfo ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </IconContainer>
      </div>

      <div className="flex  flex-col mt-2">
        <span className="text-primary font-black">Name:</span>
        <p>{securityChecklist.name}</p>
      </div>

      <div className="flex flex-col mt-2">
        <span className="text-primary font-black">Cateogry:</span>
        <p>{securityChecklist.category}</p>
      </div>

      <div className="flex flex-col mt-2">
        <span className="text-primary font-black">Cloud/Service:</span>
        <p>
          {securityChecklist.cloud}/{securityChecklist.service}
        </p>
      </div>

      <div className="flex flex-col mt-2">
        <span className="text-primary font-black">Risk:</span>
        <p>{securityChecklist.risk}</p>
      </div>
    </div>
  );
};

export default ChecklistSmall;
