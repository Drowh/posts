import styled from "styled-components";

export const Button = styled.button`
  padding: 12px 24px;
  background-color: #2a6df4;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  align-self: flex-start;
  
  &:hover {
    background-color: #1a5cd4;
  }
  
  &:active {
    background-color: #1550c0;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;