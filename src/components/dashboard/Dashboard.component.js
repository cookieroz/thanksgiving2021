import React from "react";

import { useThanksgiving } from "../../contexts";
import {Countdown} from "../countdown";

export const Dashboard = () => {
  const { currentGuest = {} } = useThanksgiving();

  return (
    <div>
      <Countdown />
      <header>
        <p>hello world!</p>
        <p>{`${currentGuest?.name}'s dashboard`}</p>
      </header>
    </div>
  );
};
