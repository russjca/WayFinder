import React from "react";
import { useInfoContext } from "../context/infoContext";
import { Image } from "antd";
import CcjsLogo from "../assets/Ccjslogo.png";
import CCJS from "../assets/CCJS.mp4";
import CCJS1 from "../assets/ccjsFacilities/CCJS1.png";
import CCJS2 from "../assets/ccjsFacilities/CCJS2.png";
import CCJS3 from "../assets/ccjsFacilities/CCJS3.png";
import CCJS4 from "../assets/ccjsFacilities/CCJS4.png";
import CCJS5 from "../assets/ccjsFacilities/CCJS5.png";

const CcjsBuilding = () => {
  const { getBuildingInfo, getBuildingName } = useInfoContext();

  const collegeOfCriminalJusticeAndSciencesBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyLhfxHNAaFNq6D2Fuh"
  );

  return (
    <div
      className=" mx-auto px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="flex flex-row item-center mt-5">
        <div className="text-center ml-24">
          <div>
            <img src={CcjsLogo} style={{ width: "120px" }} alt="CCJS Logo" />
          </div>
          <div className="text-4xl font-bold text-white mt-3">
            <p>{getBuildingName[6].buildingname}</p>
          </div>
        </div>
        <div>
          <video
            src={CCJS}
            autoPlay
            loop
            muted
            style={{ width: "70%" }}
            className="ml-32"
          />
        </div>
      </div>

      <div className="flex flex-row justify-evenly items-center mt-5">
        <div className="ml-5">
          <div className=" text-white font-bold text-3xl">About:</div>
          <div className="text-lg text-white ml-5 mt-3">
            {getBuildingInfo.map(
              (building, index) =>
                index === 1 && (
                  <div key={index}>
                    <p>{building.about}</p>
                  </div>
                )
            )}
          </div>
        </div>

        <div className="ml-5">
          <div className="text-white font-bold text-3xl">Courses:</div>
          <div className="text-lg text-white ml-5 mt-3">
            {getBuildingInfo.map(
              (building, index) =>
                index === 1 && (
                  <div key={index}>
                    <p>{building.course}</p>
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
                src={CCJS1}
                alt="CCIS Digital"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={CCJS2}
                alt="CCIS Faculty"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={CCJS3}
                alt="CCIS Faculty 1"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={CCJS4}
                alt="CCIS Lab"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={CCJS5}
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
          {collegeOfCriminalJusticeAndSciencesBuilding &&
            collegeOfCriminalJusticeAndSciencesBuilding.buildingoffice.map(
              (office, index) => (
                <div className="flex space-x-4 p-4 text-lg ml-5" key={index}>
                  {office.buildingofficename}
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default CcjsBuilding;
