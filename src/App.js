import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {
  // Definir la categoría y noticas
  const [categoria, guardarCategoria] = useState("");
  const [noticias, guardarNoticias] = useState([]);

  // API KEY
  const KEY = process.env.REACT_APP_KEY;

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${KEY}`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      guardarNoticias(noticias.articles);
    };
    consultarAPI();
  }, [categoria]);

  return (
    <Fragment>
      <Header titulo="NSE - News Search Engine" />
      <div className="container white">
        <Formulario guardarCategoria={guardarCategoria} />
      </div>
    </Fragment>
  );
}

export default App;
