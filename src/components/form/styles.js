import styled, { css } from "styled-components";
import { COLORS } from "../../styles";

export const FieldWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;

  ${({ isRow }) =>
    isRow &&
    css`
      align-items: center;
      flex-direction: row;
      input {
        margin-left: 0.5rem;
      }
    `};

  label {
    font-size: 14px;
  }
`;

export const FieldError = styled.small`
  color: ${COLORS.red};
  margin: 0.2rem 0;
`;

export const SubmitStyled = styled.input.attrs({ type: "submit" })`
  background-color: ${COLORS.militaryGreen};
  border-radius: 0;
  border: none;
  font-weight: 500;
  padding: 0.25rem 0.5rem;

  &:hover {
    background-color: ${COLORS.brass};
    cursor: pointer;
  }
`;
