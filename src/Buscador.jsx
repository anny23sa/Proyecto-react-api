import React, { useState } from "react";
 // definicion de las variables
const Buscador = ({ productos, setProductos }) => {
  const [busqueda, setBusqueda] = useState("");
  const [noResultados, setNoResultados] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // evento es igual al valor 

  const handleBusquedaChange = (e) => {
    const busqueda = e.target.value.toLowerCase();
    setBusqueda(busqueda);

    // Filtrar los productos por nombre
    const productosFiltrados = productos.filter((producto) =>
      producto.title.toLowerCase().includes(busqueda)
    );

    // Actualizar el estado de noResultados
    setNoResultados(productosFiltrados.length === 0);

    // Actualizar la lista de productos filtrados
    setProductos(productosFiltrados);

    if (productosFiltrados.length === 0) {
      // Programar la recarga de la página después de 5 segundos
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    }
  };

  const handleProductoSeleccionado = (producto) => {
    setProductoSeleccionado(producto);
    setBusqueda(producto.title.toLowerCase());
  };

  const handleLimpiar = () => {
    setProductoSeleccionado(null);
    setBusqueda("");
    // Recargar la página para restaurar los productos originales
    window.location.reload();
  };

  return (
    <div>
      <label htmlFor="busqueda">Buscar por nombre:</label>
      <input
        id="busqueda"
        type="text"
        placeholder="Buscar producto"
        className="form-control"
        value={busqueda}
        onChange={handleBusquedaChange}
      />
      {noResultados && <p>No se encontraron productos.</p>}
      {productoSeleccionado && (
        <p className="bg-red">
          Producto seleccionado: {productoSeleccionado.title}{" "}
          <button onClick={handleLimpiar}>Limpiar</button>
        </p>
      )}
      <ul>
        {productos.map((producto) => (
          <li
            key={producto.id}
            onClick={() => handleProductoSeleccionado(producto)}
            style={{ cursor: "pointer" }}
          >
            {producto.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Buscador;