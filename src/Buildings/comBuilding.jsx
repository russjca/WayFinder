import React from "react";
import { useInfoContext } from "../context/infoContext";
import { Image } from "antd";
import ComLogo from "../assets/ComLogo.png";
import COM from "../assets/COM.mp4";
import COM1 from "../assets/comFacilities/COM1.png";
import COM2 from "../assets/comFacilities/COM2.png";
import COM3 from "../assets/comFacilities/COM3.png";
import COM4 from "../assets/comFacilities/COM4.png";
import COM5 from "../assets/comFacilities/COM5.png";
const ComBuilding = () => {
  const { getBuildingInfo, getBuildingName } = useInfoContext();

  const ccisBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyIeTWtLJsk3AkJCIkc"
  );

  return (
    <div
      className=" mx-auto px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="flex flex-row items-center mt-5">
        <div className="text-center ml-24">
          <div>
            <img src={ComLogo} style={{ width: "120px" }} alt="COMLogo" />
          </div>
          <div className="text-4xl font-bold text-white mt-3">
            COLLEGE OF MANAGEMENT
          </div>
        </div>
        <div>
          <video
            src={COM}
            autoPlay
            loop
            muted
            style={{ width: "70%" }}
            className="ml-32"
          />
        </div>
      </div>

      <div className="flex flex-row tems-center mt-5">
        <div>
          <div className=" text-white font-bold text-3xl">About:</div>
          <div className="text-lg text-white mr-18">
            {getBuildingInfo.map(
              (building, index) =>
                index === 5 && (
                  <div key={index} className="ml-10">
                    <p style={{ fontFamily: "Poppins" }}>{building.about}</p>
                  </div>
                )
            )}
          </div>
        </div>
        <div>
          <div className=" text-white font-bold text-3xl">Courses:</div>
          <div className="text-lg text-white ml-10">
            {getBuildingInfo.map(
              (building, index) =>
                index === 5 && (
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
                src={COM1}
                alt="CCIS Digital"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={COM2}
                alt="CCIS Faculty"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={COM3}
                alt="CCIS Faculty 1"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={COM4}
                alt="CCIS Lab"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={COM5}
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

export default ComBuilding;
