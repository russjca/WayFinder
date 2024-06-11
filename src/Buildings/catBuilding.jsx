import React from "react";
import { Image } from "antd";
import { useInfoContext } from "../context/infoContext";
import catLogo from "../assets/catLogo.png";
import CAT from "../assets/CAT.mp4";
import CAT1 from "../assets/catFacilities/CAT1.png";
import CAT2 from "../assets/catFacilities/CAT2.png";
import CAT3 from "../assets/catFacilities/CAT3.png";
import CAT4 from "../assets/catFacilities/CAT4.png";
import CAT5 from "../assets/catFacilities/CAT5.png";
const CatBuilding = () => {
  const { getBuildingInfo, getBuildingName } = useInfoContext();

  const ccjsBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyIff7QVfErxzdq72wV"
  );
  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row mt-5">
        <div className="text-center ml-24">
          <div>
            <img src={catLogo} style={{ width: "120px" }} />
          </div>
          <div className="text-4xl font-bold text-white mt-3">
            <p>{getBuildingName[4].buildingname}</p>
          </div>
        </div>
        <div>
          <video
            src={CAT}
            autoPlay
            loop
            muted
            style={{ width: "70%" }}
            className="ml-32"
          />
        </div>
      </div>

      <div className="flex flex-row items-center mt-5">
        <div className="text-lg text-white mr-18">
          <div className=" text-white font-bold text-3xl">About:</div>
          {getBuildingInfo.map(
            (building, index) =>
              index === 3 && (
                <div key={index}>
                  <p style={{ fontFamily: "Poppins" }}>{building.about}</p>
                </div>
              )
          )}
        </div>
        <div className="mb-7">
          {" "}
          <div className=" text-white font-bold text-3xl">Courses:</div>
          <div className="text-lg text-white ml-10">
            {getBuildingInfo.map(
              (building, index) =>
                index === 3 && (
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
                src={CAT1}
                alt="CCIS Digital"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={CAT2}
                alt="CCIS Faculty"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={CAT3}
                alt="CCIS Faculty 1"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={CAT4}
                alt="CCIS Lab"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={CAT5}
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
          {ccjsBuilding &&
            ccjsBuilding.buildingoffice.map((office, index) => (
              <div className="flex space-x-4 p-4 text-lg ml-5" key={index}>
                {office.buildingofficename}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CatBuilding;
