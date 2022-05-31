const ChecklistAdditionalInfo = ({ securityChecklist }) => {
  return (
    <div className="my-2 border mx-4 rounded-md flex flex-col space-y-2 text-sm">
      <div className="flex flex-col border-b p-3">
        <span className="font-black text-primary">Description: </span>
        {securityChecklist.description}
      </div>

      <div className="flex flex-col border-b p-3">
        <span className="font-black text-primary">Function: </span>
        {securityChecklist.function}
      </div>

      <div className="flex flex-col border-b p-3">
        <span className="font-black text-primary">Group: </span>
        {securityChecklist.group}
      </div>

      <div className="flex flex-col border-b p-3">
        <span className="font-black text-primary">Message Fail: </span>
        {securityChecklist.messageFail}
      </div>

      <div className="flex flex-col border-b p-3">
        <span className="font-black text-primary">Message Pass: </span>
        {securityChecklist.messagePass}
      </div>

      <div className="flex flex-col border-b p-3">
        <span className="font-black text-primary">Page Detail: </span>
        {securityChecklist.pageDetail}
      </div>

      <div className="flex flex-col border-b p-3">
        <span className="font-black text-primary">Remediation Steps: </span>
        {securityChecklist.RemediationSteps}
      </div>
    </div>
  );
};

export default ChecklistAdditionalInfo;
