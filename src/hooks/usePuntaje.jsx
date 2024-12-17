import { createContext, useState } from "react";

export const puntajeContext = createContext();

export const ProvPunt = ({ children }) => {
  const [puntaje, setPuntaje] = useState(0); //Valor del contexto a cambiar
  let acumular = puntaje;

  //Funcion para aumentar el puntaje en el contexto
  const aumentarPuntaje = () => {
    acumular++;
    setPuntaje(acumular);
  };

  return (
    <puntajeContext.Provider value={{ puntaje, aumentarPuntaje }}>
      {children}
    </puntajeContext.Provider>
  );
};
