import styled from "styled-components";
import { device } from "../../devSizes/devSizes";

export const GameResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 340px;

  background-color: #0ca5d4;

  padding: 15px;

  border-radius: 5px;

  @media ${device.tablet} {
    width: 600px;
    padding: 25px;
  }

  h1 {
    text-align: center;
    color: wheat;
    font-size: 2.4rem;
  }

  button {
    width: 70%;

    font-size: 2.4rem;

    padding: 1rem;

    background-color: #0877bc;
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
  }
`;
