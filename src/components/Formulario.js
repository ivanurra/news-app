import React from "react";
import styles from './styles/Formulario.module.scss';

const Formulario = () => {
  return (
    <div className={`${styles.buscador} row`}>
      <div className="col s12 m8 offset-m2">
        <form>
          <h4 className={styles.heading}>Encuentra noticias por Categoría</h4>
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
