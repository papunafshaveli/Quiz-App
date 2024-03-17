import styled from "styled-components";
import { device } from "../../devSizes/devSizes";

export const GameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GameModal = styled.div`
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

    @media ${device.tablet} {
      font-size: 3.2rem;
      margin-bottom: 30px;
    }
  }
`;

export const AnswerButton = styled.button`
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

  cursor: pointer;

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

export const ButtonWrapper = styled.div`
  button {
    padding: 0.5rem;
    margin-left: 10px;

    background-color: #007dc1;
    color: aliceblue;

    border: none;
    border-radius: 8px;

    font-size: 1.8rem;

    cursor: pointer;

    &:hover {
      transform: scale(1);
      background-color: #70c6fb;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrongsWrapper = styled.div`
  display: flex;
  gap: 5px;
  span {
    color: red;
    font-size: 1.6rem;

    &:last-child {
      color: #004970;
    }
  }
`;

export const CorrectsWrapper = styled.div`
  display: flex;
  gap: 8px;
  span {
    color: green;
    font-size: 1.6rem;

    &:last-child {
      color: #004970;
    }
  }
`;

export const ScoreWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
