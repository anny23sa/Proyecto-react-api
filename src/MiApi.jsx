import React, { useState, useEffect } from "react";
import axios from "axios";
import Buscador from "./Buscador";

const ApiURL = "https://dummyjson.com/products";

const MiApi = () => {
  // Estado para los datos
  const [productos, setProductos] = useState([]);
  const [data, setData] = useState([]);

  // Función async para obtener los datos
  const getData = async () => {
    try {
      const response = await axios.get(ApiURL);
      setData(response.data.products);
      setProductos(response.data.products);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  // Efecto para cargar los datos
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="mb-5">
        <Buscador productos={productos} setProductos={setProductos} />
        {productos.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </div>
  );
};

export default MiApi;



