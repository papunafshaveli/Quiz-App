import styled from "styled-components";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Game from "./pages/Game/Game";
import { useGetGameData } from "./hooks/useGetGameData";
import { useState } from "react";

import quizBg from "./images/quiz-bg.jpg";
import GameResult from "./pages/GameResult/GameResult";
import { FaHeart } from "react-icons/fa";

function App() {
  const { quizData, category, setCategory, getQuestion, isLoading } =
    useGetGameData();
  const [isCorrect, setIsCorrect] = useState<null | boolean>(null);
  const [wrongScore, setWrongScore] = useState<JSX.Element[]>([
    <FaHeart color="#007dc1" />,
    <FaHeart color="#007dc1" />,
    <FaHeart color="#007dc1" />,
  ]);
  const [correctScore, setCorrectScore] = useState(0);

  return (
    <AppContainer>
      <Routes>
        <Route
          path="/"
          element={<Home category={category} setCategory={setCategory} />}
        />
        <Route
          path="/game"
          element={
            <Game
              quizData={quizData}
              getQuestion={getQuestion}
              setIsCorrect={setIsCorrect}
              isCorrect={isCorrect}
              wrongScore={wrongScore}
              setWrongScore={setWrongScore}
              correctScore={correctScore}
              setCorrectScore={setCorrectScore}
              isLoading={isLoading}
            />
          }
        />
        <Route
          path="/game-result"
          element={
            <GameResult
              correctScore={correctScore}
              setWrongScore={setWrongScore}
              setIsCorrect={setIsCorrect}
              setCorrectScore={setCorrectScore}
            />
          }
        />
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${quizBg});
  background-repeat: no-repeat;
  background-size: cover;

  min-height: 100vh;
  background-color: azure;
`;
