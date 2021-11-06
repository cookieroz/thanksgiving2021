import React from "react";
import { useFormContext } from "react-hook-form";

import { FieldWrapper } from "./FieldWrapper.component";

export const SelectComponent = ({
  fieldName,
  label,
  options,
  registerOptions,
  ...props
}) => {
  const { register } = useFormContext();

  return (
    <FieldWrapper fieldName={fieldName} label={label}>
      {options?.length > 0 && (
        <select {...register(fieldName, registerOptions)} {...props}>
          {options.map(({ text, ...optionProps }) => (
            <option key={`select-${text}`} {...optionProps}>
              {text}
            </option>
          ))}
        </select>
      )}
    </FieldWrapper>
  );
};
