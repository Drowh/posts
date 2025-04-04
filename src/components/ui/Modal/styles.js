import styled from "styled-components";
import { Button } from "../../../components/ui/button";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 500px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 20px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 5px;

  h2 {
    font-size: 24px;
    color: #333;
    margin: 0;
  }
`;

export const ModalBody = styled.div`
  font-size: 16px;
  color: #444;
  line-height: 1.5;
`;

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ButtonYes = styled(Button)`
  &:hover {
    background-color: rgb(232, 3, 3);
  }
`;