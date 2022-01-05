import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [terapeuta, setTerapeuta] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setTerapeuta(paciente.terapeuta);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validacion de el Form

    if ([nombre, terapeuta, email, fecha, sintomas].includes("")) {
      console.log("Todos los campos son necesarios");
      setError(true);
      return;
    }

    setError(false);

    //objeto de paciente

    const objetoPaciente = {
      nombre,
      terapeuta,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      //Editando el registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : paciente
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      //Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //Reiniciar el form
    setNombre("");
    setTerapeuta("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-3 my-10">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}
        <span className="text-blue-600 font-bold ">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        action=""
        className="mb-10 bg-white shadow-md rounded-xl py-10 px-5"
      >
        {error && <Error mensaje="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            htmlFor="paciente"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del paciente
          </label>
          <input
            className="rounded-xl border-2 w-full p-2 mt-2 placeholder-gray-400"
            type="text"
            name=""
            id="paciente"
            placeholder="Nombre del paciente"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="terapeuta"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del Terapeuta
          </label>
          <input
            className="rounded-xl border-2 w-full p-2 mt-2 placeholder-gray-400"
            type="text"
            name=""
            id="terapeuta"
            placeholder="Nombre del Terapeuta"
            value={terapeuta}
            onChange={(e) => setTerapeuta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="Email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            className="rounded-xl border-2 w-full p-2 mt-2 placeholder-gray-400"
            type="email"
            name=""
            id="Email"
            placeholder="Email De Contacto"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            ingreso
          </label>
          <input
            className="rounded-xl border-2 w-full p-2 mt-2 placeholder-gray-400"
            type="date"
            name=""
            id="ingreso"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            className="rounded-xl border-2 w-full p-2 mt-2 placeholder-gray-400"
            name=""
            id="sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <input
          className="transition-all rounded cursor-pointer hover:bg-blue-700 bg-blue-600 w-full p-3 text-white uppercase font-bold"
          value={paciente.id ? "Editar paciente" : "Agregar paciente"}
          type="submit"
          name=""
          id=""
        />
      </form>
    </div>
  );
};

export default Formulario;
