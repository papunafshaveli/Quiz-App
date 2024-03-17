import styled from "styled-components";
import { device } from "../../devSizes/devSizes";

const GameResult = () => {
  return <GameResultsContainer>results</GameResultsContainer>;
};

export default GameResult;

const GameResultsContainer = styled.div`
  width: 340px;

  background-color: white;

  padding: 15px;

  border-radius: 5px;

  @media ${device.tablet} {
    width: 600px;
    padding: 25px;
  }
`;
