const FormContainer = ({ className, onSubmit, children }) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default FormContainer;
