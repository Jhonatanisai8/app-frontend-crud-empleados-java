import './App.css'
import ListaEmpleados from "./components/ListaEmpleados.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Bienvenida from "./components/Bienvenida.jsx";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header>
        </Header>
        <Routes>
          <Route path='/' element={<Bienvenida/>}></Route>
          <Route path='/empleados' element={<ListaEmpleados/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App
