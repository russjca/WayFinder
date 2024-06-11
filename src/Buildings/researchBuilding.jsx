import React from "react";
import { useInfoContext } from "../context/infoContext";
import RESEARCH from "../assets/RESEARCH.mp4";

const ResearchBuilding = () => {
  const { getBuildingName } = useInfoContext();

  const ccisBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyIrCZQQmvfZYRKap4w"
  );

  return (
    <div
      className=" mx-auto px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="flex flex-row items-center  mt-5">
        <div className="text-center ml-24">
          <div></div>
          <div className="text-4xl font-bold text-white mt-3">
            RESEARCH AND EXTENSION OFFICE
          </div>
        </div>
        <div className="flex justify-end">
          <video
            src={RESEARCH}
            autoPlay
            loop
            muted
            className="ml-32"
            style={{ width: "70%" }}
          />
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

export default ResearchBuilding;
