import React, { useState } from "react";
import { Button, Divider } from "@nextui-org/react";
import Signup_input_1 from "../../components/_auth/Signup_input_1";
import Signup_input_2 from "../../components/_auth/Signup_input_2";

export default function Signup() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    if (event.target) {
      const name = event.target.name;
      const value = event.target.value;
      setInputs((values) => ({ ...values, [name]: value }));
    } else {
      setInputs((values) => ({
        ...values,
        birthdate: event,
      }));
    }
  };
  const handleClear = (name) => {
    setInputs((values) => ({ ...values, [name]: "" }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    Object.keys(validationRules).forEach((field) => {
      const error = validationRules[field](inputs[field]);
      if (error) {
        newErrors[field] = error;
      }
    });
    if (inputs.password !== inputs.confirmpassword) {
      newErrors.confirmpassword = "รหัสผ่านไม่ตรงกัน";
    }
    setErrors(newErrors);
    // const { year, month, day } = inputs.birthdate;
    // const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

    if (Object.keys(newErrors).length === 0) {
      // No errors, submit the form or perform the desired action
      console.log("Form data:", inputs);
    } else {
      console.log("Form errors:", newErrors);
    }
  };

  return (
    <div className="w-full max-w-screen-sm mx-4 mb-16">
      <form onSubmit={handleSubmit}>
        <p className="text-center font-bold text-2xl"> ข้อมูลส่วนตัว</p>
        <Divider className="my-4" />
        <div className="w-full">
          <Signup_input_1
            inputs={inputs}
            handleChange={handleChange}
            handleClear={handleClear}
            errors={errors}
          />
        </div>

        <div className="mt-10">
          <p className="text-center font-bold text-2xl">ข้อมูลการเข้าสู่ระบบ</p>
          <Divider className="my-4" />
          <div className="flex flex-col gap-4">
            <Signup_input_2  inputs={inputs}
            handleChange={handleChange}
            handleClear={handleClear}
            errors={errors}
            />
          </div>
        </div>
        <div className="my-4 flex justify-end">
          <Button type="submit" color="primary" radius="sm" variant="flat" onClick={handleSubmit}>
            สมัครสมาชิก
          </Button>
        </div>
      </form>
    </div>
  );
}

const validationRules = {
  name: (value) => {
    if (!value || value.trim() === "") return "Username is required.";
    return null;
  },
  lastname: (value) => {
    if (!value || value.trim() === "") return "Lastnamename is required.";
    return null;
  },
  birthdate: (value) => {
    if (!value || !value.year) return "Birthdate is required.";
    return null;
  },
  gender: (value) => {
    if (!value || value.trim() === "") return "Gender is required.";
    return null;
  },
  userauth: (value) => {
    if (!value || value.trim() === "") return "Email or Phone is required.";
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let phonePattern = /^\d{10}$/;
    if(!emailPattern.test(value) && !phonePattern.test(value))
    return "รูปแบบอีเมลหรือหมายเลขโทรศัพท์ไม่ถูกต้อง";
    return null;
  },
  password: (value) => {
    if (!value || value.trim() === "") return "password is required.";
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$#!?_-])[A-Za-z\d$#!?_-]{6,14}$/;
    if(!passwordPattern.test(value))
    return "รูปเเบบรหัสผ่านไม่ถูกต้อง"
    return null;
  },
  confirmpassword: (value) => {
    if (!value || value.trim() === "") return "password is required.";
    return null;
  },
};
