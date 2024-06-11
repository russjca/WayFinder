import React from "react";
import { Image } from "antd";
import { useInfoContext } from "../context/infoContext";
import ADMIN from "../assets/ADMIN.mp4";
import ADMIN1 from "../assets/ADMIN/ADMIN1.png";
import ADMIN2 from "../assets/ADMIN/ADMIN2.png";
import ADMIN3 from "../assets/ADMIN/ADMIN3.png";
import ADMIN4 from "../assets/ADMIN/ADMIN4.png";
import ADMIN5 from "../assets/ADMIN/ADMIN5.png";
const AdminBuilding = () => {
  const { getBuildingName } = useInfoContext();

  const adminBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyLsqqmoqCirJOjL_CZ"
  );
  return (
    <div className=" mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-row items-center mt-5">
        <div className="text-center ml-24">
          <div className="text-4xl font-bold text-white mt-3">
            ADMINISTRATION BUILDING
          </div>
        </div>
        <div>
          <video
            src={ADMIN}
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
                src={ADMIN1}
                alt="CCIS Digital"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={ADMIN2}
                alt="CCIS Faculty"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={ADMIN3}
                alt="CCIS Faculty 1"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={ADMIN4}
                alt="CCIS Lab"
                className="flex-shrink-0 object-cover"
                style={{ height: "187px", width: "230px" }}
              />
              <Image
                src={ADMIN5}
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
          {adminBuilding &&
            adminBuilding.buildingoffice.map((office, index) => (
              <div className="flex space-x-4 p-4 text-lg ml-5" key={index}>
                {office.buildingofficename}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminBuilding;
