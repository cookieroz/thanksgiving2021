import styled from "styled-components";
import {
  // COLORS,
  ThanksgivingPageWrapper,
  ThanksgivingText,
} from "../../styles";

export const LoadingWrapper = styled(ThanksgivingPageWrapper)`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const LoadingText = styled(ThanksgivingText)`
  text-align: center;
`;
