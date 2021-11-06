import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { useDatabase } from "../../hooks/useDatabaseService.hook";
import { GuestForm } from "./GuestForm.component";
import { GUEST_FORM_FIELDS } from "./constants";
import {formatGuestData} from "./utils";

export const GuestEdit = ({ guestToEdit = {} }) => {
  const [loading, setLoading] = useState(false);
  const { updateRecord } = useDatabase(`guests`);
  const methods = useForm({
    defaultValues: {
      [GUEST_FORM_FIELDS.name]: guestToEdit.name,
      [GUEST_FORM_FIELDS.location]: guestToEdit.location,
      [GUEST_FORM_FIELDS.attending]: guestToEdit.attending,
      [GUEST_FORM_FIELDS.displayPotluck]: !!guestToEdit?.potluck?.item,
      [GUEST_FORM_FIELDS.potluckItem]: guestToEdit?.potluck?.item || '',
      [GUEST_FORM_FIELDS.potluckDescription]: guestToEdit?.potluck?.description || '',
    },
  });
  const { handleSubmit } = methods || {};

  const { id: guestId } = guestToEdit;

  console.log("guestToEdit", guestToEdit);

  const handleGuestEditSubmit = async (data) => {
    console.log("guest EDIT data", data);
    try {
      setLoading(true);
      const dataToUpdate = formatGuestData(data);
      const editedGuest = await updateRecord(guestId, dataToUpdate);
      console.log("SUCCESS EDIT editedGuest", editedGuest);
      setLoading(false);
    } catch (e) {
      console.log(`FAILED EDIT editedGuest: ${e}`);
      setLoading(false);
    }
  };

  return guestId ? (
    <FormProvider {...methods}>
      <GuestForm
        isLoading={loading}
        onSubmit={handleSubmit(handleGuestEditSubmit)}
        submitText="Edit Guest"
        title={`Edit Guest ${guestToEdit.name || ""}`}
      />
    </FormProvider>
  ) : null;
};
