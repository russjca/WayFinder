import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";
import NwssuLogo from "../assets/NwssuLogo.png";
import WayFinder from "../assets/WayFinder.png";

const NwssuLanding = () => {
  return (
    <div className="bg-green-900 h-lvh ">
      <div>
        <div className="flex flex-row justify-evenly items-center h-32 bg-green-700 ">
          <div className="flex flex-row justify-start space-x-4  text-white">
            <div>
              <img src={NwssuLogo} alt="" className=" w-28" />
            </div>
            <div
              className=" flex justify-center items-center font-black text-3xl"
              style={{ fontFamily: "Poppins" }}
            >
              NORTHWEST SAMAR STATE UNIVERSITY WAYFINDER
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center content-center text-center space-x-32 ml-28 mt-16">
        <div className="space-y-10">
          <div
            className=" text-white text-4xl font-bold"
            style={{ fontFamily: "Poppins" }}
          >
            Navigate NwSSU Life with Ease:
            <br /> Your Map to Hassle-Free Exploration!
          </div>
          <div className="flex flex-row justify-center items-center space-x-10 ">
            <div>
              <Link to={"/nwssuMap"}>
                <Button
                  type="primary"
                  size="large"
                  className=" font-bold text-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  GO TO MAP
                </Button>
              </Link>
            </div>
            <div>
              <Link to={"/adminLogin"}>
                <Button
                  type="primary"
                  size="large"
                  className=" font-bold text-medium"
                  style={{ fontFamily: "Poppins" }}
                >
                  ADMIN
                </Button>
              </Link>
            </div>
          </div>
        </div>
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
};

export default NwssuLanding;
