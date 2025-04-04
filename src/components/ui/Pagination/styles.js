import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  padding: 8px 12px;
  margin: 0 4px;
  border: 1px solid #ccc;
  background-color: ${({ isActive }) => (isActive ? '#007bff' : '#fff')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#000')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border-radius: 4px;

  &:disabled {
    background-color: #f5f5f5;
    color: #ccc;
  }
`;