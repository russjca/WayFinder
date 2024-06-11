import React from "react";
import { useInfoContext } from "../context/infoContext";

import PRESIDENT from "../assets/PRESIDENT.mp4";

const PresidentBuilding = () => {
  const { getBuildingName } = useInfoContext();

  const ccisBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyLtw-3EVVUqNF6HLSi"
  );

  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row  mt-5">
        <div className="text-center mt-24 ml-24">
          <div className="text-4xl font-bold text-white mt-3">
            PRESIDENT COTTAGE
          </div>
        </div>
        <div>
          <video
            src={PRESIDENT}
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

export default PresidentBuilding;
