import React from "react";
import { useFormContext } from "react-hook-form";

import { GUEST_FORM_FIELDS } from "./constants";
import { InputComponent } from "../form";
import { GuestPotluckWrapper } from "./styles";

const { attending, displayPotluck, potluckDescription, potluckItem } =
  GUEST_FORM_FIELDS;

export const GuestFormPotluck = ({ isEdit, isLoading }) => {
  const PotluckItemLabel = `What are you planning on bringing?
   (examples: starter, dessert, brownies, chips, rice, dips, cups, gin, chairs, a smile, cameras, etc)`;
  const PotluckItemErrorMessage =
    "🤌 Please enter something for what you are planning to bring. 🤌";
  const { watch } = useFormContext();

  const watchAttending = watch(attending);
  const watchDisplayPotluck = watch(displayPotluck);

  return watchAttending !== "0" ? (
    <GuestPotluckWrapper isEdit={isEdit}>
      <InputComponent
        disabled={isLoading}
        fieldName={displayPotluck}
        label="Bringing something?"
        type="checkbox"
      />
      {watchDisplayPotluck && (
        <>
          <InputComponent
            disabled={isLoading}
            fieldName={potluckItem}
            registerOptions={{
              required: {
                value: true,
                message: PotluckItemErrorMessage,
              },
            }}
            label={isEdit ? "Item" : PotluckItemLabel}
          />
          <InputComponent
            disabled={isLoading}
            fieldName={potluckDescription}
            label={
              isEdit
                ? "Description"
                : "Any additional info about what is being brought?"
            }
          />
        </>
      )}
    </GuestPotluckWrapper>
  ) : null;
};
