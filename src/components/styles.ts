import styled from "styled-components";
import { device } from "../devSizes/devSizes";

export const NotificationContainer = styled.div<{ $isCorrect: boolean | null }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  background-color: ${({ $isCorrect }) =>
    $isCorrect === true ? "green" : "red"};

  padding: 15px;

  border-radius: 5px;

  margin-bottom: 15px;

  @media ${device.tablet} {
    padding: 25px;
  }

  h2 {
    color: white;
    font-size: 2.4rem;
    font-weight: 700;
  }
`;
