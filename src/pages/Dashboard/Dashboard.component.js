import React, { useMemo } from "react";

import { useThanksgiving } from "../../contexts";
import {
  ThanksgivingHightlight,
  ThanksgivingPageWrapper,
  ThanksgivingSpacer,
  ThanksgivingText,
  ThanksgivingTitle,
} from "../../styles";
import {
  DashboardGrid,
  DashboardGridBottom,
  DashboardGridTopLeftSquare,
  DashboardGridTopRightSquare,
  DashboardListItem,
} from "./styles";
import {GuestRow} from "../../components/guests/GuestRow.component";

export const Dashboard = () => {
  const { guests, myGuests, potluck } = useThanksgiving();
  const totalYes = useMemo(
    () => guests?.filter(({ attending }) => Number(attending) === 1)?.length,
    [guests]
  );
  const totalMaybes = useMemo(
    () => guests?.filter(({ attending }) => Number(attending) === 2)?.length,
    [guests]
  );

  return (
    <ThanksgivingPageWrapper>
      <ThanksgivingTitle>Current party stats</ThanksgivingTitle>

      <ThanksgivingSpacer />

      <DashboardGrid>
        <DashboardGridTopLeftSquare>
          <ThanksgivingHightlight>All guests:</ThanksgivingHightlight>
          <ThanksgivingText>{`Attending - ${totalYes}`}</ThanksgivingText>
          <ThanksgivingText>{`Maybe attending - ${totalMaybes}`}</ThanksgivingText>
        </DashboardGridTopLeftSquare>

        <DashboardGridTopRightSquare>
          <ThanksgivingHightlight>All Food / Potluck:</ThanksgivingHightlight>
          {potluck?.map((pl, i) => (
            <DashboardListItem key={`potluck-name${pl?.item}-${i}`}>
              {pl?.item}
              {pl?.description && <small>{pl?.description}</small>}
            </DashboardListItem>
          ))}
        </DashboardGridTopRightSquare>

        <DashboardGridBottom>
          <ThanksgivingHightlight>My guests:</ThanksgivingHightlight>
          {myGuests?.map(({ id, name, potluck }) => (
            <DashboardListItem key={`my-guest-name-${id}`}>
              {name}
              <small>potluck item: {potluck?.item}</small>
            </DashboardListItem>
          ))}
        </DashboardGridBottom>
      </DashboardGrid>

      <ThanksgivingSpacer />

      {myGuests?.map((guest) => <GuestRow key={guest.id} guestToEdit={guest} />)}

      <ThanksgivingSpacer />

    </ThanksgivingPageWrapper>
  );
};
