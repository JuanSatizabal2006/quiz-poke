import React, { useContext, useEffect, useState } from "react";
import { useSound } from "use-sound";
import ButtonQuiz from "../../components/buttonCustom/buttonQuiz";
import "./quizQuestion.css";
import { cargarPokemones } from "../../hooks/useQuiz";
import ButtonCustom from "../../components/buttonCustom/buttonCustom";
import { msgQuiz } from "../../helpers/msgQuiz";
import { puntajeContext } from "../../hooks/usePuntaje";
import LoadingCustom from "../../components/loadingCustom/loadingCustom";

import correctoAudio from "/public/audio/correcto.mp3";
import incorrectoAudio from "/public/audio/incorrecto.mp3";

/*
0 => INCORRECTO
1 => CORRECTO
2 => PREGUNTA
*/

const QuizQuestion = () => {
  document.title = "Quiz Pokemon"; //Cambiar el title de la pagina

  const [pokeTrue, setPokeTrue] = useState(undefined); //Pokemon a adivinar
  const [idOptions, setIdOptions] = useState([]); //Opciones de los botones
  const [estadoQuiz, setEstadoQuiz] = useState(2); //Estado que nos sirve para conocer en que momento se encuentra el usuario
  const { aumentarPuntaje } = useContext(puntajeContext); //Puntaje contexto
  const [load, setLoad] = useState(true); //Estado que maneja la pantalla de carga
  //Libreria para manejar el estado con facilidad
  const [playCorrecto] = useSound(correctoAudio, { volume: 0.1 }); 
  const [playIncorrecto] = useSound(incorrectoAudio, {volume : 0.1});

  useEffect(() => {
    cargar();
  }, []);

  //FUNCION PARA CARGAR LOS POKEMONES, SE DEJA POR FUERA PARA REUTILIZARLO EN EL BOTON
  const cargar = async () => {
    setLoad(true); //Definir que está cargando
    setEstadoQuiz(2); //Siempre definir el estado como 2 en estado pregunta
    //Obtencion de datos proveniente del hook personalizado
    const { pokemonTrue, arrayId } = await cargarPokemones();
    if (arrayId.length > 0) {
      setPokeTrue(pokemonTrue);
      setIdOptions(arrayId);
      setTimeout(() => {
        setLoad(false);
      }, 600);
    }
  };

  const clickButton = (e) => {
    if (e.target.id == pokeTrue.id) {
      //ACERTÓ
      playCorrecto(); //Reproducir efecto de sonido
      setEstadoQuiz(1); //Estado correcto
      aumentarPuntaje(); //Aumentar el puntaje alojado en el contexto
    } else {
      //ERRÓ
      playIncorrecto();
      setEstadoQuiz(0); //Estado incorrecto
    }
  };

  return (
    <>
      {load ? (
        <div className="container_load">
          <LoadingCustom text={"Cargando"} />{" "}
        </div>
      ) : (
        <div className="all_container_quiz">
          <div className="container_quiz">
            <div className="quiz_pokemon">
              <img
                src={pokeTrue ? pokeTrue.img : ""}
                alt="pokemon_quiz"
                className={`img_quiz ${estadoQuiz == 1 && "revelar"}`}
              />
              <div className="container_aviso">
                <p className={`pokemon_text ${estadoQuiz != 2 && "respuesta"}`}>
                  {msgQuiz(estadoQuiz)}
                </p>
                <i
                  className={`fa-solid fa-arrow-right icon_next ${
                    estadoQuiz != 1 ? "ocultar" : ""
                  }`}
                  onClick={() => cargar()}
                ></i>
                {/* BOTON PARA IR A LA SIGUIENTE PREGUNTA */}
              </div>
            </div>

            {/*<!--Opciones del quiz-->*/}
            <div className="quiz_options">
              {estadoQuiz === 0 && (
                <ButtonCustom texto={"Intenta de nuevo"} ruta={-1} />
              )}
              {idOptions &&
                estadoQuiz === 2 &&
                idOptions.map((value, index) => (
                  <ButtonQuiz
                    key={index}
                    texto={value.name}
                    id={value.id}
                    clickButton={clickButton}
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizQuestion;
