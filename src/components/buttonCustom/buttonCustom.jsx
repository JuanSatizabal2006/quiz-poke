import React from "react";
import { Link } from "react-router-dom";
import "./buttonCustom.css"

const ButtonCustom = ({ruta, texto}) => {
  return (
    <Link className="button_quiz" to={ruta}>
      {texto}
    </Link>
  );
};

export default ButtonCustom;
