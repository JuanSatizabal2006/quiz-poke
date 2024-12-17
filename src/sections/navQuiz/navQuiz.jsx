import React, { useContext } from "react";
import "./navQuiz.css";
import { puntajeContext } from "../../hooks/usePuntaje";
import { Link } from "react-router-dom";

const NavQuiz = () => {
  const { puntaje } = useContext(puntajeContext);

  return (
    <header className="container_header">
      {/*<!--Informacion superior con el puntaje y la opcion de regresar al inicio-->*/}
      <p className="item_puntaje">
        Puntaje: <span className="item_puntaje_num">{puntaje}</span>
      </p>
      <Link to={"/"} className="item_link">
        <i className="fa-solid fa-house item_puntaje" id="icon_again"></i>
      </Link>
    </header>
  );
};

export default NavQuiz;
