import styled from 'styled-components';

export const TextArea = styled.textarea`
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  min-height: 150px;
  resize: vertical;
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