import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // Redirect,
  // useHistory,
  // useLocation,
} from "react-router-dom";

import {GlobalResetStyle, ThanksgivingContentWrapper} from "./styles";


// import { PrivateRoute } from "./components/PrivateRoute/";
import { AuthProvider } from "./contexts";
import { Nav } from "./components/nav";

import { Homepage } from "./pages/Home";
import { LoginPage } from "./pages/Login";
import { SignUpPage } from "./pages/SignUp";

const App = () => {
  return (
    <AuthProvider>
      <GlobalResetStyle />
      <Router>
        <>
          <Nav />
          <ThanksgivingContentWrapper>
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/sign-up" exact component={SignUpPage} />
              <Route path="/login" exact component={LoginPage} />
            </Switch>
          </ThanksgivingContentWrapper>
        </>
      </Router>
    </AuthProvider>
  );
};

export default App;
