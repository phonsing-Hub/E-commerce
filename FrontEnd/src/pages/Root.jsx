import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavbarManu from "../components/NavbarManu";

export default function Root() {
  const location = useLocation();
  const isSigninPage = location.pathname === "/signin";
  const isSignupPage = location.pathname === "/signup";

  return (
    <div>
      {!isSigninPage && !isSignupPage && <NavbarManu />}
      <Outlet />
    </div>
  );
}
