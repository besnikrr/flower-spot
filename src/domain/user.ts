import * as yup from 'yup';
interface User {
  id: number;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
}

interface UserLogin {
  email: string;
  password: string;
}

interface UserData {
  id?: number;
  first_name: string;
  last_name: string;
}

export const userSignUpValidator = yup.object().shape({
  email: yup.string().email().required('Email is a required field!'),
  password: yup.string().required('Password is a required field!'),
  first_name: yup.string().required('First name is a required field!'),
  last_name: yup.string().required('Last name is a required field!'),
  date_of_birth: yup.string().required('Date of birth is a required field!'),
});

export const userLoginValidator = yup.object().shape({
  email: yup.string().email().required('Email is a required field!'),
  password: yup.string().required('Password is a required field!'),
});

export type { User, UserLogin, UserData };
