import React from 'react'

const Bienvenida = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card mb-5 text-center" style={{width: '25rem'}}>
        <div className="card-body">
          <h5 className="card-title">Java + React</h5>
          <p className="card-text">Aplicacion usando tecnologias: <strong>Java</strong> para el backend
            + <strong>React</strong> para el frontend</p>
          <a href="/empleados" className="btn btn-primary">Ver Empleados</a>
        </div>
      </div>
    </div>
  )
}
export default Bienvenida