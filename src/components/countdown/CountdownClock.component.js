import React from "react";

import { useCountdown } from "./useCountdown.hook";

export const CountdownClock = () => {
  const { daysText, hoursText, minutesText, secondsText } = useCountdown();

  return (
    <div>
      <div>{daysText}</div>
      <div>{hoursText}</div>
      <div>{minutesText}</div>
      <div>{secondsText}</div>
    </div>
  );
};
