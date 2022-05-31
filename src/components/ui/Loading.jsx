const Loading = ({ center }) => {
  return (
    <div className={`w-16 h-16 ${center && "m-auto"}`}>
      <img src="/loading.gif" alt="loading..." />
    </div>
  );
};

export default Loading;
