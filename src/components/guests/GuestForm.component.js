import React from "react";
import { InputComponent, SelectComponent } from "../form";
import { ATTENDING_OPTIONS } from "./constants";
import {useGuestForm} from "./useGuestForm.hook";

export const GuestForm = ({ onSubmit }) => {

  return (
    <form>
      <fieldset>
        <InputComponent label="Name" />
        <InputComponent label="Location" />
        <SelectComponent
          label="Attending Thanksgiving"
          options={ATTENDING_OPTIONS}
          v
        />
      </fieldset>
    </form>
  );
};
