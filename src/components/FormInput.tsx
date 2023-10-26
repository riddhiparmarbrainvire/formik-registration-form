import React, { useState } from "react";
import {
  Icon,
  Input,
  InputContainer,
  InputLabel,
  RadioLabel,
} from "./styles/RegistrationStyles";
import "react-datepicker/dist/react-datepicker.css";

interface Label {
  label?: string;
  placeholder?: string;
  icon?: any;
  type?: string;
  name?: string;
  selectedRadio?: string;
  setSelectedRadio: (data: string) => void | string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  id?: string;
}

const FormInput = ({
  label,
  placeholder,
  icon,
  type,
  handleChange,
  value,
  id,
}: Label) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <InputContainer>
        <Icon as={icon} />
        <Input
          placeholder={placeholder}
          type={type}
          onChange={handleChange}
          value={value}
          id={id}
        />
        {type === "radio" ? (
          <RadioLabel htmlFor="radio">Radio Label</RadioLabel>
        ) : (
          ""
        )}
      </InputContainer>
    </>
  );
};

export default FormInput;
