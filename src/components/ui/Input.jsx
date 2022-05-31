const Input = ({ labelText, type, name, value, required, onChange }) => {
  return (
    <div className="flex flex-col text-sm">
      <label className="text-primary font-bold mb-1">{labelText}</label>
      <input
        className="border rounded-md p-3"
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
