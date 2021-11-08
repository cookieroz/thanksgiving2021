import React, { useRef } from "react";
import { useFormContext } from "react-hook-form";

import { ThanksgivingTitle } from "../../styles";
import { InputComponent, SubmitComponent } from "../form";

export const AuthForm = ({
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
        <InputComponent
          disabled={isLoading}
          fieldName="email"
          registerOptions={{
            required: {
              value: true,
              message: "Please enter an email.",
            },
          }}
          label="Email"
        />
        <InputComponent
          disabled={isLoading}
          fieldName="password"
          registerOptions={{
            required: {
              value: true,
              message: "Please enter a password.",
            },
          }}
          label="Password"
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
            label="Password"
          />
        )}

        <SubmitComponent value={isLoading ? "loading ..." : submitText} />
      </form>
    </div>
  );
};
