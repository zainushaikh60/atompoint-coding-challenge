import Scrollbars from "react-custom-scrollbars-2";

const DashboardContainer = ({ children }) => {
  return (
    <div className="h-full w-full p-3">
      <div className="bg-white h-full w-full rounded-md p-4 flex flex-col">
        <Scrollbars className="h-full flex flex-col w-full">
          {children}
        </Scrollbars>
      </div>
    </div>
  );
};

export default DashboardContainer;
