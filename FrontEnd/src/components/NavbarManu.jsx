import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Chip,
  Button,
  Divider,
} from "@nextui-org/react";
import { AiOutlineHome } from "react-icons/ai";
import { BsShopWindow } from "react-icons/bs";

import { AcmeLogo } from "../icons/AcmeLogo";
import Switch_Mode from "./Switch_Mode";
import Modal_SignIn from "./modals/Modal_SignIn";
import Modal_SignUp from "./modals/Modal_SignUp";

export default function NavbarManu() {
  // const { isOpen: isOpen_SignIn, onOpen: onOpen_SignIn, onOpenChange: onOpenChange_SignIn } = useDisclosure();
  // const { isOpen: isOpen_SignUp, onOpen: onOpen_SignUp, onOpenChange: onOpenChange_SignUp } = useDisclosure();
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  const iconSize = 20;
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
        <div className="flex h-5 items-center space-x-2">
          <Button color="success" variant="light" size="sm" onPress={()=>navigate('/signin')}>
            <p className="font-bold">Sign In</p>
          </Button>
          <Divider orientation="vertical" />
          <Button color="primary" variant="light" size="sm" onPress={()=>navigate('/signup')}>
            <p className="font-bold">Sign Up</p>
          </Button>
          
        </div>
        {/* <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              src="https://i.pravatar.cc/150?u=a04258114e29026702d"
              isBordered
              color="primary"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
      </NavbarContent>
    </Navbar>
  );
}
