import React from "react";
import QuizQuestion from "../../sections/quizQuestion/quizQuestion";
import NavQuiz from "../../sections/navQuiz/navQuiz";
import TitleQuiz from "../../components/titleQuiz/titleQuiz";
import "./quizJuego.css";
import { ProvPunt } from "../../hooks/usePuntaje";

const QuizJuego = () => {
  return (
    <>
      <TitleQuiz />
      <main className="all_container_options">
        <div className="container_options">
          <ProvPunt>
            <NavQuiz />
            <QuizQuestion />
          </ProvPunt>
        </div>
      </main>
    </>
  );
};

export default QuizJuego;
