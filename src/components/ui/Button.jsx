const Button = ({ type, className, loading, title, onClick }) => {
  return (
    <button
      onClick={onClick ? onClick : () => {}}
      type={type ? type : "button"}
      className={
        className
          ? className
          : "w-full bg-primary rounded-md text-white p-3 text-sm md:text-base"
      }
      disabled={loading ? loading : false}
    >
      {loading ? "Please wait..." : `${title}`}
    </button>
  );
};

export default Button;
