import React, { useMemo } from "react";

import { useThanksgiving } from "../../contexts";
import {
  ThanksgivingHightlight,
  ThanksgivingPageWrapper,
  ThanksgivingText,
  ThanksgivingTitle,
} from "../../styles";

import { GuestCreate, GuestEdit } from "../../components/guests";

export const GuestAddEdit = () => {
  const { currentGuest = {}, myGuests, potluck } = useThanksgiving();

  return (
    <ThanksgivingPageWrapper>
      <ThanksgivingTitle>Manage guests</ThanksgivingTitle>

      <GuestEdit />
      <GuestCreate currentGuestId={currentGuest?.id} />

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
