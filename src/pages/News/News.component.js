import React from "react";

import { useGetNews } from "../../components/news/useGetNews.hook";
import { NewsAccordion, NewsPostCreate } from "../../components/news";
import { useThanksgiving } from "../../contexts";
import {
  ThanksgivingPageWrapper,
  ThanksgivingSpacer,
  ThanksgivingTitle,
} from "../../styles";

export const News = () => {
  const { currentGuest = {} } = useThanksgiving();
  const { news } = useGetNews();

  return (
    <ThanksgivingPageWrapper>
      <ThanksgivingTitle>📰 News & Party Updates 🥳</ThanksgivingTitle>

      <ThanksgivingSpacer />

      {news?.map((post) => (
        <NewsAccordion key={`${post?.title}-${post?.createdAt}`} {...post} />
      ))}

      {currentGuest?.isAdmin && <NewsPostCreate />}
    </ThanksgivingPageWrapper>
  );
};
