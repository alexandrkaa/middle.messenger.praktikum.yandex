// FB - Front to Back
// BF Back to Front

export type TSignUpFData = {
  firstName: string;
  secondName: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export type TSignUpBData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export const signUpFBAdapter = (data: TSignUpFData): TSignUpBData => {
  return {
    first_name: data.firstName,
    second_name: data.secondName,
    login: data.login,
    email: data.email,
    password: data.password,
    phone: data.phone,
  };
};

export const signUpBFAdapter = (data: TSignUpBData): TSignUpFData => {
  return {
    firstName: data.first_name,
    secondName: data.second_name,
    login: data.login,
    email: data.email,
    password: data.password,
    phone: data.phone,
  };
};
