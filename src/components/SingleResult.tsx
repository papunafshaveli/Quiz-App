import { NotificationContainer } from "./styles";

const SingleResult = ({ isCorrect }: { isCorrect: boolean | null }) => {
  console.log(isCorrect);
  return (
    <NotificationContainer isCorrect={isCorrect}>
      <h1>
        {isCorrect === true
          ? "You are Right"
          : isCorrect === false
          ? "You are Wrong"
          : ""}
      </h1>
    </NotificationContainer>
  );
};

export default SingleResult;
