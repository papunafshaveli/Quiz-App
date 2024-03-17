import styled from "styled-components";
import { device } from "../devSizes/devSizes";

export const NotificationContainer = styled.div<{ isCorrect: boolean | null }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  background-color: #e3b26d;

  padding: 15px;

  border-radius: 5px;

  margin-bottom: 15px;

  @media ${device.tablet} {
    padding: 25px;
  }

  h1 {
    color: ${({ isCorrect }) => (isCorrect === true ? "green" : "red")};
  }
`;
