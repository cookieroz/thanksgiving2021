import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import { useDatabase } from "../../hooks/useDatabaseService.hook";
import { AlreadyLoggedIn, AuthForm } from "../../components/authStuff";
import { ATTENDING_OPTIONS, GUEST_FORM_FIELDS } from "../../components/guests";
import {
  FieldError,
  InputComponent,
  SelectComponent,
} from "../../components/form";
import { useAuth } from "../../contexts";
import { ThanksgivingPageWrapper } from "../../styles";
import { SignUpText } from "./styles";

export const SignUpPage = () => {
  const { currentUserUid, signup } = useAuth();
  const { createRecord } = useDatabase(`guests`);
  const methods = useForm();
  const history = useHistory(); // hook for redirecting to routes

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { handleSubmit } = methods || {};

  const onSubmit = async (data = {}) => {
    try {
      const { attending, email, name, location, password } = data;
      setLoading(true);
      setError("");
      const userData = await signup(email, password);
      await createRecord({
        attending,
        location,
        name,
        userUid: userData?.user?.uid,
      });

      history.push("/dashboard"); // redirecting to Dashboard
    } catch (error) {
      setError("failed to create an account");
    }
    setLoading(false);
  };

  return currentUserUid ? (
    <AlreadyLoggedIn />
  ) : (
    <ThanksgivingPageWrapper>
      <FormProvider {...methods}>
        <AuthForm
          hasPasswordMatch={true}
          isLoading={loading}
          onSubmit={handleSubmit(onSubmit)}
          submitText="Sign Up"
          title="Sign Up"
        >
          <SignUpText>
            {`Hi all! Sign up if you want to know how many guests and what food is
            being brought. If you don't want to sign up, contact Roz and she can
            add you manually. 😋`}
          </SignUpText>
          <InputComponent
            disabled={loading}
            fieldName={GUEST_FORM_FIELDS.name}
            label="📛 Name"
            registerOptions={{
              required: {
                value: true,
                message: "Please enter guest name.",
              },
            }}
          />
          <InputComponent
            disabled={loading}
            fieldName={GUEST_FORM_FIELDS.location}
            label="🗺️ Arriving from where / location?"
          />
          <SelectComponent
            disabled={loading}
            fieldName={GUEST_FORM_FIELDS.attending}
            label="✅ Able to attend Thanksgiving 2021?"
            options={ATTENDING_OPTIONS}
          />
        </AuthForm>
      </FormProvider>

      {error && <FieldError>{error}</FieldError>}

      <SignUpText>
        Already have an account? <Link to="/login">Log In</Link>
      </SignUpText>
    </ThanksgivingPageWrapper>
  );
};
