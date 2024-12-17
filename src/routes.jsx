import React from "react";
import { Route, Routes } from "react-router-dom";
import QuizHome from "./views/quizHome/quizHome";
import QuizJuego from "./views/quizJuego/quizJuego";

const RoutesCustom = () => {
  return (
    <Routes>
      <Route path="/" element={<QuizHome />} />
      <Route path="/quiz/juego" element={<QuizJuego />} />
    </Routes>
  );
};

export default RoutesCustom;