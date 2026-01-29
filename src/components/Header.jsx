import React from 'react'
import {useNavigate} from 'react-router-dom'

const Header = () => {

  const navigator = useNavigate()

  function agregarEmpleado() {
    navigator("/agregar-empleado")
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand">Mi app React + Java</a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/empleados">Empleados</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/agregar-empleado" onClick={agregarEmpleado}>Agregar
                Empleado</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Header