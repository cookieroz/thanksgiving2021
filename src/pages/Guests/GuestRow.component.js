import React, { useState } from "react";

import {
  getAttendingText,
  GuestEdit,
} from "../../components/guests";

export const GuestRow = ({ guestToEdit = {} }) => {
  const { attending, location, name, potluck } = guestToEdit;

  const [isEditMode, setIsEditMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const toggleEditMode = () => !loading && setIsEditMode(!isEditMode);
  const deleteGuest = () => {
  	console.log("deleting guest")
  };

  // const GuestRowDisplay = () => (
  //   <div>
  //     <p>
  //       <span>Name: </span>
  //       {name}
  //     </p>
  //     <p>
  //       <span>Is attending: </span>
  //       {getAttendingText(attending)}
  //     </p>
  //     <p>
  //       <span>Coming from: </span>
  //       {location}
  //     </p>
  //     <p>
  //       <span>Is bringing: </span>
  //       {potluck?.item}{" "}
  //       {potluck?.description && <small>{potluck?.description}</small>}
  //     </p>
  //   </div>
  // );

  // attending, location, name, potluck

  return (
    <div>

	    <div>
		    <p>
			    <span>Name: </span>
			    {name}
		    </p>
		    <p>
			    <span>Is attending: </span>
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
	    </div>

      <GuestEdit
        guestToEdit={guestToEdit}
        loading={loading}
        setLoading={setLoading}
      />
      <div onClick={deleteGuest}>delete</div>
      <button onClick={toggleEditMode}>{isEditMode ? "Exit" : "Edit"}</button>
    </div>
  );
};
