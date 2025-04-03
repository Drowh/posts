import { Link } from "react-router-dom";
import styled from "styled-components";

// Color palette
const colors = {
  primary: "#2a6df4",
  secondary: "#f8f9fa",
  text: "#333333",
  accent: "#ff7e5f",
  lightGray: "#e9ecef",
  darkGray: "#495057",
  shadow: "rgba(0, 0, 0, 0.1)"
};

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px ${colors.shadow};
  transition: all 0.3s ease;
  margin-bottom: 24px;
  max-width: 800px;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }
`;

export const Image = styled.img`
  height: 300px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 280px;
    height: auto;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.2));
    transition: all 0.3s ease;
  }

  &:hover::after {
    background: linear-gradient(to bottom, transparent 70%, rgba(0, 0, 0, 0.3));
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const Content = styled.div`
  padding: 10px;
  flex: 1;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${colors.text};
  margin: 0 0 12px 0;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 3px;
    background: ${colors.accent};
    border-radius: 2px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${colors.darkGray};
  line-height: 1.6;
  margin-bottom: 16px;
`;

export const DetailLink = styled(Link)`
  color: ${colors.primary};
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  margin-top: 16px;
  position: relative;
  padding: 6px 0;
  transition: all 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${colors.primary};
    transition: width 0.3s ease;
  }

  &:hover {
    color: ${colors.accent};

    &::after {
      width: 100%;
      background-color: ${colors.accent};
    }

    svg {
      transform: translateX(4px);
    }
  }

  svg {
    margin-left: 6px;
    transition: transform 0.2s ease;
  }
`;