import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 24px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

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

export const SubmitButton = styled.button`
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

export const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 24px;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: #2a6df4;
    border-radius: 2px;
  }
`;
