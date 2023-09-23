import { axiosInstance } from '../helpers/axios-config';


const login = (email, password) => {
  const data = { email, password };
  
  return axiosInstance.post('auth', data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};



export { login };