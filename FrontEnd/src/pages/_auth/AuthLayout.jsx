import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import Switch_Mode from "../../components/Switch_Mode";
import { RiDeleteBack2Fill } from "react-icons/ri";

const AuthLayout = () => {
  const navigate = useNavigate();
  return (
    <main className="flex justify-center items-center h-svh">
      <div className="flex  fixed top-4 left-4 gap-2 ">
        <Button isIconOnly variant="light" color="danger" onPress={()=>navigate('/')}>
         <RiDeleteBack2Fill size={20} />
        </Button>
        <Switch_Mode/>
      </div>
      <Outlet />
    </main>
  );
};

export default AuthLayout;
