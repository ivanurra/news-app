import React from "react";
import useSelect from "./hooks/useSelect";
import styles from "./styles/Formulario.module.scss";

const Formulario = ({ guardarCategoria }) => {
  const OPCIONES = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];

  // Utilizar custom hook
  const [categoria, SelectNoticias] = useSelect("general", OPCIONES);

  // submit al form, pasar categoría a app.js
  const buscarNoticias = (e) => {
    e.preventDefault();

    guardarCategoria();
  };

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form>
          <h4 className={styles.heading}>Encuentra noticias por Categoría</h4>
          <SelectNoticias />
          <div className="input-field col s12">
            <input
              type="submit"
              className={`${styles.btn_block} btn-large amber darken-2`}
              value="Buscar"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formulario;
