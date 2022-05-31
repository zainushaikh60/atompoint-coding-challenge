import CloudProviders from "../providers/CloudProviders";
import ServiceProviders from "../providers/ServiceProviders";

const FilterContainer = ({
  securityChecklist,
  filterSecurityChecklistByCloudProvider,
  filterSecurityChecklistByServiceProvider,
  currentFilter,
}) => {
  const cloudProviders = [
    ...new Set(securityChecklist && securityChecklist.map((obj) => obj.cloud)),
  ];

  const serviceProviders = [
    ...new Set(
      securityChecklist && securityChecklist.map((obj) => obj.service)
    ),
  ];

  const setFilterByCloudProvider = (filter) => {
    filterSecurityChecklistByCloudProvider(filter);
  };

  const setFilterByServiceProvider = (filter) => {
    filterSecurityChecklistByServiceProvider(filter);
  };

  return (
    <div className="w-full my-2 flex flex-col items-center overflow-hidden">
      <h2 className="text-lg md:text-2xl text-center mb-2 md:mb-4 font-semibold">
        Cloud Security Checklist
      </h2>

      {securityChecklist && (
        <CloudProviders
          cloudProviders={cloudProviders}
          setFilterByCloudProvider={setFilterByCloudProvider}
          currentFilter={currentFilter}
        />
      )}

      {securityChecklist && (
        <ServiceProviders
          serviceProviders={serviceProviders}
          setFilterByServiceProvider={setFilterByServiceProvider}
          currentFilter={currentFilter}
        />
      )}
    </div>
  );
};

export default FilterContainer;
