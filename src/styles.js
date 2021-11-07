import styled, { createGlobalStyle } from 'styled-components'

const black = "#252422";
const brass = "#CB997E";
const camel = "#a68a64";
const darkGreen = "#6B705C";
const darkerGreen = "#333D29";
const grayGreen = "#B7B7A4";
const militaryGreen = "#A5A58D";
const nude = "#FFE8D6";
const sand = "#DDBEA9";
const white = "#FFFFFA"

export const COLORS = {
	black,
	brass,
	camel,
	darkGreen,
	darkerGreen,
	grayGreen,
	militaryGreen,
	nude,
	sand,
	white,
};

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
