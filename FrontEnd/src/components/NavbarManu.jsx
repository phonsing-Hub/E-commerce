import React, { useState, useEffect } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";
import {
  Avatar,
  Badge,
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  Divider,
  Input,
} from "@nextui-org/react";
import { FaSearch } from "react-icons/fa";
import { AcmeLogo } from "../icons/AcmeLogo";
import { CartIcon } from "../icons/CartIcon";
import Switch_Mode from "./Switch_Mode";

export default function NavbarManu() {
  const data = useLoaderData();
  const navigate = useNavigate();

  const _Auth = (
    <div className="flex h-5 items-center space-x-2">
      <Switch_Mode />
      <Divider orientation="vertical" />
      <Button
        isIconOnly
        variant="light"
        //color="secondary"
        className="hidden sm:flex"
      >
        <Badge color="danger" size="sm" content={4} shape="circle">
          <CartIcon size={26} />
        </Badge>
      </Button>
      <Divider orientation="vertical" className="hidden sm:flex" />
      <Button
        color="success"
        variant="light"
        size="sm"
        onPress={() => navigate("/signin")}
      >
        <p className="font-bold">ลงชื่อเข้าใช้</p>
      </Button>
      <Divider orientation="vertical" />
      <Button
        color="primary"
        variant="light"
        size="sm"
        onPress={() => navigate("/signup")}
      >
        <p className="font-bold">ผู้ใช้ใหม่</p>
      </Button>
    </div>
  );

  return (
    <Navbar isBordered shouldHideOnScroll>
      <NavbarContent>
        <NavbarBrand>
          <button className="flex items-center" onClick={() => navigate("/")}>
            <AcmeLogo />
            <p className="font-bold text-inherit">APL-SHOP</p>
          </button>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent as="div" justify="end">
        <div className="hidden sm:flex">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[13rem] h-10",
              mainWrapper: "h-full",
              input: "text-sm",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="ค้นหา ..."
            size="sm"
            startContent={<FaSearch size={18} />}
            type="search"
          />
        </div>
        {data.authStatus ? (
          <div className="flex h-8 items-center space-x-2">
            <Switch_Mode />
            <Divider orientation="vertical" />
            <Button
              isIconOnly
              variant="light"
              className="pt-1 pr-1"
            >
              <Badge color="danger" size="sm" content={4} shape="circle">
                <CartIcon size={26} />
              </Badge>
            </Button>
            <Divider orientation="vertical" />
            <div className="p-1">
              <Avatar
                isBordered
                size="sm"
                name="Phonsing"
                src="./phonsing.jpg"
                color="primary"
              />
            </div>
          </div>
        ) : (
          _Auth
        )}
      </NavbarContent>
    </Navbar>
  );
}
