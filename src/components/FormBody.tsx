import React, { useState } from "react";
import {
  Column,
  Columns,
  DropdownWrapper,
  FormErrorMessage,
  InputDiv,
  InputLabel,
  RegisterButton,
} from "./styles/RegistrationStyles";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { ImLocation } from "react-icons/im";
import FormInput from "./FormInput";
import FormDropdown from "./FormDropdown";
import FormRadio from "./FormRadio";
import FormCheckbox from "./FormCheckbox";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import {
  SELECT_COUNTRY,
  THIS_IS_A_REQUIRED_FILED,
  VALID_EMAIL,
} from "./utils/validationMessage";
import DateInput from "./DateInput";
import ReferralSelect from "./ReferralSelect";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  state: string;
  city: string;
  date: string;
  referrals: string;
  termsAndConditions: boolean;
  terms: string;
}

const FormBody = () => {
  const schema = Yup.object({
    firstName: Yup.string().required(THIS_IS_A_REQUIRED_FILED),
    lastName: Yup.string().required(THIS_IS_A_REQUIRED_FILED),
    email: Yup.string().email(VALID_EMAIL).required(THIS_IS_A_REQUIRED_FILED),
    phone: Yup.string().required(THIS_IS_A_REQUIRED_FILED),
    address: Yup.string().required(THIS_IS_A_REQUIRED_FILED),
    country: Yup.string().required(SELECT_COUNTRY),
    date: Yup.string().required(THIS_IS_A_REQUIRED_FILED),
    terms: Yup.string().required("Please select any one option"),
    termsAndConditions: Yup.boolean().oneOf(
      [true],
      "Please accept the terms and conditions"
    ),
    referrals: Yup.string()
      .min(1, "Select at least one option")
      .required("Required"),
  });

  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    state: "",
    city: "",
    date: "",
    referrals: "",
    termsAndConditions: false,
    terms: "",
  };

  const [selectedRadio, setSelectedRadio] = useState("");

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {}}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            errors,
            touched,
            setFieldValue,
          } = formik;
          return (
            <>
              <form onSubmit={handleSubmit}>
                <Columns>
                  <InputDiv>
                    <Column size={6}>
                      <FormInput
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        label="Name*"
                        handleChange={handleChange}
                        value={values.firstName}
                        setSelectedRadio={setSelectedRadio}
                      />
                      {errors.firstName && touched.firstName && (
                        <FormErrorMessage className="error">
                          {errors.firstName}
                        </FormErrorMessage>
                      )}
                    </Column>

                    <Column size={6} marginTop={20} marginLeft={30}>
                      <FormInput
                        placeholder="Last Name"
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={values.lastName}
                        handleChange={handleChange}
                        setSelectedRadio={setSelectedRadio}
                      />
                      {errors.lastName && touched.lastName && (
                        <FormErrorMessage className="error">
                          {errors.lastName}
                        </FormErrorMessage>
                      )}
                    </Column>
                  </InputDiv>

                  <Column
                    size={12}
                    flex={"flex"}
                    flexDirection={"column"}
                    marginTop={30}
                  >
                    <FormInput
                      id="email"
                      label="Email*"
                      placeholder="Email"
                      name="email"
                      icon={MdEmail}
                      type="text"
                      value={values.email}
                      handleChange={handleChange}
                      setSelectedRadio={setSelectedRadio}
                    />
                    {errors.email && touched.email && (
                      <FormErrorMessage className="error">
                        {errors.email}
                      </FormErrorMessage>
                    )}
                  </Column>

                  <Column
                    size={12}
                    flex={"flex"}
                    flexDirection={"column"}
                    marginTop={30}
                  >
                    <FormInput
                      id="phone"
                      label="Telephone*"
                      placeholder="Phone"
                      name="phone"
                      icon={BsFillTelephoneFill}
                      type="text"
                      value={values.phone}
                      handleChange={handleChange}
                      setSelectedRadio={setSelectedRadio}
                    />
                    {errors.phone && touched.phone && (
                      <FormErrorMessage className="error">
                        {errors.phone}
                      </FormErrorMessage>
                    )}
                  </Column>

                  <Column
                    size={12}
                    flex={"flex"}
                    flexDirection={"column"}
                    marginTop={30}
                  >
                    <FormInput
                      id="address"
                      label="Address*"
                      placeholder="Address"
                      name="address"
                      icon={ImLocation}
                      type="text"
                      value={values.address}
                      handleChange={handleChange}
                      setSelectedRadio={setSelectedRadio}
                    />
                    {errors.address && touched.address && (
                      <FormErrorMessage className="error">
                        {errors.address}
                      </FormErrorMessage>
                    )}
                  </Column>

                  <Column size={12} flex={"flex"} flexDirection={"column"}>
                    <FormDropdown
                      labels={{
                        country: "Select Country",
                        state: "Select State",
                        city: "Select City",
                      }}
                      country={values.country}
                      state={values.state}
                      city={values.city}
                      onCountryChange={(value) =>
                        setFieldValue("country", value)
                      }
                      onStateChange={(value) => setFieldValue("state", value)}
                      onCityChange={(value) => setFieldValue("city", value)}
                    />

                    {errors.country && touched.country && (
                      <FormErrorMessage className="error">
                        {errors.country}
                      </FormErrorMessage>
                    )}
                  </Column>

                  <Column
                    size={12}
                    flex={"flex"}
                    flexDirection={"column"}
                    marginTop={30}
                  >
                    <DateInput
                      label="Date*"
                      icon={SlCalender}
                      name="date"
                      value={values.date}
                      placeholder="Date"
                      onChange={(date) => setFieldValue("date", date)}
                    />

                    {errors.date && touched.date && (
                      <FormErrorMessage className="error">
                        {errors.date}
                      </FormErrorMessage>
                    )}
                  </Column>
                </Columns>

                <DropdownWrapper>
                  <InputLabel>Where did you hear about us?*</InputLabel>
                  <FormRadio
                    name="friend"
                    label="A friend or colleague"
                    type="checkbox"
                    selectedRadio={selectedRadio}
                    setSelectedRadio={setSelectedRadio}
                  />
                  <FormRadio
                    name="google"
                    label="Google"
                    type="checkbox"
                    selectedRadio={selectedRadio}
                    setSelectedRadio={setSelectedRadio}
                  />
                  <FormRadio
                    name="article"
                    label="Article News"
                    type="checkbox"
                    selectedRadio={selectedRadio}
                    setSelectedRadio={setSelectedRadio}
                  />
                  <FormRadio
                    name="blog"
                    label="Blog Posts"
                    type="checkbox"
                    selectedRadio={selectedRadio}
                    setSelectedRadio={setSelectedRadio}
                  />
                  <FormRadio
                    name="other"
                    label="Others"
                    type="checkbox"
                    selectedRadio={selectedRadio}
                    setSelectedRadio={setSelectedRadio}
                    errors={errors}
                  />
                  {!selectedRadio && (
                    <ErrorMessage component="div" name="terms" />
                  )}
                </DropdownWrapper>

                {selectedRadio === "Others" && (
                  <FormInput
                    type="text"
                    placeholder="Please specify the reason"
                    setSelectedRadio={setSelectedRadio}
                  />
                )}

                <ReferralSelect name="referrals" />

                {errors.referrals && touched.referrals && (
                  <FormErrorMessage className="error">
                    {errors.referrals}
                  </FormErrorMessage>
                )}

                <FormCheckbox
                  label="I accept the terms and conditions"
                  checked={values.termsAndConditions}
                  onChange={(isChecked) =>
                    setFieldValue("termsAndConditions", isChecked)
                  }
                />

                {errors.termsAndConditions && (
                  <FormErrorMessage className="error">
                    {errors.termsAndConditions}
                  </FormErrorMessage>
                )}
                <RegisterButton type="submit">Submit</RegisterButton>
                <ToastContainer />
              </form>
            </>
          );
        }}
      </Formik>
    </>
  );
};

export default FormBody;
