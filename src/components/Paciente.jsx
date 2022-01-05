

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombre, terapeuta, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () =>{
    const respuesta = confirm('Deseas eliminar el paciente?');

    if(respuesta) {
      eliminarPaciente(id) 
    }
  }

  return (
    <div className="m-3 bg-white shadow-md px-5 py-10 rounded-xl ">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{terapeuta}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: <span className="font-normal normal-case"> {sintomas}</span>
      </p>
      <div className="flex justify-between">
        <button
          type="button"
          onClick={() => setPaciente(paciente)}
          className="py-2 px-10 bg-green-600 hover:bg-green-900 transition-all font-bold text-white uppercase rounded-lg"
        >
          Editar
        </button>
        <button
          type="button"
          className="ml-1 py-2 px-10 bg-red-600 hover:bg-red-900 transition-all font-bold text-white uppercase rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente
