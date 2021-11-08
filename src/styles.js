import styled, { createGlobalStyle } from "styled-components";

const black = "#252422";
const brass = "#CB997E";
const camel = "#a68a64";
const darkGreen = "#6B705C";
const darkerGreen = "#333D29";
const grayGreen = "#B7B7A4";
const militaryGreen = "#A5A58D";
const nude = "#FFE8D6";
const red = "#9b2226";
const sand = "#DDBEA9";
const white = "#FFFFFA";

export const COLORS = {
  black,
  brass,
  camel,
  darkGreen,
  darkerGreen,
  grayGreen,
  militaryGreen,
  nude,
  red,
  sand,
  white,
};

export const BorderStyle = `1px solid ${COLORS.brass}`;

export const GlobalResetStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    margin: 0;
    padding: 0;
  }
  
  body {
  	background-color: ${COLORS.darkGreen};
  }
`;

export const ThanksgivingContentWrapper = styled.div`
  padding: 0 1rem 1rem 1rem;
`;

export const ThanksgivingPageWrapper = styled.div`
  padding: 0.5rem 0;
  max-width: 100%;

  form {
    margin: 0 auto;
    max-width: 350px;
  }
`;

export const ThanksgivingTitle = styled.h4`
  display: block;
  font-size: 1.3rem;
  margin: 0.75rem;
  text-align: center;
`;

export const ThanksgivingText = styled.p`
  margin: 0.75rem 0;
`;

export const ThanksgivingHightlight = styled(ThanksgivingText)`
  font-weight: 600;
`;
