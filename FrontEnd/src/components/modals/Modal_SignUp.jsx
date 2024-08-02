import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import { AcmeLogo } from "../../icons/AcmeLogo";
import { GrUserAdmin } from "react-icons/gr";
import { TbPasswordUser } from "react-icons/tb";

export default function Modal_SignUp({isOpen, onOpenChange}) {
  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex items-center">
              <AcmeLogo />
              <p className="font-bold text-inherit">APL-SHOP</p>
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  endContent={
                    <GrUserAdmin className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  size="lg"
                  radius="sm"
                  placeholder="Enter your email or phone"
                  variant="faded"
                />
                <Input
                  endContent={
                    <TbPasswordUser className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  size="lg"
                  radius="sm"
                  placeholder="Enter your password"
                  type="password"
                  variant="faded"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
