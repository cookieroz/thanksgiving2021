import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";

import { useDatabase } from "../../hooks/useDatabaseService.hook";
import { AlreadyLoggedIn, AuthForm } from "../../components/authStuff";
import { FieldError } from "../../components/form";
import { useAuth } from "../../contexts";
import { ThanksgivingPageWrapper, ThanksgivingText } from "../../styles";

export const SignUpPage = () => {
  const { currentUserUid, signup } = useAuth();
  const { createRecord } = useDatabase(`guests`);
  const methods = useForm();
  const history = useHistory(); // hook for redirecting to routes

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { handleSubmit } = methods || {};

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      setError("");
      const userData = await signup(data.email, data.password);
      await createRecord({ user_uid: userData?.user?.uid });

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
        />
      </FormProvider>

      {error && <FieldError>{error}</FieldError>}

      <ThanksgivingText>
        Already have an account? <Link to="/login">Log In</Link>
      </ThanksgivingText>
    </ThanksgivingPageWrapper>
  );
};
