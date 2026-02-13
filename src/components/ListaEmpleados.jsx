import React, {useEffect, useState} from 'react'
import {listaEmpleados} from "../services/EmpleadoService.js";

const ListaEmpleados = () => {
  const [empleados, setEmpleados] = useState([])
  const [error, setError] = useState(null);
  useEffect(() => {
    listaEmpleados()
      .then((response) => {
        setEmpleados(response.data)
      }).catch((error) => {
      setError("No se pudo conectar con el servidor-")
      console.log(error)
    })
  }, []);

  function actualizarEmpleado(id) {
    navigator(`/editar-empleado/${id}`)

  }

  return (
    <div className="container mt-3">
      <h2>Lista de Empleados:</h2>
      <table className="table table-bordered">
        <thead>
        <tr>
          <th>ID</th>
          <th>NOMBRE</th>
          <th>APELLIDO</th>
          <th>EMAIL</th>
          <th>ACCIONES</th>
        </tr>
        </thead>
        <tbody>
        {
          error ? (
            <tr>
              <td colSpan="4" className="text-center">
                <strong>Error: </strong>{error}
              </td>
            </tr>
          ) : (
            empleados.map(empleado => (
              <tr key={empleado.id}>
                <td>{empleado.id}</td>
                <td>{empleado.nombre}</td>
                <td>{empleado.apellido}</td>
                <td>{empleado.email}</td>
                <td>
                  <button type="button" className=" btn btn-primary"
                          onClick={() => actualizarEmpleado(empleado.id)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ListaEmpleados