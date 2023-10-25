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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  SELECT_COUNTRY,
  THIS_IS_A_REQUIRED_FILED,
  VALID_EMAIL,
} from "./utils/validationMessage";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  date: string;
  referral: string;
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
    terms: Yup.string().required(THIS_IS_A_REQUIRED_FILED),
    referrel: Yup.string()
      .oneOf(
        [
          "A friend or colleague",
          "Google",
          "Article News",
          "Blog Posts",
          "Others",
        ],
        "Please select at least one option"
      )
      .required("Please select at least one option"),
  });

  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    date: "",
    referral: "",
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
            handleBlur,
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
                      errors={errors}
                      handleChange={handleChange}
                      values={values}
                    />
                  </Column>

                  <Column
                    size={12}
                    flex={"flex"}
                    flexDirection={"column"}
                    marginTop={30}
                  >
                    <FormInput
                      label="Date of birth*"
                      icon={SlCalender}
                      name="dob"
                      id="date"
                      type="date"
                      value={values.date}
                      handleChange={handleChange}
                      setSelectedRadio={setSelectedRadio}
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
                    // errors={errors}
                  />
                  <FormRadio
                    name="google"
                    label="Google"
                    type="checkbox"
                    selectedRadio={selectedRadio}
                    setSelectedRadio={setSelectedRadio}
                    // errors={errors}
                  />
                  <FormRadio
                    name="article"
                    label="Article News"
                    type="checkbox"
                    selectedRadio={selectedRadio}
                    setSelectedRadio={setSelectedRadio}
                    // errors={errors}
                  />
                  <FormRadio
                    name="blog"
                    label="Blog Posts"
                    type="checkbox"
                    selectedRadio={selectedRadio}
                    setSelectedRadio={setSelectedRadio}
                    // errors={errors}
                  />
                  <FormRadio
                    name="other"
                    label="Others"
                    type="checkbox"
                    selectedRadio={selectedRadio}
                    setSelectedRadio={setSelectedRadio}
                    errors={errors}
                  />
                </DropdownWrapper>

                {selectedRadio === "Others" && (
                  <FormInput
                    type="text"
                    placeholder="Please specify the reason"
                    setSelectedRadio={setSelectedRadio}
                  />
                )}

                <FormCheckbox errors={errors} />
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
