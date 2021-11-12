import styled from "styled-components";
import { COLORS, ThanksgivingHightlight } from "../../styles";

export const NewsAccordionWrapper = styled.div`
	border-bottom: 1px solid ${COLORS.grayGreen};
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  transition: all 1s;
`;

export const NewsAccordionContentWrapper = styled.div``;

export const NewsAccordionTitleWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;

  span {
    color: ${COLORS.grayGreen};
    margin-right: 1rem;
  }

  &:hover {
    color: ${COLORS.grayGreen};

		small {
      color: black;
    }
  }
`;

export const NewsAccordionTitle = styled(ThanksgivingHightlight)`
  margin-top: 0;
`;

export const NewsWidgetWrapper = styled.div`
  padding: 0.5rem 0 1rem 0;
  
  a {
  	color: black;
  	text-decoration: none;
  }

  ul,
  li {
    margin-left: 1rem;
  }

  small {
    color: ${COLORS.grayGreen};
    font-size: 12px;
    line-height: 150%;
    margin-left: 1rem;
  }
`;
