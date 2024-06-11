import React from "react";
import { Image } from "antd";
import { useInfoContext } from "../context/infoContext";
import coedLogo from "../assets/coedLogo.png";
import COED from "../assets/COED.mp4";
import COED1 from "../assets/coedFacilties/COED1.png";
import COED2 from "../assets/coedFacilties/COED2.png";
import COED3 from "../assets/coedFacilties/COED3.png";
import COED4 from "../assets/coedFacilties/COED4.png";
import COED5 from "../assets/coedFacilties/COED5.png";
const CoedBuilding = () => {
  const { getBuildingInfo, getBuildingName } = useInfoContext();

  const coedBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyIdbPWw9HOjOFQVz9Q"
  );

  return (
    <div
      className=" mx-auto px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="flex flex-row items-center mt-5">
        <div className="text-center ml-24">
          <div>
            <img src={coedLogo} style={{ width: "120px" }} />
          </div>
          <div className="text-4xl font-bold text-white mt-3">
            <p>{getBuildingName[1].buildingname}</p>
          </div>
        </div>
        <div>
          <video
            src={COED}
            autoPlay
            loop
            muted
            style={{ width: "70%" }}
            className="ml-32"
          />
        </div>
      </div>

      <div className="flex flex-row items-center mt-5 ">
        <div>
          <div className=" text-white font-bold text-3xl">About:</div>
          <div className="text-lg text-white mr-18">
            {getBuildingInfo.map(
              (building, index) =>
                index === 2 && (
                  <div key={index} className="ml-10">
                    <p style={{ fontFamily: "Poppins" }}>{building.about}</p>
                  </div>
                )
            )}
          </div>
        </div>
        <div className="mb-7">
          <div className=" text-white font-bold text-4xl">Courses:</div>
          <div className="text-lg text-white ml-10">
            {getBuildingInfo.map(
              (building, index) =>
                index === 2 && (
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
                src={COED1}
                alt="COED1"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={COED2}
                alt="COED"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={COED3}
                alt="COED"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={COED4}
                alt="COED"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={COED5}
                alt="COED"
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
          {coedBuilding &&
            coedBuilding.buildingoffice.map((office, index) => (
              <div className="flex space-x-4 p-4 text-lg ml-5" key={index}>
                {office.buildingofficename}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CoedBuilding;
