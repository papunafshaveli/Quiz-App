import styled from "styled-components";
import arrayShuffle from "array-shuffle";
import { device } from "../../devSizes/devSizes";
const Game = ({
  quizData,
  getQuestion,
  isCorrect,
  setIsCorrect,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  quizData: any;
  getQuestion: () => void;
  isCorrect: boolean | null;
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean | null>>;
}) => {
  const answers = arrayShuffle([
    ...quizData.incorrect_answers,
    quizData.correct_answer,
  ]);

  const handleNextQuestion = () => {
    getQuestion();
  };

  const handleCheck = (answer: string) => {
    const isAnswerCorrect = answer === quizData.correct_answer;
    setIsCorrect(isAnswerCorrect);
  };

  console.log(isCorrect);

  return (
    <GameContainer>
      <GameModal>
        <h1 dangerouslySetInnerHTML={{ __html: quizData.question }} />
        {answers.map((answer, index) => (
          <AnswerButton
            key={index}
            dangerouslySetInnerHTML={{ __html: answer }}
            onClick={() => handleCheck(answer)}
          />
        ))}
        <button onClick={handleNextQuestion}>Next Question</button>
      </GameModal>
    </GameContainer>
  );
};

export default Game;

const GameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GameModal = styled.div`
  width: 340px;

  background-color: white;

  padding: 15px;

  border-radius: 5px;

  @media ${device.tablet} {
    width: 600px;
    padding: 25px;
  }
  h1 {
    text-align: center;
    font-size: 1.6rem;

    color: #1c87c9;

    margin-bottom: 20px;
  }
`;

const AnswerButton = styled.button`
  width: 100%;
  padding: 1rem;

  margin-bottom: 15px;
  background-color: #4991be;
  color: white;

  border: none;
  border-radius: 4px;

  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    background-color: white;
    color: #1c87c9;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
      rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
      rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
      rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
`;
