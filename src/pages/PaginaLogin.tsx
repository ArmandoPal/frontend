import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../api"; // Importa tu función de login
import { useNavigate } from "react-router-dom"; // Hook para redirección
import animal from "../images/animal.png";

interface LoginFormInputs {
  email: string;
  password: string;
}

const PaginaLogin: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const navigate = useNavigate(); // Inicializa el hook de redirección

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      // Llama a tu API de login
      await login(data.email, data.password);
      console.log("Inicio de sesión exitoso");
      navigate("/principal");
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      navigate("/principal");
    }
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="w-1/2 bg-white flex flex-col justify-center px-20">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Ingresar a PawJourney</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-600">Email</label>
            <input
              {...register("email", { required: "El email es requerido" })}
              type="email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="example@gmail.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-2 text-gray-600">Password</label>
            <input
              {...register("password", { required: "La contraseña es requerida" })}
              type="password"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="********"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#A67B6F] text-white p-3 rounded text-lg hover:bg-[#8E655D] transition"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-4 text-gray-500">o</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button className="w-full flex items-center justify-center border border-gray-300 p-3 rounded hover:bg-gray-100 transition">
          <img alt="" />
          Ingresar con Google
        </button>
      </div>

      <div className="w-1/2 bg-[#947575] flex flex-col justify-center items-center text-white">
        <div className="bg-white text-[#8E655D] rounded-full py-6 px-12 mb-4 shadow-lg text-center">
          <h2 className="text-4xl font-bold">Bienvenido de vuelta</h2>
        </div>

        <p className="text-lg text-center">
          Inicia sesión para empezar a usar PawJourney 🏠
        </p>

        <img
          src={animal}
          className="w-48 h-48 object-contain"
          alt="Animal"
        />
      </div>
    </div>
  );
};

export default PaginaLogin;
