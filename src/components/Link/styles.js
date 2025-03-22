import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";


const LinkStyles = css`
display: inline-flex;
  align-items: center;
  color: #2a6df4;
  text-decoration: none;
  font-weight: 600;
  margin-top: 24px;
  transition: color 0.3s ease;

  svg {
    margin-left: 8px;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #1c4fa3;

    svg {
      transform: translateX(1px);
    }
  }
`

export const SimpleLink = styled(Link)`${LinkStyles}`
  

export const NavigationLink = styled(NavLink)`${LinkStyles}`
  