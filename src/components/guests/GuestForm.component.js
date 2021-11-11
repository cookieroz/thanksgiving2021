import React from "react";

import { ThanksgivingTitle } from "../../styles";
import { InputComponent, SelectComponent, SubmitComponent } from "../form";
import { ATTENDING_OPTIONS, GUEST_FORM_FIELDS } from "./constants";
import { GuestFormPotluck } from "./GuestFormPotluck.component";

export const GuestForm = ({
  isEdit,
  isLoading,
  onSubmit,
  submitText = "Add Guest",
  title = "🍽️ Add a Guest 🍽️",
}) => (
  <div>
    {title && <ThanksgivingTitle>{title}</ThanksgivingTitle>}

    <form onSubmit={onSubmit}>
      <InputComponent
        disabled={isLoading}
        fieldName={GUEST_FORM_FIELDS.name}
        registerOptions={{
          required: {
            value: true,
            message: "Please enter guest name.",
          },
        }}
        label="Name"
      />
      <InputComponent
        disabled={isLoading}
        fieldName={GUEST_FORM_FIELDS.location}
        label={isEdit ? "Location" : "Guest arriving from where / location? (optional)"}
      />
      <SelectComponent
        disabled={isLoading}
        fieldName={GUEST_FORM_FIELDS.attending}
        label={isEdit ? "Attending?" : "Able to attend Thanksgiving 2021?"}
        options={ATTENDING_OPTIONS}
      />

      <GuestFormPotluck isEdit={isEdit} isLoading={isLoading} />

      <SubmitComponent value={isLoading ? "loading ..." : submitText} />
    </form>
  </div>
);
