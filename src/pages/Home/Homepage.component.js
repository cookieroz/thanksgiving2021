import React from "react";

import { Countdown } from "../../components/countdown";
import { GuestCreate, GuestEdit } from "../../components/guests";
import { useThanksgiving } from "../../contexts";

export const Homepage = () => {
  const { currentGuest = {} } = useThanksgiving();

  return (
    <div>
      <Countdown />
      <header className="App-header">
        <p>hello world!</p>
        <p>{`${currentGuest?.name}'s dashboard`}</p>
      </header>
      <hr />
      <GuestCreate currentGuestId={currentGuest.id} />
      <hr />
      <GuestEdit guestToEdit={currentGuest} />
    </div>
  );
};
