import React from "react";
import { useFormContext } from "react-hook-form";

import { FieldError, FieldWrapperStyled } from "./styles";

export const FieldWrapper = ({ children, isRow, fieldName, label }) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <FieldWrapperStyled isRow={isRow}>
      {label && <label>{label}</label>}
      {children}
      {errors[fieldName]?.message && (
        <FieldError>{errors[fieldName]?.message}</FieldError>
      )}
    </FieldWrapperStyled>
  );
};
