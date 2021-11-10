import React, { useEffect, useState } from "react";

import { CountdownClock } from "./CountdownClock.component";
import { CountdownTitle, CountdownWrapper } from "./styles";
import { getDistance, getCountdownMessage, THANKSGIVING_DATE } from "./utils";

export const Countdown = () => {
  const [hasCountdown, setHasCountdown] = useState(false);
  const [message, setMessage] = useState("");
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const thanksgivingDate = new Date(THANKSGIVING_DATE).toLocaleDateString(
    "en-GB",
    options
  );

  useEffect(() => {
    setHasCountdown(getDistance() > 0);
    setMessage(getCountdownMessage());
  }, []);

  return (
    <CountdownWrapper>
      <CountdownTitle>{message}</CountdownTitle>
      {hasCountdown && (
        <>
          <CountdownTitle>
            {thanksgivingDate} <span>16:00h</span>
          </CountdownTitle>
          <CountdownClock />
        </>
      )}
    </CountdownWrapper>
  );
};
