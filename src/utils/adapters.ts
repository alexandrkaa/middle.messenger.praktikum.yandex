// FB - Front to Back
// BF Back to Front

export type TSignUpFData = {
  firstName?: string;
  secondName?: string;
  login?: string;
  email?: string;
  password?: string;
  phone?: string;
  displayName?: string;
  id?: number;
  avatar?: string | null | undefined;
};

export type TSignUpBData = {
  first_name?: string;
  second_name?: string;
  login?: string;
  email?: string;
  password?: string;
  phone?: string;
  display_name?: string;
  id?: number;
  avatar?: string | null | undefined;
};

export const signUpFBAdapter = (data: TSignUpFData): TSignUpBData => ({
  first_name: data.firstName,
  second_name: data.secondName,
  login: data.login,
  email: data.email,
  password: data.password,
  phone: data.phone,
  display_name: data.displayName,
  id: data?.id,
  avatar: data?.avatar,
});

export const signUpBFAdapter = (data: TSignUpBData): TSignUpFData => ({
  firstName: data.first_name,
  secondName: data.second_name,
  login: data.login,
  email: data.email,
  password: data.password,
  phone: data.phone,
  displayName: data.display_name,
  id: data?.id,
  avatar: data?.avatar,
});
