import { useCallback, useEffect, useState } from 'react';
import { AuthContext } from './application/authContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './ui/components/Header';
import { Home } from './ui/pages/Home';
import { UserData } from './domain/user';
import { getUser } from './services/user';
import './App.scss';

let logoutTimer: any;

export default function App() {
  const [token, setToken] = useState<any>(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState<any>();
  const [user, setUser] = useState<UserData>({
    first_name: '',
    last_name: '',
  });

  const getUserData = async () => {
    const result = await getUser();
    setUser(result.data.user);
  };

  const login = useCallback((token: any, expirationTime: any) => {
    const expiration =
      expirationTime || new Date(new Date().getTime() + 1000 * 60 * 60);

    setToken(token);
    setTokenExpirationDate(expiration);

    localStorage.setItem(
      'userData',
      JSON.stringify({
        token,
        expirationTime: expiration.toISOString(),
      })
    );
    getUserData();
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem('userData');
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData') || '{}');
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expirationTime) > new Date()
    ) {
      login(storedData.token, new Date(storedData.expirationTime));
    }
  }, [login]);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        login: login,
        logout: logout,
        user: user,
      }}
    >
      <Router>
        <Header />
        <Switch>
          <Route path="/*" component={Home} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}
