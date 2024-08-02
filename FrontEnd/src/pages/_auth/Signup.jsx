import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Button,
  Input,
  Checkbox,
  Link,
  Image,
} from "@nextui-org/react";

import { RiUserSearchFill } from "react-icons/ri";
import { AcmeLogo } from "../../icons/AcmeLogo";
import { EyeFilledIcon } from "../../icons/EyeFilledIcon";
import { EyeSlashFilledIcon } from "../../icons/EyeSlashFilledIcon";

export default function Signup() {
  const [isVisible_1, setIsVisible_1] = useState(false);
  const [isVisible_2, setIsVisible_2] = useState(false);
  const [isError_1, setIsError_1] = useState(false);
  const [isError_2, setIsError_2] = useState(false);
  const [isError_3, setIsError_3] = useState(false);
  const [emai_or_phone, setEmail_or_Phone] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [confirmpassword, setConfirmPassword] = useState(undefined);
  const [message_1, setMessage_1] = useState(undefined);
  const [message_2, setMessage_2] = useState(undefined);
  const [message_3, setMessage_3] = useState(undefined);

  const toggleVisibility_1 = () => setIsVisible_1(!isVisible_1);
  const toggleVisibility_2 = () => setIsVisible_2(!isVisible_2);
  const SubmitForm = (event) => {
    event.preventDefault();
    setIsError_1(false);
    setIsError_2(false);

    if (!emai_or_phone) {
      setIsError_1(true);
      setMessage_1("Pless enter emai orphone");
      return;
    }
    if (!password) {
        setIsError_2(true);
        setMessage_2("Pless enter password");
        return;
      }
    if (!confirmpassword) {
      setIsError_3(true);
      setMessage_3("Pless enter confirmpassword");
      return;
    }

    console.log("Form submitted: " + emai_or_phone + " " + password + " " + confirmpassword);
  };

  return (
    <Card className="w-[500px] max-w-[500px] m-4">
      <form onSubmit={SubmitForm}>
        <CardHeader className="flex gap-2 ">
          <AcmeLogo />
          <p className="font-bold text-inherit">APL-SHOP</p>
        </CardHeader>
        <CardBody className="flex flex-col gap-3 px-4 ">
          <Divider className="mb-2" />
          <Input
            type="text"
            label="Enter email or phone"
            variant="faded"
            endContent={
              <RiUserSearchFill className="text-2xl text-default-400 pointer-events-none" />
            }
            value={emai_or_phone}
            onValueChange={setEmail_or_Phone}
            isInvalid={isError_1}
            errorMessage={message_1}
            required
          />
          <Input
            type={isVisible_1 ? "text" : "password"}
            label="Enter password"
            variant="faded"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility_1}
                aria-label="toggle password visibility"
              >
                {isVisible_1 ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            value={password}
            onValueChange={setPassword}
            isInvalid={isError_2}
            errorMessage={message_2}
            required
          />

          <Input
            type={isVisible_2 ? "text" : "password"}
            label="Enter confirm password"
            variant="faded"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility_2}
                aria-label="toggle password visibility"
              >
                {isVisible_2 ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            value={confirmpassword}
            onValueChange={setConfirmPassword}
            isInvalid={isError_3}
            errorMessage={message_3}
            required
          />

          <div className="flex justify-center gap-2 m-3">
            <Button isIconOnly variant="faded" size="lg" className="p-1">
              <Image src="./GoogleLogo.ico" width={52} />
            </Button>
            <Button isIconOnly variant="faded" size="lg" className="p-1">
              <Image src="./FacebookLogo.ico" width={52} />
            </Button>
            <Button isIconOnly variant="faded" size="lg" className="p-1">
              <Image src="./AppleLogo.ico" width={52} />
            </Button>
          </div>
          <Divider />
        </CardBody>
        <CardFooter className="flex justify-end gap-2">
          <Link color="primary" href="/signin" size="sm" showAnchorIcon>
            sign in?
          </Link>
          <Button type="submit" color="primary" variant="flat" radius="sm">
            Sign Up
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
