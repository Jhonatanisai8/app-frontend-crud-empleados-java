import './App.css'
import HolaMundo from "./HolaMundo.jsx";
import ListaEmpleados from "./components/ListaEmpleados.jsx";
import Header from "./components/Header.jsx";

function App() {

  return (
    <div className="App">
      <Header></Header>
      <ListaEmpleados></ListaEmpleados>
    </div>
  )
}

export default App
