import React from 'react'

const ListaEmpleados = () => {

  const miData = [
    {
      "idEmpleado": 1,
      "nombre": "Samir Elias",
      "apellido": "Correa Salvador",
      "email": "samirelias@gmail.com",
    },
    {
      "idEmpleado": 2,
      "nombre": "Elvis Alonso",
      "apellido": "Correa Salvador",
      "email": "elvisalonso@gmail.com",
    },
    {
      "idEmpleado": 3,
      "nombre": "Diana Susena",
      "apellido": "Correa Salvador",
      "email": "dianasusena@gmail.com",
    }
  ]
  return (
    <div className="container">
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
          miData.map(empleado =>
            <tr key={empleado.idEmpleado}>
              <td>{empleado.idEmpleado}</td>
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