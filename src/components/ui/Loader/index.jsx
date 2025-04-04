import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 9999;
`;

const LoaderSpinner = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
  border: 6px solid rgba(0, 0, 0, 0.2);
  border-top-color: #3498db;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
  box-shadow: 0 0 20px rgba(52, 152, 219, 0.5);
`;

const LoaderPulse = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: rgba(52, 152, 219, 0.3);
  animation: ${pulse} 1.5s infinite;
`;

export const Loader = () => (
  <LoaderWrapper>
    <LoaderPulse />
    <LoaderSpinner />
  </LoaderWrapper>
);
