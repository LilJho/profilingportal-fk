const UnstyledButton = ({
  children,
  type = "button",
  onClick = () => {},
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`bg-white p-2 inline-block active:scale-95 transition-transform rounded bg-transparent ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default UnstyledButton;
