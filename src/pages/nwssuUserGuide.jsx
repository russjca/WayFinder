import React from "react";
import { FloatButton, Collapse } from "antd";

import DashBoard from "../assets/DashBoard.png";
import LandingPage from "../assets/LandingPage.png";
import GotoMap from "../assets/GotoMap.png";
import GotoAdmin from "../assets/GotoAdmin.png";
import NwssuMap from "../assets/NwssuMap.png";
import Legend from "../assets/Legend.png";
import MapLegend from "../assets/MapLegend.png";
import SearchBar from "../assets/SearchBar.png";
import EndNode from "../assets/EndNode.png";
import CreatePath from "../assets/CreatePath.png";
import DeletePath from "../assets/DeletePath.png";
import PathDemo from "../assets/PathDemo.png";
import Destination from "../assets/Destination.png";
import A from "../assets/A.png";
import B from "../assets/B.png";
import THREED from "../assets/THREED.png";
import Model from "../assets/Model.png";
import Buildings from "../assets/Buildings.png";
import BuildingsInfo from "../assets/BuildingsInfo.png";
import BuildingCard from "../assets/BuildingCard.png";
import CCISDATA from "../assets/CCISDATA.png";
import CCISCOLLEGE from "../assets/CCISCOLLEGE.png";
import Guide from "../assets/Guide.png";
import Back from "../assets/Back.png";
import UserGuide from "../assets/UserGuide.png";

const NwssuUserGuide = () => {
  const { Panel } = Collapse;

  return (
    <div>
      <div className="flex justify-center items-center  text-white text-center text-4xl font-bold mb-10 mt-10">
        WAYFINDER USER GUIDE
      </div>
      <div
        style={{ fontFamily: "Poppins" }}
        className="space-y-10 space-x-10 mr-10"
      >
        <Collapse className=" font-bold ml-10 bg-green-500" size="large">
          <Panel header="LANDING PAGE" key="1">
            <h2 className="font-bold ">Landing Page Section</h2>
            <h3 className="ml-10 mb-10">
              - The <b>Landing Page Section</b> consists of the <b>Admin</b>{" "}
              button and a <b> Go to Map</b> button.
            </h3>
            <div className="flex flex-col items-center mb-10">
              <img src={LandingPage} alt="" style={{ width: "50%" }} />
              <i className="font-bold text-xl mt-5">
                Figure 1. NwSSU WayFinder Landing Page
              </i>
            </div>
            <h2 className="font-bold">Landing Page Exploration</h2>
            <div className="ml-10">
              <h3>
                1. The <b className="text-xl">Admin</b> button is for admin
                access only; users are not prompted to access the admin portal.
                <img src={GotoAdmin} alt="" />
              </h3>
              <h3>
                2. On the other hand, clicking the{" "}
                <b className="tex-xl">Go to Map</b> button will direct you to
                the NwSSU WayFinder Dashboard.
                <img src={GotoMap} alt="" />
              </h3>
            </div>
          </Panel>
        </Collapse>
        <Collapse accordion className="bg-green-500 font-bold" size="large">
          <Panel header="DASHBOARD" key="1">
            <div className="space-x-10">
              <h1 className="font-bold">Dashboard Section</h1>
              <h3>
                - The figure 2 shows the <strong>Dashboard</strong> Section of{" "}
                <strong>NwSSU WayFinder</strong>, composed of a{" "}
                <strong>Navigation Bar</strong>.
              </h3>
              <div className="flex flex-col items-center mt-10">
                <img src={DashBoard} alt="" style={{ width: "50%" }} />
                <i className="font-bold text-xl mt-5">
                  Figure 2. NwSSU WayFinder Dashboard
                </i>
              </div>
            </div>
            <div className="mt-10 mb-10">
              <h1 className="font-bold">Navigation Bar Components</h1>
              <h3 className="ml-10 mb-10">
                1. The <strong>Navigation Bar</strong> consists of 4 action
                buttons named:{" "}
                <strong>NwSSU Map, NwSSU Buildings, User Guide</strong>, and
                <strong>Back</strong>.
              </h3>
              <h2 className="font-bold">Finding Location</h2>
              <div className="ml-10">
                <h3>
                  1. Upon clicking the <strong>NwSSU Map</strong>{" "}
                  <img src={NwssuMap} alt="" /> action button, a{" "}
                  <strong>Two-Dimensional Map</strong> will be displayed along
                  with a <strong>Search Card</strong> and{" "}
                  <strong>NwSSU MAP LEGEND</strong> button shown in{" "}
                  <strong>Figure 2</strong>.
                </h3>
                <h3>
                  2. In figure 3, the <strong>NwSSU MAP LEGEND</strong>{" "}
                  <img src={Legend} alt="" />
                  button contains all the available locations in the system.
                  These locations can be used when searching for destinations in
                  the system.
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <img src={MapLegend} alt="" style={{ width: "50%" }} />
              <i className="font-bold text-xl mt-5">
                Figure 3. NwSSU MAP LEGEND
              </i>
            </div>
            <div className="ml-10 mt-10">
              <h3>
                3. In the <strong>Two-Dimensional Map</strong>, there are 22
                alphabet buttons that represent the nodes in the system as shown
                in <strong>Figure 2</strong> named:{" "}
                <b>
                  A, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V,
                  and W.
                </b>
              </h3>
              <h3>
                4. The alphabet buttons are clickable and can be used to locate
                destinations in the system. If you click any of the letters in
                the map, it will be directed to the system’s search bar.
              </h3>
              <h3>
                <strong>Note:</strong> The letters represent the locations
                present in the system.
              </h3>
              <h3>
                5. On the other hand, the <strong>Search Card</strong> consists
                of 3 buttons named: <strong>Search Bar, Create Path,</strong>{" "}
                and <strong>Delete Path</strong>.
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center mb-10 mt-10">
              <img src={SearchBar} alt="" />
              <i className="font-bold text-xl mt-5">Figure 4. Search Card</i>
            </div>
            <div className="ml-10">
              <h3>
                6. In the <b>Search Bar</b> <img src={EndNode} alt="" /> button,
                you can input any location from the <b>NwSSWU MAP LEGEND</b>{" "}
                button.
              </h3>
              <h3>
                7. After inputting your desired location, you need to click the{" "}
                <b>Create Path </b> <img src={CreatePath} alt="" /> button for
                the system to generate the shortest route to your destination.
              </h3>
              <h3>
                8. If you desire to locate another location, you need to click
                the <b>Delete Path </b> <img src={DeletePath} alt="" /> button
                to deselect the current location and then create a new path.
              </h3>
            </div>
          </Panel>
        </Collapse>
        <Collapse accordion className="bg-green-500 font-bold" size="large">
          <Panel header="PATH DEMONSTRATION" key="2">
            <div>
              <h1 className="font-bold">Path Demonstration</h1>
              <div className="flex flex-col justify-center items-center mb-10 mt-10">
                <img src={PathDemo} alt="" style={{ width: "50%" }} />
                <i className="text-xl font-bold mt-5">
                  Figure 5. Path Demonstration
                </i>
              </div>
              <div className="ml-10">
                <h3>
                  1. After the system generates the route, the{" "}
                  <strong>Two-Dimensional Map</strong> will display a{" "}
                  <strong>Card Container</strong> with a{" "}
                  <strong>3D Building Button</strong> and two Location buttons,
                  namely: <strong>Point A</strong> and <strong>Point B</strong>.
                </h3>
              </div>
              <div className="flex flex-col justify-center items-center mt-10">
                <img src={Destination} alt="" />
                <i className="font-bold text-lg mb-10">
                  Figure 6. Card Container
                </i>
              </div>
              <div>
                <h3 className="ml-10">
                  2. <b>Point A</b> <img src={A} alt="" /> represents your
                  Current Location and <b>Point B </b>
                  <img src={B} alt="" /> represents your Destination.
                </h3>
                <h3 className="ml-10">
                  3. In clicking the <strong>3D Building</strong>{" "}
                  <img src={THREED} alt="" /> button, a three-dimensional model
                  of the location will be displayed shown in Figure 5.
                </h3>
              </div>
              <div className="flex flex-col justify-center items-center mt-10">
                <img src={Model} alt="" style={{ width: "50%" }} />
                <i className="font-bold text-xl mt-5">
                  Figure 7. Three-Dimensional Model
                </i>
              </div>
            </div>
          </Panel>
        </Collapse>
        <Collapse accordion className="bg-green-500 font-bold" size="large">
          <Panel header="NwSSU BUILDINGS EXPLORATION" key="2">
            <div>
              <h1 className="font-bold">NwSSU Buildings Exploration</h1>
              <h3 className="ml-10 mb-10">
                1. The <strong>NwSSU Building</strong>{" "}
                <img src={Buildings} alt="" /> action button has 17 card buttons
                named:{" "}
                <strong>
                  COM, CEA, CAT, CCIS NEW, CCJS, COED, CCIS OLD, Research and
                  Extension Office, Socio Cultural Center, University Library,
                  BDC, ASCA, SAS, Administration Building, Agri Tourism,
                  Technology Complex Building,
                </strong>{" "}
                and <strong>Balay Alumni</strong>.
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center mb-10">
              <img src={BuildingsInfo} alt=" " style={{ width: "50%" }} />
              <i className="font-bold text-xl mt-5">
                Figure 8. NwSSU Buildings
              </i>
            </div>
            <div className="ml-10">
              <h3>
                2. These card buttons represent the different{" "}
                <strong>College Departments, Offices,</strong> and{" "}
                <strong>Facilities</strong> inside the university.
              </h3>
              <h3>
                3. If you click the <strong>CCIS Department</strong> card
                button, 2 navigation buttons will appear:{" "}
                <strong>CCIS College</strong> and <strong>Back</strong>.
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center mb-10 mt-10">
              <img src={BuildingCard} alt="" style={{ width: "20%" }} />
              <i className="text-xl font-bold mt-5">
                Figure 9. CCIS Card Button
              </i>
            </div>
            <div className="flex flex-col justify-center items-center mb-10">
              <img src={CCISDATA} alt="" style={{ width: "50%" }} />
              <i className="text-xl font-bold mt-5">
                Figure 10. CCIS Department
              </i>
            </div>
            <div className="ml-10">
              <h3>
                4. The <strong>CCIS College</strong>{" "}
                <img src={CCISCOLLEGE} alt="" /> navigation button shown in
                Figure 8 contains a preview of the department including the
                information of the department and a three-dimensional
                representation of the department for better exploration.
              </h3>
              <h3>
                5. The <strong>Back</strong> <img src={Back} alt="" /> button is
                used to return to the system's dashboard.
              </h3>
            </div>
          </Panel>
        </Collapse>
        <Collapse accordion className="bg-green-500 font-bold" size="large">
          <Panel header="USER GUIDE" key="2">
            <div>
              <h1 className="font-bold">User Guide</h1>
              <h3 className="ml-10">
                1. If you click the <strong>User Guide</strong>{" "}
                <img src={Guide} alt="" /> action button, a{" "}
                <strong>User Manual of NwSSU WayFinder</strong> will be
                displayed.
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center mt-10 mb-10">
              <img src={UserGuide} alt="" style={{ width: "50%" }} />
              <i className="font-bold text-xl mt-5">
                Figure 10. CCIS Card Button
              </i>
            </div>
            <div>
              <h1 className="font-bold">Back</h1>
              <h3 className="ml-10">
                1. In clicking the <b>Back</b> <img src={Back} alt="" /> action
                button, you will be directed back to the NwSSU WayFinder Landing
                Page shown in Figure 1.
              </h3>
            </div>
          </Panel>
        </Collapse>
      </div>
      <FloatButton.BackTop
        style={{ left: "200px", width: "60px", height: "60px" }}
        type="primary"
      />
    </div>
  );
};

export default NwssuUserGuide;
