import React from "react";
import { useInfoContext } from "../context/infoContext";
import ASCA from "../assets/ASCA.mp4";

const AscaBuilding = () => {
  const { getBuildingName } = useInfoContext();

  const ccisBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NvT3_q3NfqFU1Fvx9gw"
  );

  return (
    <div>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row  mt-5">
          <div className="text-center mt-24 ml-14">
            <div className="text-3xl font-semibold text-white mt-3">ASCA</div>
          </div>
          <div className="flex justify-end">
            <video src={ASCA} autoPlay loop muted style={{ width: "85%" }} />
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

export default AscaBuilding;
