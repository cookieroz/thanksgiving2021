import React from "react";

import { useThanksgiving } from "../../contexts";
import { getAttendingText } from "../../components/guests";
import {
  ThanksgivingPageWrapper,
  ThanksgivingSpacer,
  ThanksgivingTitle,
} from "../../styles";
import { GuestItemWrapper, GuestWrapper } from "./styles";

export const GuestList = () => {
  const { guests } = useThanksgiving();

  return (
    <ThanksgivingPageWrapper>
      <ThanksgivingTitle>Guest List</ThanksgivingTitle>

      <ThanksgivingSpacer />

      {guests?.map(({ id, name, attending, location, potluck }) => (
        <GuestWrapper key={id}>
          <GuestItemView label="Name" value={name} />
          <GuestItemView
            label="Attending"
            value={getAttendingText(attending)}
          />
          <GuestItemView label="Coming from" value={location} />
          <GuestItemView label="Is bringing" value={potluck?.item || ""} />
        </GuestWrapper>
      ))}
    </ThanksgivingPageWrapper>
  );
};

const GuestItemView = ({ label, value }) => (
  <GuestItemWrapper>
    <span>{`${label}: `}</span>
    {value}
  </GuestItemWrapper>
);
