import React from "react";
import { useFormContext } from "react-hook-form";

export const FieldWrapper = ({ children, fieldName, label }) => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      {label && <label>{label}</label>}
      {children}
      {errors[fieldName]?.message && (
        <small>{errors[fieldName]?.message}</small>
      )}
    </div>
  );
};
