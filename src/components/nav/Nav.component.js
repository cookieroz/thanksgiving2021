import React from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../contexts";
import { NavItem, NavWrapper } from "./styles";

export const Nav = () => {
  const { currentUserUid } = useAuth();

  return (
    <NavWrapper>
      <NavItem>
        <Link to="/">Home</Link>
      </NavItem>
      {currentUserUid && (
        <>
          <NavItem>Dashboard</NavItem>
          <NavItem>My Guests</NavItem>
          <NavItem>Directions</NavItem>
        </>
      )}
      <NavItem>Fun facts</NavItem>
      {!currentUserUid && (
        <>
          <NavItem>
            <Link to="/login">Log In</Link>
          </NavItem>
          <NavItem>
            <Link to="/sign-up">Sign Up</Link>
          </NavItem>
        </>
      )}
      {currentUserUid && <NavItem>Logout</NavItem>}
    </NavWrapper>
  );
};
