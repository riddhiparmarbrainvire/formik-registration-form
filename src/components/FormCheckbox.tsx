import React, { useState } from "react";
import {
  TermsCheckbox,
  TermsText,
  CheckBoxWrapper,
  TermsLink,
  CheckBoxContainer,
  FormErrorMessage,
} from "./styles/RegistrationStyles";

const FormCheckbox = (errors: any) => {
  const [agreed, setAgreed] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgreed(event.target.checked);
  };

  const handleTermsAndConditions = () => {
    setOpenAlert(true);
    alert(
      "I have read, understood, and accepted the PRIVACY POLICY for membership. Once you submit your application, we will contact you shortly to complete your membership application. Thank you!"
    );
  };

  return (
    <>
      <CheckBoxContainer>
        <CheckBoxWrapper>
          <TermsCheckbox
            type="checkbox"
            checked={agreed}
            onChange={handleChange}
          />
          <TermsText>
            I have read, understood, and accepted the PRIVACY POLICY for
            membership.
            <TermsLink onClick={handleTermsAndConditions}>
              Terms and Conditions
            </TermsLink>
          </TermsText>
        </CheckBoxWrapper>
      </CheckBoxContainer>
      {errors.errors.terms && (
        <FormErrorMessage className="error">
          {errors.errors.terms}
        </FormErrorMessage>
      )}
    </>
  );
};

export default FormCheckbox;
