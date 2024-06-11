import React from "react";
import { Image } from "antd";
import { useInfoContext } from "../context/infoContext";
import ceaLogo from "../assets/ceaLogo.png";
import CEA from "../assets/CEA.mp4";
import CEA1 from "../assets/ceaFacilities/CEA1.png";
import CEA2 from "../assets/ceaFacilities/CEA2.png";
import CEA3 from "../assets/ceaFacilities/CEA3.png";
import CEA4 from "../assets/ceaFacilities/CEA4.png";
import CEA5 from "../assets/ceaFacilities/CEA5.png";

const CeaBuilding = () => {
  const { getBuildingInfo, getBuildingName } = useInfoContext();

  const ceaBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyIe6ea0nCJXzeL1ejV"
  );

  return (
    <div
      className=" mx-auto px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="flex flex-row  mt-5">
        <div className="text-center ml-24">
          <div>
            <img src={ceaLogo} style={{ width: "120px" }} />
          </div>
          <div className="text-4xl font-bold text-white mt-3">
            {getBuildingName.map(
              (building, index) =>
                index === 2 && (
                  <div key={index}>
                    <span>{building.buildingname}</span>
                  </div>
                )
            )}
          </div>
        </div>
        <div>
          <video
            src={CEA}
            autoPlay
            loop
            muted
            style={{ width: "70%" }}
            className="ml-32"
          />
        </div>
      </div>

      <div className="flex flex-row  items-center mt-5 ">
        <div>
          <div className=" text-white font-bold text-3xl">About:</div>
          <div className="text-lg text-white mr-18">
            {getBuildingInfo.map(
              (building, index) =>
                index === 4 && (
                  <div key={index} className="ml-10">
                    <p style={{ fontFamily: "Poppins" }}>{building.about}</p>
                  </div>
                )
            )}
          </div>
        </div>

        <div>
          {" "}
          <div className=" text-white font-bold text-3xl">Courses:</div>
          <div className="text-lg text-white ml-10">
            {getBuildingInfo.map(
              (building, index) =>
                index === 4 && (
                  <div key={index}>
                    <p style={{ fontFamily: "Poppins" }}>{building.course}</p>
                  </div>
                )
            )}
          </div>
        </div>
      </div>

      <div>
        <div className=" text-white font-bold text-3xl">Facilities:</div>
        <div className="flex justify-center">
          <div className="w-full max-w-screen-lg overflow-x-auto">
            <div className="flex space-x-4 p-4">
              {/* Render images */}
              <Image
                src={CEA1}
                alt="CCIS Digital"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={CEA2}
                alt="CCIS Faculty"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={CEA3}
                alt="CCIS Faculty 1"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={CEA4}
                alt="CCIS Lab"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={CEA5}
                alt="CCIS Lab 1"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="text-md text-white mt-5">
        <div className="text-white font-bold text-3xl">Offices:</div>
        <div>
          {ceaBuilding &&
            ceaBuilding.buildingoffice.map((office, index) => (
              <div className="flex space-x-4 p-4 text-lg ml-5" key={index}>
                {office.buildingofficename}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CeaBuilding;
