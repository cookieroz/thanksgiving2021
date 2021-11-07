import React from "react";

import { useCountdown } from "./useCountdown.hook";
import {
  CountdownClockTime,
  CountdownClockTimeText,
  CountdownClockTimeWrapper,
  CountdownClockWrapper,
} from "./styles";

export const CountdownClock = () => {
  const {
    days,
    daysText,
    hours,
    hoursText,
    minutes,
    minutesText,
    seconds,
    secondsText,
  } = useCountdown();

  const ClockItem = ({ text, timeItem }) => (
    <CountdownClockTimeWrapper>
      <CountdownClockTime>{timeItem}</CountdownClockTime>
      <CountdownClockTimeText>{text}</CountdownClockTimeText>
    </CountdownClockTimeWrapper>
  );

  return (
    <CountdownClockWrapper>
      <ClockItem text={daysText} timeItem={days} />
      <ClockItem text={hoursText} timeItem={hours} />
      <ClockItem text={minutesText} timeItem={minutes} />
      <ClockItem text={secondsText} timeItem={seconds} />
    </CountdownClockWrapper>
  );
};
