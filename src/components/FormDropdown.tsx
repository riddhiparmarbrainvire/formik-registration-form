import React from "react";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import { InputLabel, SelectWrapper } from "./styles/RegistrationStyles";

const countries = Country.getAllCountries();

interface Props {
  country: string;
  state: string;
  city: string;
  labels: any;

  onCountryChange: (value: string) => void;
  onStateChange: (value: string) => void;
  onCityChange: (value: string) => void;
}

const FormDropdown: React.FC<Props> = ({
  country,
  state,
  city,
  labels,
  onCountryChange,
  onStateChange,
  onCityChange,
}) => {
  const getCountryOptions = () => {
    return countries.map((c) => ({
      label: c.name,
      value: c.isoCode,
    }));
  };

  const getStateOptions = (countryCode: string) => {
    const country = countries.find((c) => c.isoCode === countryCode);
    const state = State.getStatesOfCountry(country && country.isoCode);
    return state.map((s: any) => ({
      label: s.name,
      value: s.isoCode,
    }));
  };

  const getCityOptions = (stateCode: string) => {
    const city = City.getCitiesOfState(country, state).filter(
      (s: any) => s.stateCode === stateCode
    );
    return city.map((c: any) => ({
      label: c.name,
      value: c.name,
    }));
  };

  const countryOptions = getCountryOptions();

  const stateOptions = getStateOptions(country);

  const cityOptions = getCityOptions(state);

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      border: "1px solid #313131;",
      borderRadius: "4px",
      backgroundColor: "#f6d9d5",
      boxShadow: state.isFocused ? "1px solid #313131;" : "none",
      "&:hover": {
        border: "1px solid #313131",
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#f6d9d5" : "white",
      color: state.isSelected ? "white" : "black",
      "&:hover": {
        backgroundColor: "#f6d9d5;",
        color: "black",
      },
    }),
  };

  return (
    <>
      <SelectWrapper>
        <InputLabel>{labels.country}</InputLabel>
        <Select
          styles={customStyles}
          options={countryOptions}
          value={countryOptions.find((c) => c.value === country)}
          onChange={(option: any) => onCountryChange(option?.value ?? "")}
        />
      </SelectWrapper>

      {stateOptions.length > 0 && (
        <>
          <SelectWrapper>
            <InputLabel>{labels.state}</InputLabel>
            <Select
              styles={customStyles}
              options={stateOptions}
              value={stateOptions.find((s: any) => s.value === state)}
              onChange={(option) => onStateChange(option?.value ?? "")}
            />
          </SelectWrapper>
        </>
      )}

      {cityOptions && cityOptions.length > 0 && (
        <>
          <SelectWrapper>
            <InputLabel>{labels.city}</InputLabel>
            <Select
              styles={customStyles}
              options={cityOptions}
              value={cityOptions.find((c: any) => c.value === city)}
              onChange={(option) => onCityChange(option?.value ?? "")}
            />
          </SelectWrapper>
        </>
      )}
    </>
  );
};

export default FormDropdown;
