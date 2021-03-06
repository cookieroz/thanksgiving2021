import styled from "styled-components";
import {
  BorderStyle,
  COLORS,
  ThanksgivingHightlight,
  ThanksgivingText,
  ThanksgivingTitle,
} from "../../styles";

export const DashboardWrapper = styled.div`
  margin: 0 auto;
  padding: 1rem;
`;

export const DashboardGreeting = styled(ThanksgivingTitle)`
  font-weight: 500;
  margin-bottom: -0.5rem;
`;

export const DashboardGrid = styled(DashboardWrapper)`
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: 1fr 1fr;

  ${ThanksgivingHightlight},
  ${ThanksgivingText} {
    margin: 0.25rem;
  }
`;

export const DashboardGridTopLeftSquare = styled.div`
  grid-column: 1;
  grid-row: 1;
`;

export const DashboardGridTopRightSquare = styled.div`
  grid-column: 2;
  grid-row: 1;
`;

// firebase functions:config:set config.key="SECRET_KEY" config.pass="SECRET_PASS"
export const DashboardGridBottom = styled.div`
  border-top: ${BorderStyle};
  grid-column: 1 / 3;
  grid-row: 2;
  border-block-width: 2px;
  border-color: black;
  margin-top: 1rem;
  padding: 1rem 0 0.5rem 0;
`;

export const DashboardListItem = styled(ThanksgivingText)`
  margin: 0;

  small {
    color: ${COLORS.grayGreen};
    display: block;
    font-size: 0.7rem;
    margin-bottom: 0.1rem;
  }
`;
