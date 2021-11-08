import React, { useRef } from "react";
import { useFormContext } from "react-hook-form";

import { ThanksgivingTitle } from "../../styles";
import { InputComponent, SubmitComponent } from "../form";

export const AuthForm = ({
  children,
  hasPasswordMatch,
  isLoading,
  onSubmit,
  submitText = "Log In",
  title = "Log In",
}) => {
  const { watch } = useFormContext();
  const passwordRef = useRef({});

  if (hasPasswordMatch) {
    passwordRef.current = watch("password");
  }

  return (
    <div>
      <ThanksgivingTitle>{title}</ThanksgivingTitle>

      <form onSubmit={onSubmit}>
        {children}

        <InputComponent
          disabled={isLoading}
          fieldName="email"
          registerOptions={{
            required: {
              value: true,
              message: "Please enter an email.",
            },
          }}
          label="📧 Email"
        />
        <InputComponent
          disabled={isLoading}
          fieldName="password"
          registerOptions={{
            minLength: {
              message: "Password must have at least 6 characters",
              value: 6,
            },
            required: {
              message: "Please enter a password.",
              value: true,
            },
          }}
          label="🔑 Password"
          type="password"
        />
        {hasPasswordMatch && (
          <InputComponent
            disabled={isLoading}
            fieldName="passwordMatch"
            registerOptions={{
              required: {
                validate: (value) =>
                  value === passwordRef.current || "The passwords do not match",
                value: true,
                message: "Please confirm password.",
              },
            }}
            label="👯 Confirm password"
            type="password"
          />
        )}

        <SubmitComponent value={isLoading ? "loading ..." : submitText} />
      </form>
    </div>
  );
};
