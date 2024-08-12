import React, { useState, useEffect } from "react";
import { Avatar, Chip, Tooltip } from "@nextui-org/react";
import { FaImages } from "react-icons/fa6";
import { MdOutlineQuestionMark } from "react-icons/md";
import { Upload, message } from "antd";
import ImgCrop from "antd-img-crop";

export default function UploadImg({ fileList, setFileList }) {
  const [img, setImg] = useState("./user.png");
  const handleImageCrop = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const imageUrl = URL.createObjectURL(file);
      setImg(imageUrl);
    };
    reader.readAsDataURL(file);
  };
  

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG files!");
      return Upload.LIST_IGNORE;
    }
    const isLt5M = file.size / 1024 / 1024 < 5;
    if (!isLt5M) {
      message.error("Image must be smaller than 5MB!");
      return Upload.LIST_IGNORE;
    }
    handleImageCrop(file);
    setFileList([file]);
    return false;
  };

  return (
    <>
      <Avatar
        isBordered
        src={img}
        className="w-36 h-36 text-large"
        color="primary"
      />

      <ImgCrop>
        <Upload
          beforeUpload={beforeUpload}
          fileList={fileList}
          maxCount={1}
          onChange={({ fileList: newFileList }) => {
            if (newFileList.length === 0) { 
              setImg("./user.png");
              setFileList([])
            }
          }}
          className="flex flex-col justify-center items-center relative"
        >
          <button className="mt-4">
            <Chip
              size="md"
              radius="sm"
              color="primary"
              variant="flat"
              startContent={<FaImages />}
            >
              Add Image
            </Chip>
          </button>
          <Tooltip
            content={<p className="text-xs">{"Only png or jpg and < 5 MB"}</p>}
            placement="bottom-start"
            showArrow={true}
            radius="sm"
          >
            <button className="ml-2 absolute top-2/4">
              <MdOutlineQuestionMark />
            </button>
          </Tooltip>
        </Upload>
      </ImgCrop>
    </>
  );
}
