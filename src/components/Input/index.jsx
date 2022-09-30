import { StyledInput } from "./style";

const Input = ({ type, description, placeholder, register, name, ...rest }) => {
  return (
    <>
      <StyledInput
        type={type}
        placeholder={placeholder}
        name={name}
        {...register(name)}
        {...rest}
      />
    </>
  );
};
export default Input;
