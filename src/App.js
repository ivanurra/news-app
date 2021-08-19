import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {
  // Definir la categoría y noticas
  const [categoria, guardarCategoria] = useState("");

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

// API NEWS
// http://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=API_KEY
// API_KEY = process.env.API_KEY;
