import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Tabs, Tab, ScrollShadow } from "@nextui-org/react";
export default function NavMenu() {
  return (
      <div className="nav-menu my-2 flex justify-center">
        <ScrollShadow orientation="horizontal" className="min-w-[344px]">
        <Tabs
          aria-label="Tabs variants"
          color="secondary"
          variant="solid"
          radius="sm"
          className="mx-2"
        >
          <Tab key="/" title="เเนะนำ" />
          <Tab key="/phones" title="โทรศัพท์" />
          <Tab key="/computer" title="คอมพิวเตอร์" />
          <Tab key="/notebook" title="โน๊ตบุ๊ค" />
          <Tab key="/speaker" title="หูฟัง || ลำโพง" />
          <Tab key="/other" title="อุปกรณ์เสริม" />
        </Tabs>
        </ScrollShadow>
      </div>
  );
}
