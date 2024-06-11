import { Button } from "antd";
import { useInfoContext } from "../context/infoContext";
import CcisLogo from "../assets/CcisLogo.png";
import ComLogo from "../assets/ComLogo.png";
import CoedLogo from "../assets/CoedLogo.png";
import CatLogo from "../assets/CatLogo.png";
import CeaLogo from "../assets/CeaLogo.png";
import CcjsLogo from "../assets/CcjsLogo.png";

const PopoverComponent = ({
  showPopover,
  popoverPosition,
  handleButtonClick,
  ccisNode,
  coedNode,
  ccjsNode,
  ceaNode,
  comNode,
  catNode,
  researchNode,
  rsuNode,
  libraryNode,
  bdcNode,
  ascaNode,
  technologicalNode,
  agriTourNode,
  comLabNode,
  agreTechNode,
  hotelNode,
  adminNode,
  presidentNode,
  sasNode,
  power,
  balayNode,
  stall,
  registrarNode,
}) => {
  const { getBuildingName, endNode } = useInfoContext();

  return (
    showPopover && (
      <div
        className="flex flex-col justify-center items-center absolute w-96 h-36 bg-green-200 border-solid rounded-lg px-2 space-y-2"
        style={{ top: popoverPosition.y, left: popoverPosition.x }}
      >
        <div className="flex flex-row justify-center items-center space-x-2 ">
          <div>
            {(endNode === "CCIS" ||
              ccisNode.includes(endNode) ||
              endNode === "COED" ||
              coedNode.includes(endNode) ||
              endNode === "CEA" ||
              ceaNode.includes(endNode) ||
              endNode === "COM" ||
              comNode.includes(endNode) ||
              endNode === "CAT" ||
              catNode.includes(endNode) ||
              endNode === "RESEARCH" ||
              researchNode.includes(endNode) ||
              endNode === "SOCIO" ||
              rsuNode.includes(endNode) ||
              endNode === "LIBRARY" ||
              libraryNode.includes(endNode) ||
              endNode === "BDC" ||
              bdcNode.includes(endNode) ||
              endNode === "ASCA" ||
              ascaNode.includes(endNode) ||
              endNode === "TECHNOLOGICAL" ||
              technologicalNode.includes(endNode) ||
              endNode === "AGRITOUR" ||
              agriTourNode.includes(endNode) ||
              endNode === "CLB" ||
              comLabNode.includes(endNode) ||
              endNode === "AGRITECH" ||
              agreTechNode.includes(endNode) ||
              endNode === "HOTEL" ||
              hotelNode.includes(endNode) ||
              endNode === "ADMIN" ||
              adminNode.includes(endNode) ||
              endNode === "PRESIDENT" ||
              presidentNode.includes(endNode) ||
              endNode === "SAS" ||
              sasNode.includes(endNode) ||
              endNode === "POWER" ||
              power.includes(endNode) ||
              endNode === "BALAY" ||
              balayNode.includes(endNode) ||
              endNode === "REGISTRAR" ||
              registrarNode.includes(endNode) ||
              endNode === "CCJS" ||
              ccjsNode.includes(endNode) ||
              endNode === "STALL" ||
              stall.includes(endNode)) && (
              <>
                {(endNode === "CCIS" || ccisNode.includes(endNode)) && (
                  <div className="flex items-center font-bold text-lg text-center">
                    <img src={CcisLogo} alt="CCIS Logo" className="w-16 h-16" />
                    <span>{getBuildingName[0].buildingname}</span>
                    <p>44.40 Meters</p>
                  </div>
                )}
                {(endNode === "STALL" || stall.includes(endNode)) && (
                  <div className="flex items-center font-bold text-lg text-center">
                    <span>{getBuildingName[22].buildingname}</span>
                  </div>
                )}
                {(endNode === "COED" || coedNode.includes(endNode)) && (
                  <div className="flex items-center justify-center font-bold text-lg text-center">
                    <img
                      src={CoedLogo}
                      alt="COED Logo"
                      className="w-16 h-16 "
                    />
                    <span>{getBuildingName[1].buildingname}</span>
                    <p className="mt-5">139.4 Meters</p>
                  </div>
                )}
                {(endNode === "CEA" || ceaNode.includes(endNode)) && (
                  <div className="flex items-center font-bold text-lg text-center">
                    <img src={CeaLogo} alt="CEA Logo" className="w-16 h-16 " />
                    <span>{getBuildingName[2].buildingname}</span>
                    <p className="mt-5">148.56 Meters</p>
                  </div>
                )}
                {(endNode === "COM" || comNode.includes(endNode)) && (
                  <div className="flex items-center font-bold text-lg text-center">
                    <img src={ComLogo} alt="COM Logo" className="w-16 h-16 " />
                    <span>{getBuildingName[3].buildingname}</span>
                    <p>177.31 Meters</p>
                  </div>
                )}
                {(endNode === "CAT" || catNode.includes(endNode)) && (
                  <div className="flex items-center font-bold text-lg">
                    <img src={CatLogo} alt="CAT Logo" className="w-16 h-16 " />
                    <span>{getBuildingName[4].buildingname}</span>
                    <p className="mt-4">158.32 Meters</p>
                  </div>
                )}
                {(endNode === "RESEARCH" || researchNode.includes(endNode)) && (
                  <div className="flex items-center font-bold text-lg text-center">
                    <span>{getBuildingName[5].buildingname}</span>
                    <p className="mt-5">33.82 Meters</p>
                  </div>
                )}
                {(endNode === "SOCIO" || rsuNode.includes(endNode)) && (
                  <div className="font-bold text-lg text-center">
                    <span>{getBuildingName[7].buildingname}</span>
                    <p>59.82 Meters</p>
                  </div>
                )}
                {(endNode === "LIBRARY" || libraryNode.includes(endNode)) && (
                  <div className="font-bold text-lg text-center">
                    <span>{getBuildingName[8].buildingname}</span>
                    <p> 113.22 Meters </p>
                  </div>
                )}
                {(endNode === "BDC" || bdcNode.includes(endNode)) && (
                  <div className="font-bold text-lg text-center">
                    <span>{getBuildingName[9].buildingname}</span>
                    <p>144.92 Meters</p>
                  </div>
                )}
                {(endNode === "ASCA" || ascaNode.includes(endNode)) && (
                  <div className="font-bold text-lg text-center">
                    <span>{getBuildingName[10].buildingname}</span>
                    <p>100.55 Meters</p>
                  </div>
                )}
                {(endNode === "TECHNOLOGICAL" ||
                  technologicalNode.includes(endNode)) && (
                  <div className="font-bold text-lg text-center">
                    <span>{getBuildingName[11].buildingname}</span>
                    <p>134.06 Meters</p>
                  </div>
                )}
                {(endNode === "AGRITOUR" || agriTourNode.includes(endNode)) && (
                  <div className="font-bold text-lg text-center">
                    <span>{getBuildingName[12].buildingname}</span>
                    <p>178.09 Meters</p>
                  </div>
                )}
                {(endNode === "CLB" || comLabNode.includes(endNode)) && (
                  <div className="font-bold text-lg text-center">
                    <span>{getBuildingName[13].buildingname}</span>
                    <p>188.11 Meters</p>
                  </div>
                )}
                {(endNode === "AGRITECH" || agreTechNode.includes(endNode)) && (
                  <div className="font-bold text-lg text-center">
                    <span>{getBuildingName[14].buildingname}</span>
                    <p>196.51 Meters</p>
                  </div>
                )}
                {(endNode === "HOTEL" || hotelNode.includes(endNode)) && (
                  <div className=" flex items-center font-bold text-lg text-center">
                    <span>{getBuildingName[15].buildingname}</span>
                    <p>130.32 Meters</p>
                  </div>
                )}

                {(endNode === "ADMIN" || adminNode.includes(endNode)) && (
                  <div className="font-bold text-lg text-center">
                    <span>{getBuildingName[16].buildingname}</span>
                    <p>130.17 Meters</p>
                  </div>
                )}
                {(endNode === "PRESIDENT" ||
                  presidentNode.includes(endNode)) && (
                  <div className="font-bold text-lg text-center">
                    <span>{getBuildingName[17].buildingname}</span>
                    <p>135.32 Meters</p>
                  </div>
                )}
                {(endNode === "SAS" || sasNode.includes(endNode)) && (
                  <div className="font-bold text-lg text-center">
                    <span>{getBuildingName[18].buildingname}</span>
                    <p>147.32 Meters</p>
                  </div>
                )}
                {(endNode === "POWER" || power.includes(endNode)) && (
                  <div className="font-bold text-lg text-center">
                    <span>{getBuildingName[20].buildingname}</span>
                    <p>125.57 Meters</p>
                  </div>
                )}
                {(endNode === "BALAY" || balayNode.includes(endNode)) && (
                  <div className="font-bold text-lg text-center">
                    <span>{getBuildingName[19].buildingname}</span>
                    <p>162.8 Meters</p>
                  </div>
                )}
                {(endNode === "STALL" || stall.includes(endNode)) && (
                  <div key={20} className="font-bold text-lg">
                    <span>{getBuildingName[20].buildingname}</span>
                  </div>
                )}
                {(endNode === "REGISTRAR" ||
                  registrarNode.includes(endNode)) && (
                  <div className="font-bold text-lg text-center">
                    <span>{getBuildingName[21].buildingname}</span>
                  </div>
                )}
                {(endNode === "CCJS" || ccjsNode.includes(endNode)) && (
                  <div className="flex items-center font-bold text-lg">
                    <img src={CcjsLogo} alt="CCJS Logo" className="w-16 h-16" />
                    <span>{getBuildingName[6].buildingname}</span>
                    <p>92.70 Meters</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <div>
          <Button
            onClick={handleButtonClick}
            className="font-bold text-center"
            type="primary"
          >
            3D and Building Info
          </Button>
        </div>
      </div>
    )
  );
};

export default PopoverComponent;
