import styled, { css } from "styled-components";
import { COLORS } from "../../styles";

export const NavWrapper = styled.nav`
  align-content: center;
  align-items: center;
  background-color: ${COLORS.brass};
  display: flex;
  justify-content: center;
`;

const NavLinkActiveStyles = css`
  background-color: ${COLORS.sand};
  cursor: pointer;
`;

const NavLinkStyles = css`
  color: ${COLORS.darkerGreen};
  text-decoration: none;

  &:hover {
    ${NavLinkActiveStyles};
  }
`;

export const NavItem = styled.div`
  padding: 0.5rem;
  ${NavLinkStyles};

  a {
    ${NavLinkStyles};
  }
  
  ${({ isActive }) => isActive && NavLinkActiveStyles };
`;
