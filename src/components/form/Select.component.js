import React from "react";
import { FieldWrapper } from "./FieldWrapper.component";

export const SelectComponent = ({ errorMessage, label, options, ...props }) => (
  <FieldWrapper errorMessage={errorMessage} label={label}>
    {options?.length > 0 && (
      <select {...props}>
        {options.map(({ text, ...optionProps }) => (
          <option {...optionProps}>{text}</option>
        ))}
      </select>
    )}
  </FieldWrapper>
);
