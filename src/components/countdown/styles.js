import styled from "styled-components";
import { BorderStyle, COLORS, ThanksgivingTitle } from "../../styles";

export const CountdownWrapper = styled.div`
  border-bottom: ${BorderStyle};
  border-top: ${BorderStyle};
  padding-bottom: 0.75rem;
`;

export const CountdownTitle = styled(ThanksgivingTitle)`
  color: ${COLORS.nude};
  font-size: 1.1rem;
`;

export const CountdownClockWrapper = styled.div`
  color: ${COLORS.nude};
  display: flex;
  justify-content: center;
  padding: 0.5rem;
  text-align: center;
`;

export const CountdownClockTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const CountdownClockTime = styled.h6`
  font-size: 24px;
  line-height: 120%;
  margin: 0;
`;

export const CountdownClockTimeText = styled.small`
  display: flex;
  flex-direction: column;
`;
