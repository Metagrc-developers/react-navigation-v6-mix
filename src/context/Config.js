import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const API_BASE_URL = 'http://10.0.2.2:8080/api/';

const jwtAxios = axios.create({
  baseURL: API_BASE_URL, //YOUR_API_URL HERE
  headers: {
      'Content-Type': 'application/json',
      //'x-auth-token':
  },
});
// jwtAxios.interceptors.response.use(
//   res => res,
//   err => {
//     if (err.response && err.response.data.msg === 'Token is not valid') {
//       console.log('Need to logout user');
//       //  logout();
//     }
//     return Promise.reject(err);
//   },
// );
export default jwtAxios;
