import { InputContainer, InputField, InputLabel } from "./styles";

interface InputProps {
    label: string;
  }
  

export const Input = ({ label, ...rest  }: InputProps) => (
  <InputContainer>
    <InputLabel {...rest }>{label}</InputLabel>
  
    <InputField />
  </InputContainer>
);
