import React, { useState } from "react";

import { useDatabase } from "../../hooks/useDatabaseService.hook";

import { GuestEdit } from "./GuestEdit.component";
import { getAttendingText } from "./utils";
import {
  GuestRowButton,
  GuestRowButtonDelete,
  GuestRowButtonWrapper,
  GuestRowTextWrapper,
  GuestRowWrapper,
} from "./styles";

export const GuestRow = ({ guestToEdit = {}, isCurrentUser }) => {
  const { deleteRecord } = useDatabase(`guests`);
  const [isEditMode, setIsEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleEditMode = () => !loading && setIsEditMode(!isEditMode);
  const deleteGuest = async () => {
    setLoading(true);
    console.log("deleting guest");
    await deleteRecord(guestToEdit?.id);
    setLoading(false);
  };

  return (
    <GuestRowWrapper>
      {isEditMode ? (
        <GuestEdit
          guestToEdit={guestToEdit}
          loading={loading}
          setLoading={setLoading}
        />
      ) : (
        <GuestRowText {...guestToEdit} isCurrentUser={isCurrentUser} />
      )}
      <GuestRowButtonWrapper>
        {!isCurrentUser && !isEditMode && (
          <GuestRowButtonDelete onClick={deleteGuest}>
            delete
          </GuestRowButtonDelete>
        )}
        <GuestRowButton onClick={toggleEditMode}>
          {isEditMode ? "Cancel" : isCurrentUser ? "Edit Me" : "Edit"}
        </GuestRowButton>
      </GuestRowButtonWrapper>
    </GuestRowWrapper>
  );
};

export const GuestRowText = ({
  attending,
  location,
  isCurrentUser,
  name,
  potluck = {},
}) => (
  <GuestRowTextWrapper isCurrentUser={isCurrentUser}>
    <p>
      <span>Name: </span>
      {name}
    </p>
    <p>
      <span>Attending: </span>
      {getAttendingText(attending)}
    </p>
    <p>
      <span>Coming from: </span>
      {location}
    </p>
    <p>
      <span>Is bringing: </span>
      {potluck?.item}{" "}
      {potluck?.description && <small>{potluck?.description}</small>}
    </p>
  </GuestRowTextWrapper>
);
