import React from "react";
import BuildingLogo from "../assets/BuildingLogo.png";
import MapLogo from "../assets/MapLogo.png";
import WayFinder from "../assets/WayFinder.png";
import { useOutlet, useLocation, useNavigate, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { LeftCircleFilled, SettingFilled } from "@ant-design/icons";

const Mainlayout = () => {
  const { Content, Sider } = Layout;
  const outlet = useOutlet();
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Layout className="min-h-screen">
      <Sider
        width={230}
        style={{
          background: "#157f3d",
        }}
      >
        <div className="flex flex-col text-center items-center mt-8">
          <Link to={"/"}>
            <img
              src={WayFinder}
              alt=""
              style={{ width: "90px", height: "95px" }}
            />
          </Link>
          <div className="ml-1">
            <Link
              to={"/"}
              className="text-white hover:text-white font-black text-xl"
            >
              WAYFINDER
            </Link>
          </div>
        </div>
        <Menu
          theme="dark"
          className="space-y-4 mt-5 font-bold text-lg bg-green-700 "
          defaultSelectedKeys={location.pathname}
          onClick={handleMenuClick}
          items={[
            // NwssuMap Component
            {
              key: "/nwssuMap",
              label: (
                <div className="flex flex-row items-center space-x-2">
                  <img src={MapLogo} alt="" style={{ width: "30px" }} />
                  <span
                    style={{
                      color: "white",
                      marginLeft: "5px",
                      fontFamily: "Poppins",
                    }}
                  >
                    NwSSU Map
                  </span>
                </div>
              ),
            },
            // NwssuBuilding Component
            {
              key: "/NwssuBuilding",
              label: (
                <div className="flex flex-row items-center space-x-2">
                  <img src={BuildingLogo} alt="" style={{ width: "24px" }} />

                  <span
                    style={{
                      color: "white",
                      marginLeft: "10px",
                      fontFamily: "Poppins",
                    }}
                  >
                    NwSSU Buildings
                  </span>
                </div>
              ),
            },

            {
              key: "/nwssuUserGuide",
              label: (
                <span style={{ color: "white", fontFamily: "Poppins" }}>
                  User Guide
                </span>
              ),
              icon: (
                <SettingFilled style={{ fontSize: "24px", color: "white" }} />
              ),
            },

            // LandingPage Component
            {
              key: "/",
              label: (
                <span style={{ color: "white", fontFamily: "Poppins" }}>
                  Back
                </span>
              ),
              icon: (
                <LeftCircleFilled
                  style={{ fontSize: "24px", color: "white" }}
                />
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

export default Mainlayout;
