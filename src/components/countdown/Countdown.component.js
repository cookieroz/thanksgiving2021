import React, { useEffect, useState } from "react";

import { CountdownClock } from "./CountdownClock.component";
import { getDistance, getCountdownMessage } from "./utils";

export const Countdown = () => {
  const [hasCountdown, setHasCountdown] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setHasCountdown(getDistance() > 0);
    setMessage(getCountdownMessage());
  }, []);

  return (
    <div>
      {hasCountdown && <CountdownClock />}
      <h4>{message}</h4>
    </div>
  );
};
