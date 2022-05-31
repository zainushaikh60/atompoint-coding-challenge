const IconContainer = ({ children, className, onClick }) => {
  return (
    <div
      className={className ? className : "w-4 h-4 md:w-7 md:h-7 text-white"}
      onClick={onClick ? onClick : () => {}}
    >
      {children}
    </div>
  );
};

export default IconContainer;
