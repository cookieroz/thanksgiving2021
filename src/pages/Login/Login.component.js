import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import {AlreadyLoggedIn, AuthForm} from "../../components/authStuff";
import { FieldError } from "../../components/form";
import { useAuth } from "../../contexts";
import { ThanksgivingPageWrapper, ThanksgivingText } from "../../styles";

export const LoginPage = () => {
  const { currentUserUid, login } = useAuth();
  const methods = useForm();
  const history = useHistory();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { handleSubmit } = methods || {};


  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError("");
      await login(data.email, data.password);
      history.push("/dashboard"); // redirecting to Dashboard
    } catch (error) {
      console.log({ error });
      setError("failed to Log in");
    }
    setLoading(false);
  };

  return currentUserUid ? (
    <AlreadyLoggedIn />
  ) : (
    <ThanksgivingPageWrapper>
      <FormProvider {...methods}>
        <AuthForm isLoading={loading} onSubmit={handleSubmit(onSubmit)} />
      </FormProvider>
      {error && <FieldError>{error}</FieldError>}

      <ThanksgivingText>
        Not registered yet? <Link to="/sign-up">Sign Up</Link>
      </ThanksgivingText>
    </ThanksgivingPageWrapper>
  );
};
