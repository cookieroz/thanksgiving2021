import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

import { useDatabase } from "../../hooks/useDatabaseService.hook";
import { GuestForm } from "./GuestForm.component";
import {formatGuestData} from "./utils";

export const GuestCreate = ({ currentGuestId }) => {
  const [loading, setLoading] = useState(false);
  const { createRecord } = useDatabase(`guests`);
  const methods = useForm();
  const { handleSubmit, reset } = methods || {};

  const handleGuestCreateSubmit = async (data) => {
    try {
      setLoading(true);
      const guestCreateData = formatGuestData({ ...data, parentGuestId: currentGuestId });
      await createRecord(guestCreateData);
      reset();
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
