import './App.css'
import HolaMundo from "./HolaMundo.jsx";
import ListaEmpleados from "./components/ListaEmpleados.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <div className="App">
      <Header></Header>
      <ListaEmpleados></ListaEmpleados>
      <Footer></Footer>
    </div>
  )
}

export default App
