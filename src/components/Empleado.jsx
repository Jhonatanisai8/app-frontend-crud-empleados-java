import React, {useState} from "react";

const Empleado = () => {
  const [nombre, setNombre] = useState()
  const [apellido, setApellido] = useState()
  const [email, setEmail] = useState()

  function manejarNombre(e) {
    setNombre(e.target.value)
  }

  function manejarApellido(e) {
    setApellido(e.target.value)
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
                       id="input-email"
                       placeholder="Ingresa el nombre del empleado"
                       name='nombre'
                       value={nombre}
                       onChange={manejarNombre}
                />
              </div>
              <div className="mb-2">
                <label
                  className="form-label">
                  Nombres
                </label>
                <input type="text"
                       className="form-control"
                       id="input-email"
                       placeholder="Ingresa los apellidos del empleado"
                       name='apellido'
                       value={apellido}
                       onChange={manejarApellido}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="card-footer text-muted">
            2 days ago
          </div>
        </div>
      </div>
    </div>
  )
}
export default Empleado