const ChecklistHeader = () => {
  return (
    <div className="hidden md:flex p-4 font-black text-primary text-sm sticky top-0 bg-white border-b">
      <div className="flex-[0.5]" />
      <div className="flex-1">
        <p>Name</p>
      </div>

      <div className="flex-1">
        <p>Category</p>
      </div>

      <div className="flex-1">
        <p>Cloud/Service</p>
      </div>

      <div className="flex-1">
        <p>Risk</p>
      </div>
      <div className="flex-1" />
    </div>
  );
};

export default ChecklistHeader;
