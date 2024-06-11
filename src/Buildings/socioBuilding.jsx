import React from "react";
import { Image } from "antd";
import { useInfoContext } from "../context/infoContext";
import SOCIO from "../assets/SOCIO.mp4";
import SOCIO1 from "../assets/SOCIO/SOCIO1.png";
import SOCIO2 from "../assets/SOCIO/SOCIO2.png";

const SocioBuilding = () => {
  const { getBuildingName } = useInfoContext();

  const ccisBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyLkmIYYIeB_6k0zcaX"
  );

  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row items-center  mt-5">
        <div className="text-center ml-24">
          <div className="text-4xl font-bold text-white mt-3">
            SOCIO CULTURAL CENTER
          </div>
        </div>
        <div>
          <video
            src={SOCIO}
            autoPlay
            loop
            muted
            className="ml-32"
            style={{ width: "70%" }}
          />
        </div>
      </div>

      <div>
        <div className=" text-white font-bold text-3xl">Facilities:</div>
        <div className="flex justify-center">
          <div className="w-full max-w-screen-lg overflow-x-auto">
            <div className="flex space-x-4 p-4">
              {/* Render images */}
              <Image
                src={SOCIO1}
                alt="CCIS Digital"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={SOCIO2}
                alt="CCIS Faculty"
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

export default SocioBuilding;
