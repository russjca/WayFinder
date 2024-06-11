import React from "react";
import { Image } from "antd";
import { useInfoContext } from "../context/infoContext";
import LIBRARY from "../assets/LIBRARY.mp4";
import Lib1 from "../assets/LIBRARY/Lib1.png";
import Lib2 from "../assets/LIBRARY/Lib2.png";
import Lib3 from "../assets/LIBRARY/Lib3.png";
import Lib4 from "../assets/LIBRARY/Lib4.png";
import Lib5 from "../assets/LIBRARY/Lib5.png";

const LibraryBuilding = () => {
  const { getBuildingName } = useInfoContext();

  const ccisBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyLlmOoN1ujks5OetEg"
  );

  return (
    <div
      className=" mx-auto px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="flex flex-row items-center mt-5">
        <div className="text-center ml-24">
          <div className="text-4xl font-bold text-white mt-3">
            UNIVERSITY LIBRARY
          </div>
        </div>
        <div>
          <video
            src={LIBRARY}
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
                src={Lib1}
                alt="CCIS Digital"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={Lib2}
                alt="CCIS Faculty"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={Lib3}
                alt="CCIS Faculty 1"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={Lib4}
                alt="CCIS Lab"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={Lib5}
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

export default LibraryBuilding;
