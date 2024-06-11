import React from "react";
import WayFinder from "../assets/WayFinder.png";
import BuildingLogo from "../assets/BuildingLogo.png";

import { useOutlet, useLocation, useNavigate, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import { LeftCircleFilled } from "@ant-design/icons";

const AgriTourlayout = () => {
  const { Content, Sider } = Layout;
  const outlet = useOutlet();
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Layout
      style={{
        height: "100vh" /* For 100% screen height */,
        width: "100vw" /* For 100% screen width */,
      }}
    >
      <Sider width={220} style={{ background: "#157f3d" }}>
        <div className="flex flex-col items-center mt-8">
          <Link to={"/"}>
            <img src={WayFinder} alt="" className="w-20" />
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
          className=" space-y-4 mt-5 font-bold text-lg bg-green-700 "
          defaultSelectedKeys={location.pathname}
          onClick={handleMenuClick}
          items={[
            // NwssuMap Component
            {
              key: "/AscaBuilding ",
              label: (
                <div className=" flex flex-row items-center space-x-2">
                  <img src={BuildingLogo} alt="" style={{ width: "24px" }} />
                  <span
                    style={{
                      color: "white",
                      fontFamily: "Poppins",
                    }}
                  >
                    AGRI-TOUR
                  </span>
                </div>
              ),
            },

            {
              key: "/NwssuBuilding",
              label: (
                <span style={{ color: "white", fontFamily: "Poppins" }}>
                  Back
                </span>
              ),
              icon: (
                <LeftCircleFilled
                  style={{ fontSize: "20px", color: "white" }}
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
export default AgriTourlayout;
