export interface Theme {
  colors: {
    body: string;
  };
  mobile: string;
}
export interface FormError {
  message: string;
}

export interface FormValues {
  fName: string;
  lName: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  selectCountry: string;
}
