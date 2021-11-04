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

import "./App.css";

import { Dashboard } from "./pages/Dashboard";
import { LoginPage } from "./pages/Login";
import { SignUpPage } from "./pages/SignUp";
import { PrivateRoute } from "./components/PrivateRoute/";
import { AuthProvider } from "./contexts";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <PrivateRoute path="/" exact component={Dashboard} />
            <Route path="/sign-up" exact component={SignUpPage} />
            <Route path="/login" exact component={LoginPage} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
  // return (
  //   <AuthProvider>
  //     <Router>
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <p>
  //           Edit <code>src/App.js</code> and save to reload.
  //         </p>
  //         <a
  //           className="App-link"
  //           href="https://reactjs.org"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Learn React
  //         </a>
  //       </header>
  //     </Router>
  //   </AuthProvider>
  // );
};

export default App;
