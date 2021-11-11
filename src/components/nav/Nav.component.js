import React from "react";
import { Link, useHistory } from "react-router-dom";

import {useAuth, useThanksgiving} from "../../contexts";
import { NavItem, NavWrapper } from "./styles";

export const Nav = () => {
  const { logout } = useAuth();
  const history = useHistory();
  const { currentGuest = {} } = useThanksgiving();
  const { id, isAdmin } = currentGuest;

  const logUserOut = async () => {
    try {
      await logout();
      console.log("logging out");
      history.push("/"); // redirecting to Home
    } catch (e) {
      console.log(`error ${e}`);
    }
  };

  return (
    <NavWrapper>
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      {isAdmin && (
        <NavItem>
          <Link to="/guest-list">Guest List</Link>
        </NavItem>
      )}
      {id && (
        <>
          <NavItem>
            <Link to="/dashboard">Dashboard</Link>
          </NavItem>
          <NavItem>
            <Link to="/directions">Directions</Link>
          </NavItem>
        </>
      )}
      {/*<NavItem>Fun facts</NavItem>*/}
      {!id && (
        <>
          <NavItem>
            <Link to="/login">Log In</Link>
          </NavItem>
          <NavItem>
            <Link to="/sign-up">Sign Up</Link>
          </NavItem>
        </>
      )}
      {id && <NavItem onClick={logUserOut}>Logout</NavItem>}
    </NavWrapper>
  );
};
