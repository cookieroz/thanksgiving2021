import styled, { css } from "styled-components";
import { FieldWrapperStyled } from "../form";
import { COLORS, ThanksgivingButton } from "../../styles";

const GuestRowCenterStyles = css`
  align-items: center;
  display: flex;
  max-width: 100%;

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const GuestEditWrapper = styled.div`
  form {
    ${GuestRowCenterStyles};
    margin: 0;
  }

  label,
  input {
    font-size: 12px;
  }

  ${FieldWrapperStyled} {
    margin: 0 0.2rem 0 0;
  }

  @media screen and (max-width: 600px) {
    label,
    input {
      max-width: 100px;
    }
  }
`;

export const GuestPotluckWrapper = styled.div`
  ${({ isEdit }) =>
    isEdit &&
    css`
      display: flex;
      flex-basis: 20%;
      flex-direction: column;
      margin-top: 0.2rem;
    `}
`;

export const GuestRowWrapper = styled.div`
  ${GuestRowCenterStyles};
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const GuestRowTextWrapper = styled.div`
  ${GuestRowCenterStyles};
  font-size: 12px;
  flex-wrap: wrap;

  p {
    margin-right: 0.5rem;
    ${({ isCurrentUser }) =>
      isCurrentUser &&
      css`
        color: ${COLORS.sand};
      `};

    span {
      font-weight: 500;
    }
  }
`;

export const GuestRowButtonWrapper = styled.div`
  display: flex;
`;

export const GuestRowButton = styled(ThanksgivingButton)`
  background-color: ${COLORS.grayGreen};
  font-size: 12px;

  &:hover {
    background-color: ${COLORS.sand};
  }
`;

export const GuestRowButtonDelete = styled(GuestRowButton)`
  background-color: ${COLORS.brass};

  &:hover {
    background-color: ${COLORS.camel};
  }
`;
