import styled, { css } from "styled-components";
import {ButtonStyles, COLORS} from "../../styles";

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
  
  .ProseMirror {
    min-height: 10rem;
    padding: 0.5rem;
  }
`;

export const FieldError = styled.small`
  color: ${COLORS.red};
  margin: 0.2rem 0;
`;

export const SubmitStyled = styled.input.attrs({ type: "submit" })`
 ${ButtonStyles};
  background-color: ${COLORS.militaryGreen};

  &:hover {
    background-color: ${COLORS.brass};
  }
`;
