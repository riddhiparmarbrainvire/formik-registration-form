import React from "react";
import {
  DateInputField,
  Icon,
  InputContainer,
  InputLabel,
} from "./styles/RegistrationStyles";

interface DateInputProps {
  name: string;
  value: string;
  onChange: (date: Date) => void;
  label?: string;
  icon?: any;
  placeholder: string;
}

const DateInput: React.FC<DateInputProps> = ({
  name,
  value,
  onChange,
  label,
  icon,
  placeholder,
}) => {
  return (
    <>
      <InputLabel>{label}</InputLabel>
      <InputContainer>
        <Icon as={icon} />
        <DateInputField
          name={name}
          selected={value ? new Date(value) : null}
          onChange={onChange}
          placeholderText={placeholder}
        />
      </InputContainer>
    </>
  );
};

export default DateInput;
