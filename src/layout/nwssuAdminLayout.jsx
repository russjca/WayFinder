import React from "react";
import { useOutlet, useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { Layout, Menu } from "antd";
import Wayfinder from "../assets/WayFinder.png";
import { TableOutlined, LogoutOutlined } from "@ant-design/icons";
const NwssuAdminLayout = () => {
  const { Content, Sider } = Layout;
  const outlet = useOutlet();
  const location = useLocation();
  const navigate = useNavigate();

  const signOutUser = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigate("/adminLogin");
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Layout className="min-h-screen">
      <Sider width={220} style={{ background: "#157f3d", position: "sticky" }}>
        <div className="flex flex-col justify-center items-center mt-5">
          <img src={Wayfinder} alt="Wayfinder Logo" className="w-20" />
          <h1
            className="text-white text-center font-bold mt-1 "
            style={{ fontFamily: "Poppins" }}
          >
            WAYFINDER <br /> PORTAL
          </h1>
        </div>

        <Menu
          theme="dark"
          className=" space-y-4 font-bold text-lg bg-green-700 "
          defaultSelectedKeys={location.pathname}
          onClick={handleMenuClick}
          items={[
            {
              key: "/adminBuildingOffice",
              label: (
                <div className="flex flex-row items-center">
                  <TableOutlined
                    style={{ fontSize: "25px", color: "white" }}
                    className="ml-1 "
                  />
                  <span
                    style={{
                      color: "white",
                      fontFamily: "Poppins",
                    }}
                  >
                    Building Office
                  </span>
                </div>
              ),
            },

            {
              key: "/adminBuildingInfo",
              label: (
                <div className="flex flex-row items-center">
                  <TableOutlined
                    style={{ fontSize: "25px", color: "white" }}
                    className="ml-1 "
                  />
                  <span
                    style={{
                      color: "white",
                      fontFamily: "Poppins",
                    }}
                  >
                    Building Info
                  </span>
                </div>
              ),
            },

            {
              label: (
                <div>
                  <LogoutOutlined
                    style={{ fontSize: "25px", color: "white" }}
                    className="ml-1 "
                  />
                  <span
                    onClick={signOutUser}
                    style={{
                      color: "white",
                      fontFamily: "Poppins",
                    }}
                  >
                    LOGOUT
                  </span>
                </div>
              ),
            },
          ]}
        />
      </Sider>
      <Layout>
        <Content className="bg-green-900">
          <p>{outlet}</p>
        </Content>
      </Layout>
    </Layout>
  );
};
export default NwssuAdminLayout;
