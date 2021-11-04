import React from "react";
import { Route } from "react-router-dom";

import { useAuth } from "../../firebase";
import {LoginPage} from "../../pages/Login";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  const ComponentToRender = (props) =>
    currentUser ? <Component {...props} /> : <LoginPage />;

  return <Route {...rest} render={ComponentToRender} />;
};