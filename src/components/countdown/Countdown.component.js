import React, { useEffect, useState } from "react";

import { CountdownClock } from "./CountdownClock.component";
import { getDistance, getCountdownMessage } from "./utils";
import { CountdownTitle, CountdownWrapper } from "./styles";

export const Countdown = () => {
  const [hasCountdown, setHasCountdown] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setHasCountdown(getDistance() > 0);
    setMessage(getCountdownMessage());
  }, []);

  return (
    <CountdownWrapper>
      <CountdownTitle>{message}</CountdownTitle>
      {hasCountdown && <CountdownClock />}
    </CountdownWrapper>
  );
};
