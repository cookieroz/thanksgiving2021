import React from "react";
import { Route } from "react-router-dom";

import { LoginPage } from "../../pages/Login";
import { ThanksgivingProvider, useAuth } from "../../contexts";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  const ComponentToRender = (props) =>
    currentUser ? (
      <ThanksgivingProvider>
        <Component {...props} />
      </ThanksgivingProvider>
    ) : (
      <LoginPage />
    );

  return <Route {...rest} render={ComponentToRender} />;
};
