import React, { useEffect } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useLoaderData,
} from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Chip,
  Button,
  Divider,
  User,
} from "@nextui-org/react";
import { AiOutlineHome } from "react-icons/ai";
import { BsShopWindow } from "react-icons/bs";
import { AcmeLogo } from "../icons/AcmeLogo";
import Switch_Mode from "./Switch_Mode";

export default function NavbarManu() {
  const data = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const iconSize = 20;

  const _Auth = (
    <div className="flex h-5 items-center space-x-2">
      <Button
        color="success"
        variant="light"
        size="sm"
        onPress={() => navigate("/signin")}
      >
        <p className="font-bold">Sign In</p>
      </Button>
      <Divider orientation="vertical" />
      <Button
        color="primary"
        variant="light"
        size="sm"
        onPress={() => navigate("/signup")}
      >
        <p className="font-bold">Sign Up</p>
      </Button>
    </div>
  );

  return (
    <Navbar
      isBordered
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
          "data-[active=true]:after:transition-all",
          "data-[active=true]:after:duration-300",
        ],
      }}
    >
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">APL-SHOP</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={isActive("/")}>
          <Link to="/">
            <Chip
              variant="light"
              startContent={
                <AiOutlineHome className="font-bold" size={iconSize} />
              }
            >
              Home
            </Chip>
          </Link>
        </NavbarItem>
        <NavbarItem isActive={isActive("/shopping")}>
          <Link to="/shopping">
            <Chip
              variant="light"
              startContent={
                <BsShopWindow className="font-bold" size={iconSize} />
              }
            >
              Shopping
            </Chip>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <Switch_Mode />
        {data.authStatus ? (
          <User
          name="Jane Doe"
          description="Product Designer"
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
            isBordered: true,
            color: "primary"
          }}
        />
        ) : (
          _Auth
        )}
      </NavbarContent>
    </Navbar>
  );
}
