import { createContext, useEffect, useState } from "react";
import { User, UserFormData } from "../types";
import {
  loginRequest,
  logoutRequest,
  registerRequest,
  verifyRequest,
} from "../api/User";
import Cookies from "js-cookie";

type BackendError = {
  location: string;
  msg: string;
  path: string;
  type: string;
  value: string;
};

type AuthContextProps = {
  user: User | null;
  isAuth: boolean;
  error: null | BackendError[];
  loading: boolean;
  login: (data: Omit<UserFormData, "name">) => void;
  logout: () => void;
  signup: (data: UserFormData) => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextProps>(null!);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  // estados
  const [user, setUser] = useState<User | null>(null);
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState<null | BackendError[]>(null);
  const [loading, setLoading] = useState(false);

  // efectos
  useEffect(() => {
    if (error && error.length > 0) {
      const timer = setTimeout(() => {
        setError([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error]);
  useEffect(() => {
    checklogin();
  }, []);
  // funciones
  const login = async (data: Omit<UserFormData, "name">) => {
    try {
      const res = await loginRequest(data);
      console.log();
      setUser(res.data.userExist);
      setIsAuth(true);
    } catch (error) {
      console.log(error);
      if (error.response.data.message === "User not found") {
        setError([
          {
            msg: "User not found",
            location: "login",
            path: "email",
            type: "not_found",
            value: data.email,
          },
        ]);
      } else if (error.response.data.message === "Invalid password") {
        setError([
          {
            msg: "Incorrect password",
            location: "login",
            path: "password",
            type: "incorrect_password",
            value: data.password,
          },
        ]);
      } else {
        setError(error.response.data.errors);
      }
    }
  };
  const signup = async (data: UserFormData) => {
    console.log(data);
    try {
      const res = await registerRequest(data);
      console.log(res);
      setUser(res.data.newUser);
      setIsAuth(true);
    } catch (error) {
      console.log(error);
      setError(error.response.data.errors);
    }
  };
  const logout = async () => {
    try {
      await logoutRequest();
      Cookies.remove("token");
      setUser(null);
      setIsAuth(false);
    } catch (error) {
      console.log(error);
    }
  };

  const checklogin = async () => {
    const cookies = Cookies.get();
    if (!cookies.token) {
      setIsAuth(false);
      setLoading(false);
      setUser(null);
      return;
    }
    try {
      const res = await verifyRequest(cookies.token);
      console.log(res);
      if (!res.data) {
        setIsAuth(false);
        setLoading(false);
        return;
      }

      setUser(res.data);
      setIsAuth(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setIsAuth(false);
      setUser(null);
      setLoading(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{ user, isAuth, login, signup, logout, error, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
