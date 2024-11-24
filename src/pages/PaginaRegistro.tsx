import { useForm } from "react-hook-form";
import { registro as registerUser } from "../api";
import animal_registro from "../images/animal_registro.png";

interface RegisterFormInputs {
  name: string;
  lastname: string;
  email: string;
  password: string;
}

const PaginaRegistro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const onSubmit = async (data: RegisterFormInputs) => {
    try {
      await registerUser(data);
      console.log("Registro exitoso");
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  return (
    <div className="flex h-screen">
      {/* Panel izquierdo */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <h1 className="text-4xl font-bold mb-6">¡Bienvenido PetLover!</h1>
        <p className="text-lg text-center mb-6">
          Regístrate como usuario para empezar con PawJourney
        </p>
        <img
          src={animal_registro}
          alt="Logo de registro"
          className="w-60 h-60"
        />
      </div>

      {/* Panel derecho */}
      <div className="w-1/2 bg-[#947575] flex justify-center items-center p-10">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-10 rounded-lg shadow-lg space-y-6 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold text-center">Registrarse a PawJourney</h2>
          <div>
            <label className="block mb-1">Nombres</label>
            <input
              {...register("name", { required: "El nombre es requerido" })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1">Apellidos</label>
            <input
              {...register("lastname", { required: "El apellido es requerido" })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm">{errors.lastname.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: "El email es requerido" })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block mb-1">Contraseña</label>
            <input
              type="password"
              {...register("password", {
                required: "La contraseña es requerida",
              })}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#a17472] text-white py-3 rounded-lg font-bold"
          >
            Registrarse
          </button>
          <div className="text-center text-gray-500 my-2">o</div>
          <button
            type="button"
            className="w-full bg-white border border-gray-300 py-3 rounded-lg flex items-center justify-center"
          >
            <img
              src="/path/to/google-icon.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Registrarse con Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaginaRegistro;
