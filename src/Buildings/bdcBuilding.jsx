import React from "react";
import { useInfoContext } from "../context/infoContext";

import BDC from "../assets/BDC.mp4";

const BdcBuilding = () => {
  const { getBuildingName } = useInfoContext();

  const bdcBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyLoyOrcrWj1BkNv_AN"
  );
  return (
    <div>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row  mt-5">
          <div className="text-center mt-24 ml-14">
            <div></div>
            <div className="text-3xl font-semibold text-white mt-3">
              BUSINESS DEVELOPMENT CENTER
            </div>
          </div>
          <div className="flex justify-end">
            <video src={BDC} autoPlay loop muted style={{ width: "85%" }} />
          </div>
        </div>
      </div>
      <div className="text-md text-white mt-5">
        <div className="text-white font-bold text-3xl">Offices:</div>
        <div>
          {bdcBuilding &&
            bdcBuilding.buildingoffice.map((office, index) => (
              <div className="flex space-x-4 p-4 text-lg ml-5" key={index}>
                {office.buildingofficename}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BdcBuilding;
