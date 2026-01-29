import React, {useEffect, useState} from 'react'
import {listaEmpleados} from "../services/EmpleadoService.js";

const ListaEmpleados = () => {
  const [empleados, setEmpleados] = useState([])
  useEffect(() => {
    listaEmpleados()
      .then((response) => {
        setEmpleados(response.data)
      }).catch((error) => {
      console.log(error)
    })
  }, []);
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
        </tr>
        </thead>
        <tbody>
        {
          empleados.map(empleado =>
            <tr key={empleado.id}>
              <td>{empleado.id}</td>
              <td>{empleado.nombre}</td>
              <td>{empleado.apellido}</td>
              <td>{empleado.email}</td>
            </tr>)
        }
        </tbody>
      </table>
    </div>
  )
}

export default ListaEmpleados