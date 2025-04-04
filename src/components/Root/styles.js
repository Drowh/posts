import { NavLink } from "react-router-dom";
import styled from "styled-components";

// Color palette
const colors = {
  primary: "#3a86ff",
  secondary: "#ff006e",
  dark: "#14213d",
  light: "#f8f9fa",
  accent: "#fca311",
  hover: "#8338ec"
};

export const Menu = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 16px 24px;
  background: ${colors.light};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    padding: 12px;
  }
`;

export const MenuItem = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: ${colors.dark};
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 50%;
    background-color: ${colors.accent};
    transition: all 0.3s ease;
  }

  &.active {
    color: ${colors.primary};
    font-weight: 600;
    
    &:after {
      width: 80%;
      left: 10%;
    }
  }

  &:hover {
    color: ${colors.hover};
    background-color: rgba(58, 134, 255, 0.05);
    transform: translateY(-2px);
    
    &:after {
      width: 60%;
      left: 20%;
    }
  }
`;

// Optional additional components
export const MenuLogo = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.primary};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MenuButton = styled.button`
  background: ${colors.primary};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: ${colors.hover};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
