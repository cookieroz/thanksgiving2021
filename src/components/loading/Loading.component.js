import React from "react";
import { LoadingText, LoadingWrapper } from "./styles";

export const Loading = () => {
  const src =
    "https://media4.giphy.com/media/tSI5rlnyCM10s/giphy.gif?cid=790b761131224628dbc8ec51c9cfc3cfac9d952a99a7388e&rid=giphy.gif&ct=g";

  return (
    <LoadingWrapper>
      <img alt="loading gif please wait" src={src} />
      <LoadingText>... loading</LoadingText>
    </LoadingWrapper>
  );
};
