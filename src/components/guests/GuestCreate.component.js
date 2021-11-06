import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { useDatabase } from "../../hooks/useDatabaseService.hook";
import { GuestForm } from "./GuestForm.component";

export const GuestCreate = ({ currentGuestId }) => {
  const [loading, setLoading] = useState(false);
  const { createRecord } = useDatabase(`guests`);
  const methods = useForm();
  const { handleSubmit } = methods || {};

  console.log("currentGuestId", currentGuestId);

  const handleGuestCreateSubmit = async (data) => {
    try {
      setLoading(true);
      const guestCreateData = { ...data, parentGuestId: currentGuestId };
      await createRecord(guestCreateData);
      setLoading(false);
    } catch (e) {
      console.log(`FAILED CREATE createdGuest: ${e}`);
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <GuestForm
        isLoading={loading}
        onSubmit={handleSubmit(handleGuestCreateSubmit)}
      />
    </FormProvider>
  );
};
