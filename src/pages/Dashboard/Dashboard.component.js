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
  DashboardGreeting,
  DashboardGrid,
  DashboardGridBottom,
  DashboardGridTopLeftSquare,
  DashboardGridTopRightSquare,
  DashboardListItem,
} from "./styles";
import { GuestCreate, GuestRow } from "../../components/guests";

export const Dashboard = () => {
  const { currentGuest, guests, myGuests, potluck } = useThanksgiving();
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
      <DashboardGreeting>{`Hi ${currentGuest?.name}!`}</DashboardGreeting>
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
          {myGuests?.map((guest) => (
            <GuestRow
              key={guest.id}
              guestToEdit={guest}
              isCurrentUser={guest.id === currentGuest?.id}
            />
          ))}
        </DashboardGridBottom>
      </DashboardGrid>

      <ThanksgivingSpacer />

      <GuestCreate currentGuestId={currentGuest?.id} />
    </ThanksgivingPageWrapper>
  );
};
