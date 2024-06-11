import React, { useState } from "react";
import { handleForgotPassword } from "../helpers/auth";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const onFinish = () => {
    if (email) {
      // Check if email is not empty
      handleForgotPassword(email); // Call handleForgotPassword with the email
    } else {
      message.error("Please enter your email address.");
    }
  };
  return (
    <div className="h-screen flex items-center justify-center text-center">
      <Form name="basic" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
            },
          ]}
          onChange={(e) => setEmail(e.target.value)}
        >
          <Input placeholder="Input your email" />
        </Form.Item>

        <div>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="medium"
              style={{ fontWeight: "bold", fontFamily: "Poppins" }}
            >
              Submit
            </Button>
            <Link to={"/"}>
              <Button type="primary">BACK</Button>
            </Link>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default ForgotPassword;
