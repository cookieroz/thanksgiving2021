import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";

import { useAuth, useThanksgiving } from "../../contexts";
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
      <NavItemComponent displayText="Home" path="/" />
      {isAdmin && (
        <NavItemComponent displayText="Guest List" path="/guest-list" />
      )}
      {id && (
        <>
          <NavItemComponent displayText="Dashboard" path="/dashboard" />
          <NavItemComponent displayText="News" path="/news" />
          <NavItemComponent displayText="Directions" path="/directions" />
        </>
      )}
      {/*<NavItem>Fun facts</NavItem>*/}
      {!id && (
        <>
          <NavItemComponent displayText="Log In" path="/login" />
          <NavItemComponent displayText="Sign Up" path="/sign-up" />
        </>
      )}
      {id && <NavItem onClick={logUserOut}>Logout</NavItem>}
    </NavWrapper>
  );
};

const NavItemComponent = ({ displayText, path }) => {
  const { pathname: currentPath } = useLocation();

  return (
    <NavItem isActive={currentPath === path}>
      <Link to={path}>{displayText}</Link>
    </NavItem>
  );
};
