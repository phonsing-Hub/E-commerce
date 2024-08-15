import React, { useState } from "react";
import {
  Divider,
  Input,
  Accordion,
  AccordionItem,
  Link,
} from "@nextui-org/react";
import { Popover } from "antd";
import { EyeFilledIcon } from "../../icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../icons/EyeSlashFilledIcon";
export default function Signup_input_2({
  inputs,
  handleChange,
  handleClear,
  errors,
}) {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <Input
        required
        isRequired
        isClearable
        size="sm"
        type="text"
        label="อีเมล หรือ หมายเลขโทรศัพท์"
        name="userauth"
        value={inputs.userauth || ""}
        onChange={handleChange}
        onClear={() => handleClear("userauth")}
        isInvalid={errors.userauth ? true : false}
        errorMessage={errors.userauth}
      />
      <Input
        required
        isRequired
        size="sm"
        label="รหัสผ่าน"
        name="password"
        value={inputs.password || ""}
        onChange={handleChange}
        isInvalid={errors.password ? true : false}
        errorMessage={errors.password}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={() => setIsVisible1(!isVisible1)}
            aria-label="toggle password visibility"
          >
            {isVisible1 ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible1 ? "text" : "password"}
      />
      <Input
        required
        isRequired
        size="sm"
        label="ยืนยันรหัสผ่าน"
        name="confirmpassword"
        value={inputs.confirmpassword || ""}
        onChange={handleChange}
        isInvalid={errors.confirmpassword ? true : false}
        errorMessage={errors.confirmpassword}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={() => setIsVisible2(!isVisible2)}
            aria-label="toggle password visibility"
          >
            {isVisible2 ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible2 ? "text" : "password"}
      />
      <p className="text-xs text-default-400">
        รหัสผ่านต้องประกอบไปด้วย 6-14 characters ตัวอักษรเล็ก (abcd)
        ตัวอักษรใหญ่ (ABCD) ตัวเลข (1234) และสัญลักษณ์ ($#!?)
        <Popover
          content={pwExp}
          trigger="click"
          placement="topLeft"
          className=" cursor-pointer"
        >
          <Link className="text-xs" size="sm" underline="hover">
            รหัสผ่านที่ดี ควรมีอะไร?
          </Link>
        </Popover>
      </p>
    </div>
  );
}

const pwExp = (
  <div className="max-w-72">
    <div className="space-y-1">
      <h4 className="text-sm font-medium">รหัสผ่านที่ดี ควรมีอะไร?</h4>
      <p className="text-xs text-default-400">
        เพราะการตั้งรหัสผ่านหรือ Password ไม่ใช่เรื่องเล่น ๆ และต้องให้ความสำคัญ
        และไม่ควรใช้รหัสเดียวกันกับทุก account เพราะจะทำให้สืบค้นง่าย
        และคาดเดาได้ไม่ยาก
      </p>
    </div>
    <Divider className="my-4" />
    <Accordion isCompact>
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title={<h4 className="text-sm font-medium">ความยาวของ Password</h4>}
      >
        <p className="text-xs text-default-400">
          ควรมีความยาวที่เหมาะสม ประมาณ 10-14 characters ไม่ยาวเกินไปจนจำไม่ได้
          แต่ก็ไม่ได้สั้นเกินไปจนสามารถคาดเดาได้ง่ายจนเกินไป
        </p>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title={<p className="text-sm font-medium">สัญลักษณ์ ตัวอักษร</p>}
      >
        <p className="text-xs text-default-400">
          ใช้ทุกอย่างบนแป้นพิมพ์ นั่นก็คือมีแป้นตัวอักษรเล็ก (abcd) ตัวอักษรใหญ่
          (ABCD) ตัวเลข (1234) และแป้นสัญลักษณ์ ($#!?)
          เพื่อสร้างความหลากหลายให้กับรหัสผ่านของคุณ
        </p>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title={<p className="text-sm font-medium">ไม่ใช้ข้อมูลส่วนตัว</p>}
      >
        <p className="text-xs text-default-400">
          ไม่ใช้ข้อมูลส่วนตัวในการตั้งรหัสผ่าน เช่น วันเกิด หมายเลขโทรศัพท์
          ไปจนถึงชื่อของตัวเอง เพราะเป็นข้อมูลที่ทุกคนสามารถรู้ได้อย่างง่ายดาย
          เเละไม่ควรใช้รหัสผ่านเดียวกัน กับทุกบัญชีออนไลน์
        </p>
      </AccordionItem>
    </Accordion>
  </div>
);
