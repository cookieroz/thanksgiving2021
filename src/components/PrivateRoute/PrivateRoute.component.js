import React from "react";
import { Route } from "react-router-dom";

import { LoginPage } from "../../pages/Login";
import { useAuth } from "../../contexts";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  const ComponentToRender = (props) =>
    currentUser ? <Component {...props} /> : <LoginPage />;

  return <Route {...rest} render={ComponentToRender} />;
};
