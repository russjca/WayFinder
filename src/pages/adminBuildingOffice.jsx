import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Button, Modal, Form, Input, Space, Table } from "antd";
import { AddBuildingOffice, AddBuildingName } from "../components/addData";

import { useInfoContext } from "../context/infoContext";

const AdminBuildingOffice = () => {
  const {
    setIsBuildingName,
    getBuildingName,
    handleEditFormSubmit,
    isEditOfficeModalVisible,
    setIsBuildingOffice,
    handleEditRecord,
    updateBuildingOffice,
    handleRecordOffice,
    isEditModalVisible,
    editRecord,
    handleEditCancel,
    form2,
    form3,
    deleteBuildingOffice,
  } = useInfoContext();

  const expandedRowRender = (record) => {
    const columns = [
      {
        title: <b>OFFICE NAME</b>,
        dataIndex: "buildingofficename",
        key: "buildingofficename",
        render: (text) => <b>{text}</b>,
      },
      {
        title: <b>OFFICE DESCRIPTION</b>,
        dataIndex: "officedescription",
        key: "officedescription",
        render: (text) => <b>{text}</b>,
      },
      {
        title: "Action",
        key: "action",
        render: (_, record) => (
          <Space size="middle">
            <EditOutlined onClick={() => handleRecordOffice(record)} />
            <DeleteOutlined
              onClick={() =>
                deleteBuildingOffice(record.buildingid, record.officeId)
              }
            />
          </Space>
        ),
      },
    ];

    return (
      <Table
        columns={columns}
        dataSource={record.buildingoffice}
        pagination={false}
      />
    );
  };

  const columns = [
    {
      title: <b>BUILDING NAME</b>,
      dataIndex: "buildingname",
      key: "buildingname",
      render: (text) => <b>{text}</b>,
    },
    {
      title: <b>ACTION</b>,
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <EditOutlined onClick={() => handleEditRecord(record)} />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-center items-center mt-7 mb-8 space-x-5">
        <Button
          type="primary"
          size="large"
          onClick={() => setIsBuildingOffice(true)}
        >
          Add Building Office
        </Button>
        <Button
          type="primary"
          size="large"
          onClick={() => setIsBuildingName(true)}
        >
          Add Building Name
        </Button>
      </div>

      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (record) => expandedRowRender(record),
          defaultExpandedRowKeys:
            getBuildingName.length > 0 ? [getBuildingName[0].key] : [],
        }}
        dataSource={getBuildingName}
      />

      <Modal
        title="Edit Building Name"
        open={isEditModalVisible}
        onCancel={handleEditCancel}
        footer={null}
        style={{ textAlign: "center" }}
      >
        <Form
          form={form2}
          onFinish={handleEditFormSubmit}
          initialValues={editRecord}
          layout="vertical"
        >
          <Form.Item
            label="Building Name"
            name="buildingname"
            rules={[
              {
                required: true,
                message: "Please input building name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Edit Building Info
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Edit Building Office"
        open={isEditOfficeModalVisible}
        onCancel={handleEditCancel}
        footer={null}
        style={{ textAlign: "center" }}
      >
        <Form
          form={form3}
          onFinish={updateBuildingOffice}
          initialValues={editRecord}
          layout="vertical"
        >
          <Form.Item
            label="Building Office"
            name="buildingofficename"
            rules={[
              {
                required: true,
                message: "Please input Office!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Building Office"
            name="officedescription"
            rules={[
              {
                required: true,
                message: "Please input Office!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Edit Building Office
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <AddBuildingOffice />
      <AddBuildingName />
    </div>
  );
};

export default AdminBuildingOffice;
