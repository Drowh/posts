import styled from 'styled-components';

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: #2a6df4;
    box-shadow: 0 0 0 2px rgba(42, 109, 244, 0.2);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;