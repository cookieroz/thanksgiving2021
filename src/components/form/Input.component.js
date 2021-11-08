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
  const rowInputs = ["checkbox", "radio"];

  return (
    <FieldWrapper
      fieldName={fieldName}
      label={label}
      isRow={rowInputs.includes(props?.type)}
    >
      <input {...register(fieldName, registerOptions)} {...props} />
    </FieldWrapper>
  );
};
