const DashboardContainer = ({ children }) => {
  return (
    <div className="h-full w-full p-3">
      <div className="bg-white h-full w-full rounded-md p-4 flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default DashboardContainer;
