import React, { useState } from "react";
import { doSignInWithEmailAndPassword } from "../helpers/auth";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import NwssuLogo from "../assets/NwssuLogo.png";
import WayFinder from "../assets/WayFinder.png";
import { Button, Form, Input, message } from "antd";

const AdminLogin = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onFinish = async ({ email, password }) => {
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        navigate("/adminBuildingOffice", { replace: true });
      } catch (error) {
        if (error.code === "auth/invalid-credential") {
          // Handle invalid credential error
          setErrorMessage("Invalid email or password");
        } else {
          // Handle other authentication errors
          setErrorMessage(error.message);
        }
        setIsSigningIn(false);
        message.error("Failed to sign in. Please check your credentials.");
      }
    }
  };

  if (!auth || !auth.userLoggedIn) {
    return (
      <div className="bg-green-900 h-lvh">
        <div>
          <div className="flex flex-row justify-evenly h-32 bg-green-700 items-center">
            <div className="flex flex-row justify-start space-x-4  text-white">
              <div>
                <img src={NwssuLogo} alt="" className=" w-28" />
              </div>
              <div
                className=" flex justify-center items-center font-black text-3xl"
                style={{ fontFamily: "Poppins" }}
              >
                NORTHWEST SAMAR STATE UNIVERSITY WAYFINDER PORTAL
              </div>
            </div>
            <Link to={"/"} className=" no-underline">
              <div
                className="text-white font-black text-3xl"
                style={{ fontFamily: "Poppins" }}
              >
                GO TO MAP
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-evenly items-center mt-10  ">
          <div className="flex flex-col justify-center items-center text-center rounded-md w-96 h-96 bg-green-700">
            <h1
              className="font-bold text-white"
              style={{ fontFamily: "Poppins" }}
            >
              ADMIN LOGIN
            </h1>
            <Form
              name="basic"
              style={{
                maxWidth: 800,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
                onChange={(e) => setEmail(e.target.value)}
              >
                <Input placeholder="User Name" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="medium"
                  style={{ fontWeight: "bold", fontFamily: "Poppins" }}
                >
                  Submit
                </Button>
              </Form.Item>
              <Link to={"/forgotPassword"}>
                <Form.Item>
                  <p className="login-form-forgot" type="primary">
                    Forgot password
                  </p>
                </Form.Item>
              </Link>
            </Form>
          </div>
          {errorMessage && (
            <span className="text-red-600 font-bold">{errorMessage}</span>
          )}
          <div>
            <img
              src={WayFinder}
              alt=""
              style={{ width: "500px", height: "500px" }}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default AdminLogin;
