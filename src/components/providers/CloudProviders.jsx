import ScrollContainer from "react-indiana-drag-scroll";

const CloudProviders = ({
  cloudProviders,
  setFilterByCloudProvider,
  currentFilter,
}) => {
  return (
    <div className="flex flex-col w-full">
      <h3 className="text-sm md:text-lg mb-2 font-semibold">Cloud Providers</h3>

      <ScrollContainer>
        <div className="grid grid-flow-col auto-cols-max gap-x-3 self-center text-sm">
          {cloudProviders.map(
            (cloudProvider) =>
              cloudProvider && (
                <div
                  className={`w-32 h-20 border rounded-md cursor-pointer p-3 flex items-center justify-center overflow-hidden ${
                    currentFilter === cloudProvider && "border-primary"
                  }`}
                  key={cloudProvider}
                  onClick={() => setFilterByCloudProvider(cloudProvider)}
                >
                  <img
                    src={`/assets/logos/${cloudProvider}.png`}
                    className="w-full h-full"
                    alt={cloudProvider}
                  />
                </div>
              )
          )}
        </div>
      </ScrollContainer>
    </div>
  );
};

export default CloudProviders;
