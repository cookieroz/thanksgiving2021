import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Nav } from "./components/nav";
import { PrivateRoute } from "./components/PrivateRoute/";
import { AuthProvider, ThanksgivingProvider } from "./contexts";

import { Dashboard } from "./pages/Dashboard";
import { Directions } from "./pages/Directions";
import { Homepage } from "./pages/Home";
import { GuestList } from "./pages/GuestList";
import { LoginPage } from "./pages/Login";
import { SignUpPage } from "./pages/SignUp";

import { GlobalResetStyle, ThanksgivingContentWrapper } from "./styles";

const App = () => {
  return (
    <AuthProvider>
      <GlobalResetStyle />
      <Router>
        <ThanksgivingProvider>
          <ThanksgivingContentWrapper>
            <Nav />
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/sign-up" exact component={SignUpPage} />
              <Route path="/login" exact component={LoginPage} />
              <PrivateRoute path="/dashboard" exact component={Dashboard} />
              <PrivateRoute path="/directions" exact component={Directions} />
              <PrivateRoute path="/guest-list" exact component={GuestList} />
            </Switch>
          </ThanksgivingContentWrapper>
        </ThanksgivingProvider>
      </Router>
    </AuthProvider>
  );
};

export default App;
