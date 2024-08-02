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

export default function Signin() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isError_1, setIsError_1] = useState(false);
  const [isError_2, setIsError_2] = useState(false);
  const [emai_or_phone, setEmail_or_Phone] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [message_1, setMessage_1] = useState(undefined);
  const [message_2, setMessage_2] = useState(undefined);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const SubmitForm = (event) => {
    event.preventDefault();
    setIsError_1(false);
    setIsError_2(false);

    if(!emai_or_phone){
      setIsError_1(true);
      setMessage_1("Pless enter emai orphone");
      return;
    }
    if(!password){
      setIsError_2(true);
      setMessage_2("Pless enter password");
      return;
    }

    console.log("Form submitted");
    console.log("Remember me:", isSelected);
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
            type={isVisible ? "text" : "password"}
            label="Enter password"
            variant="faded"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
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
          <div className="flex py-2 px-1 justify-between">
            <Checkbox
              classNames={{
                label: "text-small",
              }}
              onValueChange={setIsSelected}
            >
              Remember me
            </Checkbox>
            <Link color="primary" href="#" size="sm">
              Forgot password?
            </Link>
          </div>
          <Divider />
        </CardBody>
        <CardFooter className="flex justify-end gap-2">
          <Link color="primary" href="/signup" size="sm" showAnchorIcon>
            sign up?
          </Link>
          <Button type="submit" color="primary" variant="flat" radius="sm">
            Sign In
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
