import { Table, Space, Button, Modal, Form, Input, message } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { useInfoContext } from "../context/infoContext";
import { AddBuildingInfo } from "../components/addData";

const AdminBuildingInfo = () => {
  const { TextArea } = Input;
  const {
    getBuildingInfo,
    setIsBuildingInfo,
    form,
    handleEditFormSubmit,
    handleEditRecord,
    isEditModalVisible,
    handleEditCancel,
    editRecord,
  } = useInfoContext();

  const BuildingInfo = [
    {
      title: <b>LOGO</b>,
      dataIndex: "logo",
      key: "logo",
    },
    {
      title: <b>ABOUT</b>,
      dataIndex: "about",
      key: "about",
      render: (text) => <b>{text}</b>,
    },
    {
      title: <b>COURSE</b>,
      dataIndex: "course",
      key: "course",
      render: (text) => <b>{text}</b>,
    },
    {
      title: <b>ACTION</b>,
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined
            onClick={() => handleEditRecord(record)}
            style={{
              fontSize: "17px",
            }}
          />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-center items-center space-x-5 mt-5 mb-5">
        {" "}
        <Button
          type="primary"
          size="large"
          onClick={() => setIsBuildingInfo(true)}
          style={{ textAlign: "center" }}
        >
          Add Building Info
        </Button>
      </div>

      <Table dataSource={getBuildingInfo} columns={BuildingInfo} />

      <Modal
        title="Edit Building Info"
        open={isEditModalVisible}
        onCancel={handleEditCancel}
        footer={null}
        style={{ textAlign: "center" }}
      >
        <Form
          form={form}
          onFinish={handleEditFormSubmit}
          initialValues={editRecord}
          layout="vertical"
        >
          <Form.Item
            label="About"
            name="about"
            rules={[
              {
                required: true,
                message: "Please input about!",
              },
            ]}
          >
            <TextArea style={{ height: 100 }} />
          </Form.Item>
          <Form.Item
            label="Course"
            name="course"
            rules={[
              {
                required: true,
                message: "Please input course!",
              },
            ]}
          >
            <TextArea style={{ height: 100 }} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Edit Building Name
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <AddBuildingInfo />
    </div>
  );
};

export default AdminBuildingInfo;
