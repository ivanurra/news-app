import React, { Fragment } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {
  return (
    <Fragment>
      <Header titulo="NSE - News Search Engine" />
      <div className="container white">
        <Formulario />
      </div>
    </Fragment>
  );
}

export default App;
