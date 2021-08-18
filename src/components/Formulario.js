import React from "react";
import useSelect from "./hooks/useSelect";
import styles from "./styles/Formulario.module.scss";

const Formulario = () => {
  // Utilizar custom hook
  const [categoria, SelectNoticias] = useSelect();

  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form>
          <h4 className={styles.heading}>Encuentra noticias por Categoría</h4>
          <SelectNoticias/>
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
