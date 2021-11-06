import React from "react";
import { useFormContext } from "react-hook-form";

import { FieldWrapper } from "./FieldWrapper.component";

export const InputComponent = ({
  fieldName,
  registerOptions = {},
  label,
  ...props
}) => {
  const { register } = useFormContext();

  return (
    <FieldWrapper fieldName={fieldName} label={label}>
      <input {...register(fieldName, registerOptions)} {...props} />
    </FieldWrapper>
  );
};
