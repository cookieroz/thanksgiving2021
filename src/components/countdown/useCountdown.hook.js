import { useCallback, useEffect, useMemo, useState } from "react";
import {
  day,
  getDistance,
  hour,
  isPlural,
  minute,
  second,
} from "./utils";

export const useCountdown = () => {
  let countDownInterval;
  const [days, setDays] = useState('');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');

  const clearCountDownInterval = useCallback(
    () => !!countDownInterval && clearInterval(countDownInterval),
    []
  );

  const getCountDown = useCallback(() => {
    const distance = getDistance();

    if (distance < 0) {
      clearCountDownInterval();
    }

    setDays(Math.floor(distance / day));
    setHours(Math.floor((distance % day) / hour));
    setMinutes(Math.floor((distance % hour) / minute));
    setSeconds(Math.floor((distance % minute) / second));
  }, []);

  useEffect(() => {
    const hasPassed = getDistance() < 0;

    if (!hasPassed) {
      countDownInterval = setInterval(getCountDown, second);
    }

    return () => clearCountDownInterval();
  }, []);

  return useMemo(
    () => ({
      days,
      daysText: isPlural(days, "day"),
      hours,
      hoursText: isPlural(hours, "hour"),
      minutes,
      minutesText: isPlural(minutes, "minute"),
      seconds,
      secondsText: isPlural(seconds, "second"),
    }),
    [days, hours, minutes, seconds]
  );
};
