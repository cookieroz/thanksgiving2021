import React from "react";

// import { useThanksgiving } from "../../contexts";
import {
  // ThanksgivingHightlight,
  ThanksgivingPageWrapper,
  ThanksgivingSpacer,
  // ThanksgivingText,
  ThanksgivingTitle,
} from "../../styles";
import { useGetNews } from "../../components/news/useGetNews.hook";
import { LoadingText } from "../../components/loading/styles";
import {NewsAccordion} from "../../components/news";

export const News = () => {
  const { error, loading, news } = useGetNews();

  return (
    <ThanksgivingPageWrapper>
      <ThanksgivingTitle>📰 News & Party Updates 🥳</ThanksgivingTitle>

      <ThanksgivingSpacer />

      {loading ? (
        <LoadingText />
      ) : error ? (
        <p>{error}</p>
      ) : (
        news?.map((post) => (
        	<NewsAccordion key={`${post?.title}-${post?.createdAt}`} {...post} />
        ))
      )}
    </ThanksgivingPageWrapper>
  );
};
