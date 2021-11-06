import React from "react";

import { InputComponent, SelectComponent, SubmitComponent } from "../form";
import { ATTENDING_OPTIONS, GUEST_FORM_FIELDS } from "./constants";
import { GuestFormPotluck } from "./GuestFormPotluck.component";

export const GuestForm = ({
  isLoading,
  onSubmit,
  submitText = "Add Guest",
  title = "Add a Guest",
}) => (
  <div>
    <h4>{title}</h4>

    <form onSubmit={onSubmit}>
      <InputComponent
        disabled={isLoading}
        fieldName={GUEST_FORM_FIELDS.name}
        registerOptions={{
          required: {
            value: true,
            message: "Please enter your name.",
          },
        }}
        label="Name"
      />
      <InputComponent
        disabled={isLoading}
        fieldName={GUEST_FORM_FIELDS.location}
        label="Your Location (optional)"
      />
      <SelectComponent
        disabled={isLoading}
        fieldName={GUEST_FORM_FIELDS.attending}
        label="Are you able to attend Thanksgiving 2021?"
        options={ATTENDING_OPTIONS}
      />
      <GuestFormPotluck isLoading={isLoading} />
      <SubmitComponent value={isLoading ? "loading ..." : submitText} />
    </form>
  </div>
);
