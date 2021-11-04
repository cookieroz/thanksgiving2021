import React from "react";
import { Route } from "react-router-dom";

import { useAuth } from "../../firebase";
import { LoginPage } from "../../pages/Login";
import { ThanksgivingProvider } from "../../contexts";

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
