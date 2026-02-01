import React, {useState} from "react";
import {crearEmpleado} from "../services/EmpleadoService.js";
import {useNavigate} from "react-router-dom";

const Empleado = () => {
  const [nombre, setNombre] = useState()
  const [apellido, setApellido] = useState()
  const [email, setEmail] = useState()

  const navigator = useNavigate()

  function guardarEmpleado(e) {
    e.preventDefault()
    const empleado = {nombre, apellido, email}
    crearEmpleado(empleado)
      .then(response => {
        console.log(response.data)
        navigator("/empleados")
      })
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="card ">
          <div className="text-center card-header">
            DATOS DEL EMPLEADO
          </div>
          <div className="card-body">
            <h5 className="card-title">REGISTRO DE EMPLEADO</h5>
            <form>
              <div className="mb-2">
                <label
                  className="form-label">
                  Nombres
                </label>
                <input type="text"
                       className="form-control"
                       id="input-nombre"
                       placeholder="Ingresa el nombre del empleado"
                       name='nombre'
                       value={nombre}
                       onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label
                  className="form-label">
                  Apellidos
                </label>
                <input type="text"
                       className="form-control"
                       id="input-apellido"
                       placeholder="Ingresa los apellidos del empleado"
                       name='apellido'
                       value={apellido}
                       onChange={(e) => setApellido(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label
                  className="form-label">
                  Email
                </label>
                <input type="email"
                       className="form-control"
                       id="input-email"
                       placeholder="Ingresa el email del empleado"
                       name='email'
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button type="submit"
                      className="btn btn-primary"
                      onClick={guardarEmpleado}>
                Guardar Empleado
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
export default Empleado