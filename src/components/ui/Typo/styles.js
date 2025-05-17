import styled from "styled-components";

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin-bottom: 32px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: #2a6df4;
    border-radius: 2px;
  }
`;

export const TextContent = styled.span`
  font-weight: 700;
  color: #333;
  text-align: center;
  position: relative;
`;
