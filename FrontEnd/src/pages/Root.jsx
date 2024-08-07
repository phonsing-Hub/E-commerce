import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavbarManu from "../components/NavbarManu";

export default function Root() {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [slide, setSlide] = useState("slide-in");
  const location = useLocation();
  const isSigninPage = location.pathname === "/signin";
  const isSignupPage = location.pathname === "/signup";

  const handleScroll = () => {
    const currentScrollY = Math.round(window.scrollY);
    //console.log("scrollY: " + currentScrollY + " value: " + lastScrollY);
    currentScrollY > lastScrollY ? setSlide("slide-out") : setSlide("slide-in");
    if(currentScrollY == 0) setSlide("slide-in");
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div>
      {!isSigninPage && !isSignupPage && (
        <header className={`header ${slide}`}>
          <NavbarManu />
        </header>
      )}
      <Outlet />
    </div>
  );
}
