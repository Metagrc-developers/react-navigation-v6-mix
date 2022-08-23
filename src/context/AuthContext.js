import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';
import {API_BASE_URL} from './Config';
import axios from 'axios';
export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const login = async (email, password) => {
    try {
      setIsLoading(true);
      const {data} = await axios.post(
        `${API_BASE_URL}auth/login?timestamp=${new Date()}`,
        {
          email,
          password,
        },
        config,
      );
      //console.log('Res', data);

      if (data.success === true) {
        setUserToken(data.result.token);
        setUserInfo(data.result.admin);
        console.log('Res', data.result.admin);
        console.log('json', JSON.stringify(data.result.admin));
        AsyncStorage.setItem('userInfo', JSON.stringify(data.result.admin));
        AsyncStorage.setItem('userToken', data.result.token);
        setIsLoading(false);
      }
    } catch (e) {
      console.log('Error in login', e.message);
    }
    // setUserToken('jhdjksdjf');
    // AsyncStorage.setItem('userToken', userToken);
    setIsLoading(false);
  };
  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    setUserInfo(null);
    AsyncStorage.removeItem('userToken');
    AsyncStorage.removeItem('userInfo');

    setIsLoading(false);
  };
  const isLoggedin = async () => {
    try {
      setIsLoading(true);
      const token = await AsyncStorage.getItem('userToken');
      const info = await AsyncStorage.getItem('userInfo');

      //let userToken = AsyncStorage.getItem('userToken');
      //let userInfo = AsyncStorage.getItem('userInfo');
      // userInfo = JSON.parse(userInfo);
      if (info) {
        setUserInfo(JSON.parse(info));
        setUserToken(token);
      }
      //console.log('4', userInfo.name);
      //console.log('4', userToken);
      setIsLoading(false);
    } catch (e) {
      console.log(`isLoggedIn Error${e}`);
    }
  };
  useEffect(() => {
    isLoggedin();
  }, []);
  return (
    <AuthContext.Provider
      value={{login, logout, isLoading, userInfo, userToken}}>
      {children}
    </AuthContext.Provider>
  );
};

// export default AuthProvider;
