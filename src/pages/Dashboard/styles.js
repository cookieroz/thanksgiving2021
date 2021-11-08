import styled from "styled-components";
import {
  BorderStyle,
  COLORS,
  ThanksgivingHightlight,
  ThanksgivingText,
} from "../../styles";

export const DashboardSpacer = styled.hr`
  border: ${BorderStyle};
`;

export const DashboardWrapper = styled.div`
  margin: 0 auto;
  max-width: 90%;
  padding: 1rem;
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

export const DashboardGridBottom = styled.div`
  grid-column: 1 / 3;
  grid-row: 2;
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
