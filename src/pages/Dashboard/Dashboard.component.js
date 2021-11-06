import React from "react";

import { GuestCreate, GuestEdit } from "../../components/guests";
import { useThanksgiving } from "../../contexts";

export const Dashboard = () => {
  const { currentGuest = {} } = useThanksgiving();

  return (
    <div>
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
