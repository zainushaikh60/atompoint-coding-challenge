const DisplayError = ({ error }) => {
  return (
    <div className="w-full p-3 my-2 text-sm text-white text-center rounded-md bg-red-400">
      <p>{error}</p>
    </div>
  );
};

export default DisplayError;
