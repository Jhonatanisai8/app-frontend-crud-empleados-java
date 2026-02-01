import axios from 'axios'

const REST_API_BASE_URL = 'http://localhost:8080/api/v1/empleados'
export const listaEmpleados = () => {
  return axios.get(REST_API_BASE_URL)
}

export const crearEmpleado = (empleado) => {
  return axios.post(REST_API_BASE_URL, empleado)
}