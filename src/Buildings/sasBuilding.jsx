import React from "react";
import { Image } from "antd";
import { useInfoContext } from "../context/infoContext";
import SAS from "../assets/SAS.mp4";
import SAS1 from "../assets/SAS/SAS1.png";
import SAS2 from "../assets/SAS/SAS2.png";
import SAS3 from "../assets/SAS/SAS3.png";
import SAS4 from "../assets/SAS/SAS4.png";
import SAS5 from "../assets/SAS/SAS5.png";

const SasBuilding = () => {
  const { getBuildingName } = useInfoContext();

  const ccisBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyLv1P3wq_Qzf7SC9lC"
  );

  return (
    <div>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center mt-5">
          <div className="text-center ml-24">
            <div className="text-4xl font-bold text-white mt-3">
              STUDENT AFFAIRS SERVICE BUILIDNG
            </div>
          </div>
          <div>
            <video
              src={SAS}
              autoPlay
              loop
              muted
              className="ml-32"
              style={{ width: "70%" }}
            />
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
                src={SAS1}
                alt="CCIS Digital"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={SAS2}
                alt="CCIS Faculty"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={SAS3}
                alt="CCIS Faculty 1"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={SAS4}
                alt="CCIS Lab"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={SAS5}
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

export default SasBuilding;
