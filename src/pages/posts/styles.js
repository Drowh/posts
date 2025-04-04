import styled from "styled-components";
import { Input } from "../../components/ui/Input";

export const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const SortContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SortLabel = styled.label`
  font-size: 16px;
  color: #333;
`;

export const SortSelect = styled.select`
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #3498db;
    box-shadow: 0 0 4px rgba(52, 152, 219, 0.5);
  }
`;

export const InputFilter = styled(Input)`
  width: 200px;
`;
