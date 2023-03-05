import ErrorMessage from "./ErrorMessage";
import Label from "./Label";
import styled from "styled-components";

const TextField = ({
  label = "",
  placeholder = "Enter your text here...",
  type = "text",
  onChange,
  value,
  required = false,
  error = "",
  size,
  fullWidth = false,
  onBlur,
  absolute = false,
  rightIcon = "",
  leftIcon = "",
  readOnly = false,
  className = "",
}) => {
  return (
    <div
      className={`relative flex flex-col ${TextSize(size)} ${className} ${
        fullWidth && "w-full"
      }`}
    >
      <Label required={required}>{label}</Label>
      <div
        className={`flex gap-3 relative items-center bg-white border ${
          error !== "" ? "border-red-600" : "border-gray-300"
        } focus-within:border-primary-600 ${TextFieldSize(size)}`}
      >
        {leftIcon !== "" && (
          <div className="z-20 left-5 cursor-pointer">
            <span className={`${IconSize(size)}  text-gray-400`}>
              {leftIcon}
            </span>
          </div>
        )}
        <InputStyled
          className={`flex-1 w-full focus:outline-none 
      `}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          readOnly={readOnly}
        />
        {rightIcon !== "" && (
          <div className="z-20 right-5 cursor-pointer">
            <span className={`${IconSize(size)} text-gray-400`}>
              {rightIcon}
            </span>
          </div>
        )}
      </div>
      {error !== "" && <ErrorMessage absolute={absolute}>{error}</ErrorMessage>}
    </div>
  );
};

export default TextField;

const InputStyled = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const TextSize = (size = "default") =>
  ({
    default: "text-base",
    sm: "text-sm",
    lg: "text-lg",
  }[size]);

const TextFieldSize = (size = "default") =>
  ({
    default: "py-2.5 px-4 rounded-md",
    sm: "px-3.5 py-2 rounded-md",
    lg: "px-4 py-2.5 rounded-md",
  }[size]);

const IconSize = (size = "default") =>
  ({
    default: "[&>*]:w-5 [&>*]:h-5 text-base",
    sm: "[&>*]:w-4 [&>*]:h-4 text-sm",
  }[size]);
