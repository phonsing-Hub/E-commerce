import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavbarManu from "../components/NavbarManu";
import NavMenu from "../components/NavMenu";

export default function Root() {
  const location = useLocation();
  const isSigninPage = location.pathname === "/signin";
  const isSignupPage = location.pathname === "/signup";

  return (
    <div>
      { <NavbarManu />}
      {!isSigninPage && !isSignupPage && <NavMenu />}
      <Outlet />
    </div>
  );
}
