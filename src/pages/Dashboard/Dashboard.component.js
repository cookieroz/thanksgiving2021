import React, { useMemo } from "react";

import { useThanksgiving } from "../../contexts";
import {
  ThanksgivingHightlight,
  ThanksgivingPageWrapper,
  ThanksgivingText,
  ThanksgivingTitle,
} from "../../styles";
import {
  DashboardGrid,
  DashboardGridBottom,
  DashboardGridTopLeftSquare,
  DashboardGridTopRightSquare,
  DashboardListItem,
  DashboardSpacer,
  DashboardWrapper,
} from "./styles";
import { GuestCreate } from "../../components/guests";

export const Dashboard = () => {
  const { currentGuest = {}, guests, myGuests, potluck } = useThanksgiving();
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

      <DashboardSpacer />

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

      <DashboardSpacer />

      <DashboardWrapper>
        <GuestCreate currentGuestId={currentGuest?.id} />
      </DashboardWrapper>

      <DashboardSpacer />
    </ThanksgivingPageWrapper>
  );
};
