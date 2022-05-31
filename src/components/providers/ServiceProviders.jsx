import ScrollContainer from "react-indiana-drag-scroll";

const ServiceProviders = ({
  serviceProviders,
  setFilterByServiceProvider,
  currentFilter,
}) => {
  return (
    <div className="flex flex-col w-full my-3">
      <h3 className="text-sm md:text-lg font-semibold mb-2">
        Service Providers
      </h3>

      <ScrollContainer>
        <div className="grid grid-flow-col auto-cols-max gap-x-3 text-sm">
          {serviceProviders.map(
            (serviceProvider, index) =>
              serviceProvider && (
                <div
                  className={`w-48 h-16 border rounded-md cursor-pointer p-3 flex items-center justify-center overflow-hidden ${
                    currentFilter === serviceProvider && "border-primary"
                  }`}
                  key={index}
                  onClick={() => setFilterByServiceProvider(serviceProvider)}
                >
                  <p>{serviceProvider}</p>
                </div>
              )
          )}
        </div>
      </ScrollContainer>
    </div>
  );
};

export default ServiceProviders;
