import React, { useState, useEffect } from "react";
import MiApi from "./MiApi"; // Cambié la ruta de importación
import "bootstrap/dist/css/bootstrap.min.css";


import './App.css';
import Interfaz from "./interfaz";


const App = () => {
  return (
    <div>
      <Interfaz>
        <h1 className="text-center">Venta de Productos</h1>
        <MiApi />
      </Interfaz>
    </div>
  )
}

export default App;





