import styled, { css } from "styled-components";
import { FieldWrapperStyled } from "../form";
// import {COLORS} from "../../styles";

export const GuestEditWrapper = styled.div`
  form {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0;
    max-width: 100%;
  }

  label {
    font-size: 12px;
  }

  ${FieldWrapperStyled} {
    margin: 0;
  }
`;

export const GuestPotluckWrapper = styled.div`
  ${({ isEdit }) => isEdit && css`
    display: flex;
  `}
`;
