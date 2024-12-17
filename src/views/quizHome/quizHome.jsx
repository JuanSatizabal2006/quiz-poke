import React from "react";
import "./quizHome.css";
import TitleQuiz from "../../components/titleQuiz/titleQuiz";
import ButtonCustom from "../../components/buttonCustom/buttonCustom";

const QuizHome = () => {
  return (
    <>
      <TitleQuiz />
      <div className="all_container">
        <div className="container_button">
          <ButtonCustom ruta={"/quiz/juego"} texto={"Empezar juego"} />
        </div>
      </div>
    </>
  );
};

export default QuizHome;
