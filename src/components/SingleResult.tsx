import { NotificationContainer } from "./styles";

const SingleResult = ({ isCorrect }: { isCorrect: boolean | null }) => {
  return (
    <NotificationContainer $isCorrect={isCorrect}>
      <h2>
        {isCorrect === true
          ? "Correct Answer"
          : isCorrect === false
          ? "Wrong Answer"
          : ""}
      </h2>
    </NotificationContainer>
  );
};

export default SingleResult;
