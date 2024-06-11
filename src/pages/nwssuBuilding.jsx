import React from "react";
import { Card, Row, Col, FloatButton, Image } from "antd";
import { Link } from "react-router-dom";
import { useInfoContext } from "../context/infoContext";

// Building Logos
import CcisLogo from "../assets/CcisLogo.png";
import CcjsLogo from "../assets/CcjsLogo.png";
import ComLogo from "../assets/ComLogo.png";
import CeaLogo from "../assets/CeaLogo.png";
import CoedLogo from "../assets/CoedLogo.png";
import CatLogo from "../assets/CatLogo.png";

// Building Pictures
import CcisPicture from "../assets/CcisPicture.png";
import CcjsPicture from "../assets/CcjsPicture.png";
import ComPicture from "../assets/ComPicture.png";
import CeaPicture from "../assets/CeaPicture.png";
import CatPicture from "../assets/CatPicture.png";
import CoedPicture from "../assets/CoedPicture.png";
import CcisPicture3 from "../assets/CcisPicture3.png";
import ResearchPicture from "../assets/ResearchPicture.png";
import SocioPicture from "../assets/SocioPicture.png";
import LibraryPicture from "../assets/LibraryPicture.png";
import AscaPicture from "../assets/AscaPicture.png";
import BdcPicture from "../assets/BdcPicture.png";
import ComplexPicture from "../assets/ComplexPicture.png";
import AgriTourPicture from "../assets/AgriTourPicture.png";
import HotelPicture from "../assets/HotelPicture.png";
import AdminPicture from "../assets/AdminPicture.png";
import PresidentPicture from "../assets/PresidentPicture.png";
import SasPicture from "../assets/SasPicture.png";
import BalayPicture from "../assets/BalayPicture.png";

const NwssuBuilding = () => {
  const { getBuildingName } = useInfoContext();
  return (
    <div>
      <div className="text-white font-extrabold text-5xl text-center mb-10 mt-10 ">
        COLLEGES
      </div>
      <div className="space-y-16">
        <Row justify="space-evenly">
          <Col span={6}>
            <Link to={"/CcisBuilding"}>
              <Card
                hoverable
                cover={
                  <Image
                    src={CcisPicture}
                    style={{ width: 350, height: 200 }}
                  />
                }
                style={{
                  width: 350,
                  height: 300,
                }}
              >
                <div className="flex flex-row justify-center items-center relative">
                  <div className=" absolute mb-32">
                    <img src={CcisLogo} style={{ width: 80 }} />
                  </div>
                  <div
                    className="font-semibold mt-2 text-center "
                    style={{ fontFamily: "Poppins" }}
                  >
                    {getBuildingName.map(
                      (building, index) =>
                        index === 0 && (
                          <div key={index} className=" font-bold text-lg">
                            <span>{building.buildingname}</span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
          <Col span={6}>
            <Link to={"/CcjsBuilding"}>
              <Card
                hoverable
                cover={
                  <Image
                    src={CcjsPicture}
                    style={{ width: 350, height: 200 }}
                  />
                }
                style={{
                  width: 350,
                  height: 300,
                }}
              >
                <div className="flex flex-row justify-center items-center relative ">
                  <div className=" absolute mb-32">
                    <img src={CcjsLogo} alt="Ccis Logo" style={{ width: 80 }} />
                  </div>
                  <div
                    className="text-center mt-2 font-semibold "
                    style={{ fontFamily: "Poppins" }}
                  >
                    {getBuildingName.map(
                      (building, index) =>
                        index === 6 && (
                          <div key={index} className="font-bold text-lg">
                            <span>{building.buildingname}</span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
          <Col span={6}>
            {" "}
            <Link to={"/ComBuilding"}>
              <Card
                hoverable
                cover={
                  <Image src={ComPicture} style={{ width: 350, height: 200 }} />
                }
                style={{
                  width: 350,
                  height: 300,
                }}
              >
                <div className="flex flex-row justify-center items-center relative">
                  <div className=" absolute  mb-24">
                    <img
                      src={ComLogo}
                      alt="Ccis Logo"
                      style={{ width: 80, padding: 0, margin: 0 }}
                    />
                  </div>
                  <div
                    className="font-semibold text-center mt-5"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {getBuildingName.map(
                      (building, index) =>
                        index === 3 && (
                          <div key={index} className="font-bold text-lg">
                            <span>{building.buildingname}</span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
        </Row>
        <Row justify="space-evenly">
          <Col span={6}>
            {" "}
            <Link to={"/CeaBuilding"}>
              <Card
                hoverable
                cover={
                  <Image
                    src={CeaPicture}
                    style={{
                      width: 351,
                      height: 200,
                    }}
                  />
                }
                style={{
                  width: 350,
                  height: 300,
                  border: "none",
                }}
              >
                <div className="flex flex-row justify-center items-center relative">
                  <div className=" absolute mb-32">
                    <img src={CeaLogo} alt="Ccis Logo" style={{ width: 110 }} />
                  </div>
                  <div
                    className=" font-semibold  mt-2 text-center "
                    style={{ fontFamily: "Poppins" }}
                  >
                    {getBuildingName.map(
                      (building, index) =>
                        index === 2 && (
                          <div key={index} className="font-bold text-lg">
                            <span>{building.buildingname}</span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
          <Col span={6}>
            <Link to={"/CoedBuilding"}>
              <Card
                hoverable
                cover={
                  <Image
                    src={CoedPicture}
                    style={{ width: 350, height: 200 }}
                  />
                }
                style={{
                  width: 350,
                  height: 300,
                }}
              >
                <div className="flex flex-row justify-center items-center relative">
                  <div className=" absolute mb-24">
                    <img
                      src={CoedLogo}
                      alt="Ccis Logo"
                      style={{ width: 80, padding: 0, margin: 0 }}
                    />
                  </div>
                  <div
                    className=" text-center mt-5 font-semibold "
                    style={{ fontFamily: "Poppins" }}
                  >
                    {getBuildingName.map(
                      (building, index) =>
                        index === 1 && (
                          <div key={index} className="font-bold text-lg">
                            <span>{building.buildingname}</span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
          <Col span={6}>
            {" "}
            <Link to={"/CatBuilding"}>
              <Card
                hoverable
                cover={
                  <Image src={CatPicture} style={{ width: 350, height: 200 }} />
                }
                style={{
                  width: 350,
                  height: 300,
                }}
              >
                <div className="flex flex-row justify-center items-center relative">
                  <div className=" absolute mb-32">
                    <img
                      src={CatLogo}
                      alt="Ccis Logo"
                      srcset=""
                      style={{ width: 80, padding: 0, margin: 0 }}
                    />
                  </div>
                  <div
                    className="font-semibold text-center mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {getBuildingName.map(
                      (building, index) =>
                        index === 4 && (
                          <div key={index} className="font-bold text-lg">
                            <span>{building.buildingname}</span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
        </Row>

        <div className="text-white font-extrabold text-5xl text-center mb-8 mt-10">
          OFFICES AND FACILITIES
        </div>
        <div className="space-y-14"></div>
        <Row justify="space-evenly">
          <Col span={6}>
            {" "}
            <Link to={"/Ccis3Building"}>
              <Card
                hoverable
                cover={
                  <Image
                    src={CcisPicture3}
                    style={{ width: 350, height: 200 }}
                  />
                }
                style={{
                  width: 350,
                  height: 300,
                }}
              >
                <div
                  className="font-semibold text-center "
                  style={{ fontFamily: "Poppins" }}
                >
                  {getBuildingName.map(
                    (building, index) =>
                      index === 21 && (
                        <div
                          key={index}
                          className="font-bold text-lg text-center"
                        >
                          <span>{building.buildingname}</span>
                        </div>
                      )
                  )}
                </div>
              </Card>
            </Link>
          </Col>
          <Col span={6}>
            {" "}
            <Link to={"/ResearchBuilding"}>
              <Card
                hoverable
                cover={
                  <Image
                    src={ResearchPicture}
                    style={{ width: 350, height: 200 }}
                  />
                }
                style={{
                  width: 350,
                  height: 300,
                }}
              >
                <div className="flex flex-row justify-center items-center relative">
                  <div className=" absolute mb-32"></div>
                  <div
                    className="font-semibold text-center"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {getBuildingName.map(
                      (building, index) =>
                        index === 5 && (
                          <div key={index} className="font-bold text-lg">
                            <span>{building.buildingname}</span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
          <Col span={6}>
            {" "}
            <Link to={"/SocioBuilding"}>
              <Card
                hoverable
                cover={
                  <Image
                    src={SocioPicture}
                    style={{ width: 350, height: 200 }}
                  />
                }
                style={{
                  width: 350,
                  height: 300,
                }}
              >
                <div className="flex flex-row justify-center items-center relative">
                  <div className=" absolute mb-32"></div>
                  <div
                    className="font-semibold text-center mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {getBuildingName.map(
                      (building, index) =>
                        index === 7 && (
                          <div key={index} className="font-bold text-lg">
                            <span>{building.buildingname}</span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
        </Row>
        <Row justify="space-evenly">
          <Col span={6}>
            {" "}
            <Link to={"/LibraryBuilding"}>
              <Card
                hoverable
                cover={
                  <Image
                    src={LibraryPicture}
                    style={{ width: 350, height: 200 }}
                  />
                }
                style={{
                  width: 350,
                  height: 300,
                }}
              >
                <div className="flex flex-row justify-center items-center relative">
                  <div className=" absolute mb-32"></div>
                  <div
                    className="font-semibold text-center mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {getBuildingName.map(
                      (building, index) =>
                        index === 8 && (
                          <div key={index} className="font-bold text-lg">
                            <span>{building.buildingname}</span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
          <Col span={6}>
            {" "}
            <Link to={"/BdcBuilding"}>
              <Card
                hoverable
                cover={
                  <Image src={BdcPicture} style={{ width: 350, height: 200 }} />
                }
                style={{
                  width: 350,
                  height: 300,
                }}
              >
                <div className="flex flex-row justify-center items-center relative">
                  <div className=" absolute mb-32"></div>
                  <div
                    className="font-semibold  text-center mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {getBuildingName.map(
                      (building, index) =>
                        index === 9 && (
                          <div key={index} className="font-bold text-lg">
                            <span>{building.buildingname}</span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
          <Col span={6}>
            {" "}
            <Link to={"/AscaBuilding"}>
              <Card
                hoverable
                cover={
                  <Image
                    src={AscaPicture}
                    style={{ width: 350, height: 200 }}
                  />
                }
                style={{
                  width: 350,
                  height: 300,
                }}
              >
                <div className="flex flex-row justify-center items-center relative">
                  <div className=" absolute mb-32"></div>
                  <div
                    className="font-semibold text-lg text-center mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {getBuildingName.map(
                      (building, index) =>
                        index === 10 && (
                          <div key={index} className="font-bold text-lg">
                            <span>{building.buildingname}</span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
        </Row>
        <Row justify="space-evenly">
          <Col span={6}>
            {" "}
            <Link to={"/TcbBuilding"}>
              <Card
                hoverable
                cover={
                  <Image
                    src={ComplexPicture}
                    style={{ width: 350, height: 200 }}
                  />
                }
                style={{
                  width: 350,
                  height: 300,
                }}
              >
                <div className="flex flex-row justify-center items-center relative">
                  <div className=" absolute mb-32"></div>
                  <div
                    className="font-semibold  text-center mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {getBuildingName.map(
                      (building, index) =>
                        index === 11 && (
                          <div key={index} className="font-bold text-lg">
                            <span>{building.buildingname}</span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
          <Col span={6}>
            {" "}
            <Link to={"/AgriTourBuilding"}>
              <Card
                hoverable
                cover={
                  <Image
                    src={AgriTourPicture}
                    style={{ width: 350, height: 200 }}
                  />
                }
                style={{
                  width: 350,
                  height: 300,
                }}
              >
                <div className="flex flex-row justify-center items-center relative">
                  <div className=" absolute mb-32"></div>
                  <div
                    className="font-semiboldtext-center mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {getBuildingName.map(
                      (building, index) =>
                        index === 12 && (
                          <div key={index} className="font-bold text-lg">
                            <span>{building.buildingname}</span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
          <Col span={6}>
            {" "}
            <Link to={"/HotelBuilding"}>
              <Card
                hoverable
                cover={
                  <Image
                    src={HotelPicture}
                    style={{ width: 350, height: 200 }}
                  />
                }
                style={{
                  width: 350,
                  height: 300,
                }}
              >
                <div className="flex flex-row justify-center items-center relative">
                  <div className=" absolute mb-32"></div>
                  <div
                    className="font-semibold  text-center mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {getBuildingName.map(
                      (building, index) =>
                        index === 15 && (
                          <div key={index} className="font-bold text-lg">
                            <span>{building.buildingname}</span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
        </Row>
        <Row justify="space-evenly">
          <Col span={6}>
            <Link to={"/AdminBuilding"}>
              <Card
                hoverable
                cover={
                  <Image
                    src={AdminPicture}
                    style={{ width: 350, height: 200 }}
                  />
                }
                style={{
                  width: 350,
                  height: 300,
                }}
              >
                <div className="flex flex-row justify-center items-center relative">
                  <div className=" absolute mb-32"></div>
                  <div
                    className="font-semibold text-center mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {getBuildingName.map(
                      (building, index) =>
                        index === 16 && (
                          <div key={index} className="font-bold text-lg">
                            <span>{building.buildingname}</span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          </Col>

          <Col span={6}>
            {" "}
            <Link to={"/PresidentBuilding"}>
              <Card
                hoverable
                cover={
                  <Image
                    src={PresidentPicture}
                    style={{ width: 350, height: 200 }}
                  />
                }
                style={{
                  width: 350,
                  height: 300,
                }}
              >
                <div className="flex flex-row justify-center items-center relative">
                  <div className=" absolute mb-32"></div>
                  <div
                    className="font-semibold text-xl text-center mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {getBuildingName.map(
                      (building, index) =>
                        index === 17 && (
                          <div key={index} className="font-bold text-lg">
                            <span>{building.buildingname}</span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
          <Col span={6}>
            {" "}
            <Link to={"/SasBuilding"}>
              <Card
                hoverable
                cover={
                  <Image src={SasPicture} style={{ width: 350, height: 200 }} />
                }
                style={{
                  width: 350,
                  height: 300,
                }}
              >
                <div className="flex flex-row justify-center items-center relative">
                  <div className=" absolute mb-32"></div>
                  <div
                    className="font-semibold text-xl text-center mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {getBuildingName.map(
                      (building, index) =>
                        index === 18 && (
                          <div key={index} className="font-bold text-lg">
                            <span>{building.buildingname}</span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
        </Row>
        <Row justify="space-evenly">
          <Col span={6}>
            {" "}
            <Link to={"/BalayBuilding"}>
              <Card
                hoverable
                cover={
                  <Image
                    src={BalayPicture}
                    style={{ width: 350, height: 200 }}
                  />
                }
                style={{
                  width: 350,
                  height: 300,
                }}
              >
                <div className="flex flex-row justify-center items-center relative">
                  <div className=" absolute mb-32"></div>
                  <div
                    className="font-semibold text-xl text-center mt-2"
                    style={{ fontFamily: "Poppins" }}
                  >
                    {getBuildingName.map(
                      (building, index) =>
                        index === 19 && (
                          <div key={index} className="font-bold text-lg">
                            <span>{building.buildingname}</span>
                          </div>
                        )
                    )}
                  </div>
                </div>
              </Card>
            </Link>
          </Col>
        </Row>
      </div>
      {
        // indicates very long content
        Array.from(
          {
            length: 3,
          },
          (_, index) => (
            <React.Fragment key={index}>
              {index % 20 === 0 && index ? "" : ""}
              <br />
            </React.Fragment>
          )
        )
      }
      <FloatButton.BackTop
        style={{ left: "200px", width: "60px", height: "60px" }}
        type="primary"
      />
    </div>
  );
};

export default NwssuBuilding;
