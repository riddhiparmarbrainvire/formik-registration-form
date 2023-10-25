// @ts-ignore
import React from "react";
import {
  FormErrorMessage,
  RadioInput,
  RadioLabel,
  RadioWrapper,
} from "./styles/RegistrationStyles";

interface Label {
  label?: string;
  placeholder?: string;
  icon?: any;
  type?: string;
  selectedRadio: string;
  setSelectedRadio: (data: string) => void | string;
  errors?: any;
  name: string;
}

const FormRadio = ({
  label,
  type,
  selectedRadio,
  setSelectedRadio,
  errors,
  name,
}: Label) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedRadio) {
      setSelectedRadio("");
    } else {
      setSelectedRadio(e.target.value);
    }
  };

  console.log(errors, "errors");

  return (
    <div>
      <RadioWrapper>
        <RadioInput
          value={label}
          type={type}
          id="radio"
          name="radio"
          onChange={handleChange}
          checked={selectedRadio === label}
        />
        <RadioLabel htmlFor="radio">{label}</RadioLabel>
      </RadioWrapper>

      {errors?.referrel && (
        <FormErrorMessage>{errors?.referrel}</FormErrorMessage>
      )}
    </div>
  );
};

export default FormRadio;
