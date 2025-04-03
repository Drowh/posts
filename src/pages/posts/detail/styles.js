import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PostImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  max-height: 500px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 24px;
`;

export const PostTitle = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 24px;
  line-height: 1.2;
`;

export const PostContent = styled.div`
  font-size: 18px;
  line-height: 1.6;
  color: #444;

  p {
    margin-bottom: 20px;
  }
`;

export const WrapperLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
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

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
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

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 5px;
  background-color: #f0f0f0;
  transition: color 0.3s ease;

  &:hover {
    color: white;
    background-color:rgb(232, 3, 3);
    transition: background-color 0.6s ease;
  }
`;

export const ModalBody = styled.div`
  font-size: 16px;
  color: #444;
  line-height: 1.5;
`;
