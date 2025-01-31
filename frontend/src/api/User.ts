import axiosInstance from "../config/axios";

export const loginRequest = async (data) => {
  return axiosInstance.post("/users/auth/login", data);
};

export const registerRequest = async (data) => {
  return axiosInstance.post("/users/auth/register", data);
};

export const logoutRequest = async () => {
  return axiosInstance.post("/users/auth/logout");
};

export const perfilRequest = async () => {
  return axiosInstance.get("/users/profile");
};
export const verifyRequest = async () => {
  return axiosInstance.get("/users/verify");
};
