import { useInfoContext } from "../context/infoContext";
import { Modal, Form, Input, message, Select } from "antd";
import React from "react";

const AddBuildingInfo = () => {
  const { form1, addBuildingInfo, isBuildingInfo, handleAddCancel } =
    useInfoContext();
  const { TextArea } = Input;
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Building information added successfully!",
    });
  };

  const onFinish = (values) => {
    addBuildingInfo(values);
    success();
  };

  return (
    <div>
      {contextHolder}
      <Modal
        title="Add Building Info"
        open={isBuildingInfo}
        onOk={() => form1.submit()}
        onCancel={handleAddCancel}
      >
        <div>
          <Form form={form1} onFinish={onFinish} name="basic">
            <Form.Item
              label="About"
              name="about"
              rules={[{ required: true, message: "Please Input About!" }]}
            >
              <TextArea style={{ height: 100 }} />
            </Form.Item>
            <Form.Item
              label="Course"
              name="course"
              rules={[{ required: true, message: "Please Input Course!" }]}
            >
              <TextArea style={{ height: 100 }} />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

const AddBuildingName = () => {
  const { form, addBuildingName, isBuildingName, handleAddCancel } =
    useInfoContext();
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Building name added successfully!",
    });
  };

  const onFinish = (values) => {
    addBuildingName(values);
    success();
  };

  return (
    <div>
      {contextHolder}
      <Modal
        title="Add Building Name"
        open={isBuildingName}
        onOk={() => form.submit()}
        onCancel={handleAddCancel}
      >
        <div>
          <Form form={form} onFinish={onFinish} name="basic">
            <Form.Item
              label="Building Name"
              name="buildingname"
              rules={[
                { required: true, message: "Please Input Building Name!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

const AddBuildingOffice = () => {
  const {
    form2,
    addBuildingOffice,
    isBuildingOffice,
    handleAddCancel,
    getBuildingName,
    setSelectedBuilding,
  } = useInfoContext();
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Building office added successfully!",
    });
  };

  const onFinish = (values) => {
    addBuildingOffice(values);
    success();
  };

  return (
    <div>
      {contextHolder}
      <Modal
        title="Building Office"
        open={isBuildingOffice}
        onOk={() => form2.submit()}
        onCancel={handleAddCancel}
      >
        <div>
          <Form form={form2} onFinish={onFinish} name="basic">
            <Form.Item
              label="Building Name"
              rules={[
                { required: true, message: "Please Input Building Name!" },
              ]}
            >
              <Select
                onSelect={(value, option) => {
                  setSelectedBuilding({ id: option.key });
                }}
              >
                {getBuildingName.map((building) => (
                  <Select.Option
                    value={building.buildingname}
                    key={building.buildingid}
                  >
                    {building.buildingname}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Building Office"
              name="buildingofficename"
              rules={[
                {
                  required: true,
                  message: "Please Input Building Office Name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Office Description"
              name="officedescription"
              rules={[
                { required: true, message: "Please Input Office Description!" },
              ]}
            >
              <Input />
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export { AddBuildingInfo, AddBuildingName, AddBuildingOffice };
