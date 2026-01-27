import axios from 'axios'

const REST_API_BASE_URL = 'http://localhost:8000/api/v1/empleados'
export const listaEmpleados = () => {
  return axios.get(REST_API_BASE_URL)
}