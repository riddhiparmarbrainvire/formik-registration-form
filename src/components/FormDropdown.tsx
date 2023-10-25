/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { ChangeEvent, useState } from "react";
import { Country, State, City } from "country-state-city";
import { FormErrorMessage, Select } from "./styles/RegistrationStyles";

interface Label {
  errors: any;
  handleChange?: any;
  values?: any;
}

const FormDropdown = ({ errors, handleChange, values }: Label) => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const countriesList = Country.getAllCountries();

  const statesList: any =
    country &&
    State.getAllStates().filter((state) => state.countryCode === country);

  const citiesList: any =
    state && City.getAllCities().filter((city) => city.stateCode === state);
  console.log(values, "values");
  return (
    <>
      <Select
        name="country"
        id="country"
        value={country}
        onChange={(e) => {
          let event = { target: { name: "country", value: e.target.value } };
          setCountry(e.target.value);
          handleChange(event);
        }}
      >
        <option value="">Select Country</option>
        {countriesList?.map((countryObject, i) => (
          <option key={i} value={countryObject.isoCode}>
            {countryObject.name}
          </option>
        ))}
      </Select>

      {errors?.country && (
        <FormErrorMessage>{errors?.country}</FormErrorMessage>
      )}

      {statesList.length ? (
        <Select
          id="state"
          name="state"
          value={state}
          onChange={(e) => {
            let event = { target: { name: "state", value: e.target.value } };
            setState(e.target.value);
            handleChange(event);
          }}
        >
          <option value="">Select State</option>
          {statesList?.map((item: any, i: number) => {
            return (
              <option key={i} value={item.isoCode}>
                {item.name}
              </option>
            );
          })}
        </Select>
      ) : (
        <Select
          value={state}
          onChange={(e) => setState(e.target.value)}
          id="state"
          name="state"
        >
          <option value="">Please select a country first</option>
        </Select>
      )}

      {citiesList.length ? (
        <Select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          name="city"
        >
          <option value="">Select City</option>
          {citiesList?.map((item: any, i: number) => {
            return (
              <option value={item.isoCode} key={i}>
                {item.name}{" "}
              </option>
            );
          })}
        </Select>
      ) : (
        <Select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Please select a state first</option>
        </Select>
      )}
    </>
  );
};

export default FormDropdown;
