import styled from "styled-components";
import { COLORS, ThanksgivingText } from "../../styles";

export const GuestWrapper = styled.div`
  border-bottom: 1px solid ${COLORS.sand};
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const GuestItemWrapper = styled(ThanksgivingText)`
  display: flex;
  flex-direction: column;

  span {
    color: ${COLORS.sand};
    font-weight: 500;
  }
`;
