import { Link, useNavigate } from "react-router-dom";
import Error from "../components/Error";
import { useForm } from "react-hook-form";
import { UserFormData } from "../types";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";
import AuthImage2 from "../img/Authentication2.svg";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>();

  const { signup, isAuth, error } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/events");
    }
  }, [isAuth]);

  const registerUser = (data: UserFormData) => {
    signup(data);
    toast("Usuario Logueado satisfactoriamente", {
      type: "success",
      closeButton: false,
    });
  };

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div>
        <img src={AuthImage2} alt="Auth1" className="w-3xl px-12" />
      </div>
      <div className="max-w-md rounded-md bg-white p-10 shadow-2xl outline-offset-4 outline-solid dark:bg-gray-800">
        <h1 className="mb-5 text-center text-2xl font-bold dark:text-white">
          Register
        </h1>
        {error &&
          error.map((err, index) => (
            <div
              key={index}
              className="my-4 bg-red-600 p-2 font-bold text-white"
            >
              {err.msg}
            </div>
          ))}
        <form onSubmit={handleSubmit(registerUser)}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="pb-6 text-sm font-bold uppercase dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="my-2 w-full rounded-md border border-gray-500 bg-zinc-600 px-4 py-2 text-white"
              placeholder="Name"
              {...register("name", {
                required: "El Nombre es obligatorio",
              })}
            />
            {errors.name && <Error>{errors.name.message?.toString()}</Error>}
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="text-sm font-bold uppercase dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="my-2 w-full rounded-md border border-gray-500 bg-zinc-600 px-4 py-2 text-white"
              placeholder="Email"
              {...register("email", {
                required: "El Email es obligatorio",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                  message: "El Email no es válido",
                },
              })}
            />
            {errors.email && <Error>{errors.email.message?.toString()}</Error>}
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="text-sm font-bold uppercase dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="my-2 w-full rounded-md border border-gray-500 bg-zinc-600 px-4 py-2 text-white"
              placeholder="Password"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener al menos 8 caracteres",
                },
              })}
            />
            {errors.password && (
              <Error>{errors.password.message?.toString()}</Error>
            )}
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer rounded-md bg-zinc-500 p-3 font-bold text-white uppercase transition-colors hover:bg-zinc-700"
          >
            Register
          </button>
          <p className="mt-3 flex justify-between gap-x-2 dark:text-white">
            Ya tienes cuenta?{" "}
            <Link to="/login" className="text-sky-400">
              Inicia sesión aqui
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
