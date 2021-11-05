import React from "react";
import { FieldWrapper } from "./FieldWrapper.component";

export const InputComponent = ({ errorMessage, label, ...props }) => (
  <FieldWrapper errorMessage={errorMessage} label={label}>
    <input {...props} />
  </FieldWrapper>
);
