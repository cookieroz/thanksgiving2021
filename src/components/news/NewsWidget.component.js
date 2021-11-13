import React from "react";
import { Link } from "react-router-dom";

import { LoadingText } from "../loading/styles";

import { getDateLocal } from "../countdown";
import { NewsWidgetTitle, NewsWidgetWrapper } from "./styles";
import { useGetNews } from "./useGetNews.hook";

export const NewsWidget = () => {
  const { error, loading, news = [] } = useGetNews();
  news.length = 3;

  return (
    <NewsWidgetWrapper>
      <NewsWidgetTitle>
        ✨ <Link to="/news">Latest News</Link> ✨
      </NewsWidgetTitle>
      {loading ? (
        <LoadingText />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {news?.map((post) => (
            <li key={`${post?.title}-${post?.createdAt}`}>
              {post?.title}
              <small>
                {getDateLocal(post?.createdAt.seconds * 1000, {
                  month: "short",
                  day: "numeric",
                })}
              </small>
            </li>
          ))}
        </ul>
      )}
    </NewsWidgetWrapper>
  );
};
