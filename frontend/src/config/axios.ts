import axios from "axios";

const reactEnv = import.meta.env.VITE_REACT_APP_API_ENV;

const axiosInstance = axios.create({
  baseURL: `${reactEnv}`,
  withCredentials: true,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

export default axiosInstance;
