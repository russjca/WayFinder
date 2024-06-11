import React from "react";
import { Image } from "antd";
import { useInfoContext } from "../context/infoContext";
import CcisLogo from "../assets/CcisLogo.png";
import CCISNEW from "../assets/CCISNEW.mp4";
import CCISDigital from "../assets/ccisFacilities/CCISDigital.png";
import CCISFaculty from "../assets/ccisFacilities/CCISFaculty.png";
import CCISLab from "../assets/ccisFacilities/CCISLab.png";
import CCISLab1 from "../assets/ccisFacilities/CCISLab1.png";
import CCISLab2 from "../assets/ccisFacilities/CCISLab2.png";

const CcisBuilding = () => {
  const { getBuildingInfo, getBuildingName } = useInfoContext();

  const ccisBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyITi5uQej9wh2GyXNE"
  );

  return (
    <div
      className=" mx-auto px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="flex flex-row items-center mt-5">
        <div className="text-center ml-24">
          <div>
            <img src={CcisLogo} style={{ width: "120px" }} alt="CCIS Logo" />
          </div>
          <div className="text-4xl font-bold text-white mt-5">
            <p>{getBuildingName[0].buildingname}</p>
          </div>
        </div>
        <div>
          <video
            src={CCISNEW}
            autoPlay
            loop
            muted
            style={{ width: "70%" }}
            className="ml-32"
          />
        </div>
      </div>
      <div className="flex flex-row items-center mt-5">
        <div>
          <div className=" text-white font-bold text-3xl">About:</div>
          <div className="text-lg text-white mr-18">
            {getBuildingInfo.map(
              (building, index) =>
                index === 0 && (
                  <div key={index} className="ml-10">
                    <p style={{ fontFamily: "Poppins" }}>{building.about}</p>
                  </div>
                )
            )}
          </div>
        </div>
        <div className="mb-7">
          <div className=" text-white font-bold text-3xl">Courses:</div>
          <div className="text-lg text-white ml-10">
            {getBuildingInfo.map(
              (building, index) =>
                index === 0 && (
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
                src={CCISDigital}
                alt="CCIS Digital"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={CCISFaculty}
                alt="CCIS Faculty"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />

              <Image
                src={CCISLab}
                alt="CCIS Lab"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={CCISLab1}
                alt="CCIS Lab 1"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={CCISLab2}
                alt="CCIS Lab 2"
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
          {ccisBuilding &&
            ccisBuilding.buildingoffice.map((office, index) => (
              <div className="flex space-x-4 p-4 text-lg ml-5" key={index}>
                {office.buildingofficename}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CcisBuilding;
