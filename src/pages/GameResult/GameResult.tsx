import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { Dispatch, SetStateAction } from "react";
import { GameResultsContainer } from "./styles";

const GameResult = ({
  correctScore,
  setWrongScore,
  setIsCorrect,
  setCorrectScore,
}: {
  correctScore: number;
  setWrongScore: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean | null>>;
  setCorrectScore: Dispatch<SetStateAction<number>>;
}) => {
  const navigate = useNavigate();
  const handleStartAgain = () => {
    setWrongScore([
      <FaHeart key={1} color="#007dc1" />,
      <FaHeart key={2} color="#007dc1" />,
      <FaHeart key={3} color="#007dc1" />,
    ]);
    setIsCorrect(null);
    setCorrectScore(0);
    navigate("/");
  };
  return (
    <GameResultsContainer>
      <h1>
        You Collected <span>{correctScore}</span> Correct Answers
      </h1>
      <button onClick={handleStartAgain}>Start Again</button>
    </GameResultsContainer>
  );
};

export default GameResult;
