import styled from "styled-components";
import { device } from "../../devSizes/devSizes";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 30px;

  label {
    color: white;
    font-size: 2.4rem;
    @media ${device.tablet} {
      font-size: 3.2rem;
    }
  }

  select {
    border: 1px solid #999;

    font-size: 1.6rem;

    color: #1c87c9;
    background-color: #eee;

    border-radius: 5px;

    box-shadow: 4px 4px #ccc;

    cursor: pointer;

    @media ${device.tablet} {
      font-size: 2.4rem;
      padding: 1rem;
    }
  }
`;

export const StartButton = styled.button`
  width: 70%;
  max-width: 375px;

  padding: 1rem 0;

  color: #1c87c9;
  font-size: 1.6rem;

  border-radius: 5px;
  border: none;

  cursor: pointer;

  &:hover {
    background-color: #1c87c9;
    color: white;
    font-weight: 700;
  }

  @media ${device.tablet} {
    font-size: 2.4rem;
  }
`;
