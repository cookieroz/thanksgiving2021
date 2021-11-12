import React, { useState } from "react";

import { getDateLocal } from "../countdown";
import {
  NewsAccordionContentWrapper, NewsAccordionTitle,
  NewsAccordionTitleWrapper,
  NewsAccordionWrapper,
} from "./styles";

export const NewsAccordion = ({ content, createdAt, title }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => setIsActive(!isActive);
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return (
    <NewsAccordionWrapper>
      <NewsAccordionTitleWrapper onClick={toggleIsActive}>
        <small>{getDateLocal(createdAt.seconds * 1000, options)}</small>
        <NewsAccordionTitle>
          <span>{isActive ? "-" : "+"}</span>
          {title}
        </NewsAccordionTitle>
      </NewsAccordionTitleWrapper>
      {isActive && (
        <NewsAccordionContentWrapper>{content}</NewsAccordionContentWrapper>
      )}
    </NewsAccordionWrapper>
  );
};
