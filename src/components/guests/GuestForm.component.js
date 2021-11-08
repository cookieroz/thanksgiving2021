import React from "react";

import { ThanksgivingTitle } from "../../styles";
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
    <ThanksgivingTitle>{title}</ThanksgivingTitle>

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
        label="Guest Location (optional)"
      />
      <SelectComponent
        disabled={isLoading}
        fieldName={GUEST_FORM_FIELDS.attending}
        label="Able to attend Thanksgiving 2021?"
        options={ATTENDING_OPTIONS}
      />

      <GuestFormPotluck isLoading={isLoading} />

      <SubmitComponent value={isLoading ? "loading ..." : submitText} />
    </form>
  </div>
);
