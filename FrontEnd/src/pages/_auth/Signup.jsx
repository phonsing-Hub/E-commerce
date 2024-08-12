import React, { useState, useEffect } from "react";
import { Tabs, Tab, Card, CardBody, Button, Input } from "@nextui-org/react";
import UploadImg from "../../components/UploadImg";
export default function Signup() {
  const [selected, setSelected] = useState("1");
  const [fileList, setFileList] = useState([]);

  return (
    <div className="mx-4">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        <Tab key={"1"} title="Step 1">
          <Card>
            <CardBody className="md:w-[900px] min-w-[350px] md:h-[500px] min-h-[500px] relative flex items-center justify-center">
             <div className="w-full h-full flex flex-wrap gap-4">
                <div className="flex-1 basis-[300px] flex flex-col justify-center items-center">
                  <UploadImg fileList={fileList} setFileList={setFileList} />
                </div>
                <div className="flex-1 basis-[300px] flex flex-col justify-center items-center gap-4 p-4">
                  <Input/>
                  <Input/>
                  <Input/>
                </div>
              </div>
              <Button
                className="absolute bottom-2 right-2"
                color="secondary"
                onPress={() => setSelected("2")}
              >
                Next
              </Button>
            </CardBody>
          </Card>
        </Tab>
        <Tab key={"2"} title="Step 2">
          <Card>
            <CardBody className="md:w-[900px] h-[500px]">
              Step 2
              <Button
                className="absolute bottom-2 right-2"
                color="primary"
                onPress={() => setSelected("3")}
              >
                Next
              </Button>
            </CardBody>
          </Card>
        </Tab>
        <Tab key={"3"} title="Step 3">
          <Card>
            <CardBody className="md:w-[900px] h-[500px]">
              Step 3
              <Button
                className="absolute bottom-2 right-2"
                color="success"
                onPress={() => setSelected("1")}
              >
                Create
              </Button>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
