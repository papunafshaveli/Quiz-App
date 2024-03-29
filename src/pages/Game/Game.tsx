import arrayShuffle from "array-shuffle";
import { Dispatch, SetStateAction, useEffect } from "react";
import SingleResult from "../../components/SingleResult";
import {
  AnswerButton,
  ButtonWrapper,
  CorrectsWrapper,
  GameContainer,
  GameModal,
  ScoreWrapper,
  Wrapper,
  WrongsWrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";

const Game = ({
  quizData,
  getQuestion,
  isCorrect,
  setIsCorrect,
  wrongScore,
  setWrongScore,
  correctScore,
  setCorrectScore,
  isLoading,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  quizData: any;
  getQuestion: () => void;
  isCorrect: boolean | null;
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean | null>>;
  wrongScore: JSX.Element[];
  setWrongScore: React.Dispatch<React.SetStateAction<JSX.Element[]>>;
  correctScore: number;
  setCorrectScore: Dispatch<SetStateAction<number>>;
  isLoading: boolean;
}) => {
  const answers = arrayShuffle([
    ...quizData.incorrect_answers,
    quizData.correct_answer,
  ]);

  const handleNextQuestion = () => {
    quizData && getQuestion();
    setIsCorrect(null);
  };

  const handleCheck = (answer: string) => {
    const isAnswerCorrect = answer === quizData.correct_answer;
    setIsCorrect(isAnswerCorrect);
  };

  useEffect(() => {
    if (isCorrect === true) {
      setCorrectScore((prev: number) => prev + 1);
    }
    if (isCorrect === false) {
      setWrongScore((prev: JSX.Element[]) => prev.slice(1));
    }
  }, [isCorrect, setCorrectScore, setWrongScore]);

  const showNotification = isCorrect !== null;

  const navigate = useNavigate();

  useEffect(() => {
    if (wrongScore.length < 1) {
      navigate("/game-result");
    }
  }, [navigate, wrongScore]);

  return (
    <GameContainer>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <GameModal>
          {showNotification ? (
            <SingleResult isCorrect={isCorrect} />
          ) : (
            <>
              <h1 dangerouslySetInnerHTML={{ __html: quizData.question }} />
              {answers.map((answer, index) => (
                <AnswerButton
                  key={index}
                  dangerouslySetInnerHTML={{ __html: answer }}
                  onClick={() => handleCheck(answer)}
                />
              ))}
            </>
          )}
          <Wrapper>
            <ScoreWrapper>
              <WrongsWrapper>
                {wrongScore.map((heart, index) => (
                  <span key={index}>{heart}</span>
                ))}
              </WrongsWrapper>
              <CorrectsWrapper>
                <span>correct</span> <span>{correctScore}</span>
              </CorrectsWrapper>
            </ScoreWrapper>
            <ButtonWrapper>
              <button onClick={handleNextQuestion}>
                {isCorrect !== null ? "Next Question" : "Change Question"}
              </button>
            </ButtonWrapper>
          </Wrapper>
        </GameModal>
      )}
    </GameContainer>
  );
};

export default Game;
