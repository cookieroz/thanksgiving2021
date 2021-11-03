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

// import logo from "./logo.svg";
import "./App.css";
import { AuthProvider } from "./firebase";

import { Dashboard } from "./pages/Dashboard";
import { SignUpPage } from "./pages/SignUp";
import {LoginPage} from "./pages/Login";
// import { AuthProvider } from "./firebase";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/sign-up" exact component={SignUpPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/" component={Dashboard} />
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
}

export default App;
