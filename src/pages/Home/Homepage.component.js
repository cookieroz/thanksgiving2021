import React from "react";
import { Link } from "react-router-dom";

import { Countdown } from "../../components/countdown";
import { useAuth } from "../../contexts";
import { ThanksgivingText, ThanksgivingTitle } from "../../styles";

import { HomepageWrapper } from "./styles";

export const Homepage = () => {
  const { currentUserUid } = useAuth();

  return (
    <HomepageWrapper>
      <ThanksgivingTitle>
        Welcome to the 2021 Thanksgiving website!!!
      </ThanksgivingTitle>
      <Countdown />
      {currentUserUid && (
        <ThanksgivingText>
          Checkout your <Link to="/dashboard">dashboard</Link> to see how many
          guests & what they are bringing.
        </ThanksgivingText>
      )}

      {!currentUserUid && (
        <ThanksgivingText>
          <Link to="/dashboard">Sign up</Link> or{" "}
          <Link to="/dashboard">log in</Link> to add and see how many guests are
          attending, what food is being brought and directions & info to the
          party!
        </ThanksgivingText>
      )}
    </HomepageWrapper>
  );
};
