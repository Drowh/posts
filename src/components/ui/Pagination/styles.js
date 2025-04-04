import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: ${({ isActive }) => (isActive ? "#3498db" : "#fff")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#333")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ isActive }) => (isActive ? "#3498db" : "#f0f0f0")};
  }
`;
