import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  user: {
    first_name: '',
    last_name: '',
  },
  login: (token: any, expirationTime?: any) => {},
  logout: () => {},
});
