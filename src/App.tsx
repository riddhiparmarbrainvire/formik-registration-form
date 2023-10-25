import React from "react";
import { GlobalStyles } from "./components/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import {
  BodyWrapper,
  FormWrapper,
} from "./components/styles/RegistrationStyles";
import Header from "./components/Header";
import FormBody from "./components/FormBody";

const theme = {
  colors: {
    body: "#efefef",
  },
  mobile: "768px",
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <BodyWrapper>
          <GlobalStyles />
          <FormWrapper>
            <Header />
            <FormBody />
          </FormWrapper>
        </BodyWrapper>
      </>
    </ThemeProvider>
  );
};
export default App;
