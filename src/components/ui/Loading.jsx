const Loading = ({ center }) => {
  return (
    <div
      className={`w-full h-full ${
        center && "flex items-center justify-center"
      }`}
    >
      <img className="w-14 h-14" src="/loading.gif" alt="loading..." />
    </div>
  );
};

export default Loading;
