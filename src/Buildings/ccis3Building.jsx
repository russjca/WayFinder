import React from "react";
import { Image } from "antd";
import { useInfoContext } from "../context/infoContext";
import CCISOLD from "../assets/CCISOLD.mp4";
import REGISTRAR1 from "../assets/REGISTRAR/REGISTRAR1.png";
import REGISTRAR2 from "../assets/REGISTRAR/REGISTRAR2.png";
import REGISTRAR3 from "../assets/REGISTRAR/REGISTRAR3.png";
import REGISTRAR4 from "../assets/REGISTRAR/REGISTRAR4.png";
import REGISTRAR5 from "../assets/REGISTRAR/REGISTRAR5.png";
const Ccis3Building = () => {
  const { getBuildingName } = useInfoContext();

  const ccisBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NvT5NaD7D-q8RzgGZIX"
  );
  return (
    <div
      style={{ fontFamily: "Poppins" }}
      className=" mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-row items-center mt-5">
        <div className="text-center ml-24">
          <div className="text-4xl font-bold text-white mt-3">
            COLLEGE OF COMPUTING AND INFORMATION SCIENCES (OLD)
          </div>
        </div>
        <div>
          <video
            src={CCISOLD}
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
                src={REGISTRAR1}
                alt="CCIS Digital"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={REGISTRAR2}
                alt="CCIS Faculty"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={REGISTRAR3}
                alt="CCIS Faculty 1"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={REGISTRAR4}
                alt="CCIS Lab"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={REGISTRAR5}
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

export default Ccis3Building;
