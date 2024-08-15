import React from 'react'
import {
    Input,
    Select,
    SelectItem,
    DatePicker,
  } from "@nextui-org/react";
  import {parseDate} from "@internationalized/date";
  import { MdMale, MdFemale, MdTransgender } from "react-icons/md";
  
export default function Signup_input_1({inputs, handleChange, handleClear, errors}) {
  let IconClass = "text-2xl text-default-400 pointer-events-none flex-shrink-0";
  
  return (
    <div className="flex flex-wrap gap-4">
   <Input
      required
      isRequired
      isClearable
      size="sm"
      type="text"
      label="ชื่อ"
      name='name'
      value={inputs.name || ""}
      onChange={handleChange}
      onClear={() => handleClear('name')}
      isInvalid={errors.name ? true : false}
      errorMessage={errors.name}
    />
    <Input
      required
      isRequired
      size="sm"
      type="text"
      label="นามสกุล"
      name='lastname'
      value={inputs.lastname || ""}
      onChange={handleChange}
      onClear={() => handleClear('lastname')}
      isInvalid={errors.lastname ? true : false}
      errorMessage={errors.lastname}
    />
    <Select
      isRequired
      size="sm"
      label="เพศ"
      className="flex-[1_0_250px]"
      name='gender'
      onChange={handleChange}
      isInvalid={errors.gender ? true : false}
      errorMessage={errors.gender}
    >
      <SelectItem
        key={"Male"}
        startContent={<MdMale className={IconClass} />}
      >
        ชาย
      </SelectItem>
      <SelectItem
        key={"Female"}
        startContent={<MdFemale className={IconClass} />}
      >
        หญิง
      </SelectItem>
      <SelectItem
        key={"Transgender"}
        startContent={<MdTransgender className={IconClass} />}
      >
        อื่นๆ
      </SelectItem>
    </Select>
    <DatePicker
      aria-label="Date (Show Month and Year Picker)"
      required
      isRequired
      size="sm"
      radius="sm"
      label={"วันเกิด (ค.ศ)"}
      showMonthAndYearPickers
      className="flex-[1_0_250px]"
      name='birthdate'
      value={inputs.birthdate || parseDate(getCurrentDate())}
      onChange={handleChange}
      isInvalid={errors.birthdate ? true : false}
      errorMessage={errors.birthdate}
    />
  </div>
  )
}

const getCurrentDate = () =>{
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}