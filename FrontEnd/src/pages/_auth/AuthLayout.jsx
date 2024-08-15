import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="flex justify-center items-center pt-16">
      <Outlet />
    </main>
  );
};
export default AuthLayout;
