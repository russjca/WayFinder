import React, { useState, useEffect, useRef } from "react";

import { useInfoContext } from "../context/infoContext.jsx";
import { getDatabase, ref, get } from "firebase/database";

import A from "../assets/A.png"; // Source Node Landmark
import B from "../assets/B.png"; // End Node Landmark
import CCISNEW from "../assets/CCISNEW.mp4"; // CCIS 3D Video
import CCISOLD from "../assets/CCISOLD.mp4"; // CCIS OLD 3D Video
import COED from "../assets/COED.mp4"; // COED 3D Video
import CAT from "../assets/CAT.mp4"; // CAT 3D Video
import CEA from "../assets/CEA.mp4"; // CEA 3D Video
import CCJS from "../assets/CCJS.mp4"; // CCJS 3D Video
import COM from "../assets/COM.mp4"; // COM 3D Video
import BALAY from "../assets/BALAY.mp4"; // BALAY ALUMI 3D Video
import RESEARCH from "../assets/RESEARCH.mp4"; // Research Extension 3D Video
import SOCIO from "../assets/SOCIO.mp4"; //Socio Cultural 3D Video
import LIBRARY from "../assets/LIBRARY.mp4"; // Library 3D Video
import BDC from "../assets/BDC.mp4"; // BDC 3D Video
import ASCA from "../assets/ASCA.mp4"; // ASCA 3D Video
import TECHNOLOLOGY from "../assets/TECHNOLOGY.mp4"; // Technology Complex Building 3D Video
import COMDEAN from "../assets/COMDEAN.mp4"; // COM DEAN OFFICE Building 3D Video
import SAS from "../assets/SAS.mp4"; // SAS OFFICE Building 3D Video
import PRESIDENT from "../assets/PRESIDENT.mp4"; // President Cottage 3D Video
import ADMIN from "../assets/ADMIN.mp4"; // Admin Office 3D Video
import HOTEL from "../assets/HOTEL.mp4"; // Hotel 3D Video
import {
  drawEdges,
  nodeLabels,
  getNodePosition,
  getNodeCoordinates,
  drawShortestPath,
} from "../components/graphFunction.jsx"; // All the fucntion of the Map
import Graph from "../components/graph.jsx"; // The Algorithm
import Map from "../assets/Map.png"; // 2D MAP
import PopoverComponent from "../components/popOver.jsx"; // Popover Container
import SearchBar from "../components/nwwsuSearchBar.jsx"; // Search Bar Container
import VideoModal from "../components/videoModal.jsx"; // 3D Modal COntainer
import NwssuLegend from "../components/nwssuLegend.jsx";

const AdminMap = () => {
  const {
    endNode,
    setEndNode,
    ccisName,
    collegeOfEducationName,
    collegeOfEngineeringAndArchitectureName,
    collegeOfManagementName,
    collegeOfAgricultureAndTechnologyName,
    researchExtensionOfficeBuildingName,
    rsuSocioCulturalCenterName,
    universityLibraryBuildingName,
    businessDevelopmentCenterName,
    artsSocialAndCulturalAffairsName,
    technologicalComplexBuildingName,
    agriTourismBuildingName,
    computerLaboratoryBuildingName,
    agriTechnologyBuildingName,
    universityHotelAndRestaurantBuildingName,
    administrationBuildingName,
    officeOfTheUniversityPresidentName,
    studentsAffairsServicesBuildingName,
    powerHouseName,
    balayAlumniName,
    businessStalls1Name,
    businessStalls2Name,
    registrarOfficeName,
    collegeOfCriminalJusticeAndSciencesBuildingName,
  } = useInfoContext();
  // State variables
  const canvasRef = useRef(null); // the Canvas
  const [disableInput, setDisableInput] = useState(false); // Disable the Create Path Button without Input And Endnode Input while Showing Path
  const [endNodeAliases, setEndNodeAliases] = useState([]); //  container of endnode Aliases
  const [sourceNode, setSourceNode] = useState("REGISTRAR OFFICE"); // Recognize As the Source node
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const [nodeClicked, setNodeClicked] = useState(false); // State to track if a node is clicked
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 }); // Popover postion depends of the node positon
  const [shortestPath, setShortestPath] = useState([]); // Container of the path
  const [showEdges, setShowEdges] = useState(false); // Container of the edges
  const [showPopover, setShowPopover] = useState(false); // Show Popover when it reach the Endnode
  const [selectedNodeImage, setSelectedNodeImage] = useState(null); // State for selected node image
  const [videoPlaying, setVideoPlaying] = useState(false); // make the 3D video Play
  const [hoveredNodeName, setHoveredNodeName] = useState(""); // hover name container
  const [hoverPosition, sethoverPosition] = useState({ x: 0, y: 0 }); // Popover postion depends of the node positon
  const [options, setOptions] = useState([]);

  // Declare officeNames outside of the useEffect hook
  let ccisOffices = [];
  let coedOffices = [];
  let researchExtensionOffices = [];
  let engineeringArchitectureOffices = [];
  let comOffices = [];
  let catOffices = [];
  let rsuSocioCulturalCenterOffices = [];
  let universityLibraryOffices = [];
  let businessDevelopmentCenterOffices = [];
  let ascaOffices = [];
  let technologicalComplexOffices = [];
  let agriTourismOffices = [];
  let computerLaboratoryOffices = [];
  let agriTechnologyOffices = [];
  let universityHotelRestaurantOffices = [];
  let administrationOffices = [];
  let universityPresidentOfficeOffices = [];
  let studentsAffairsServicesOffices = [];
  let balayAlumniOffices = [];
  let registrarOfficeOffices = [];
  let criminalJusticeSciencesOffices = [];
  let power = [];
  let stall = [];

  const nodeVideo = {
    CCIS: CCISNEW,
    [ccisName]: CCISNEW,
    COED: COED,
    [collegeOfEducationName]: COED,
    CAT: CAT,
    [collegeOfAgricultureAndTechnologyName]: CAT,
    CEA: CEA,
    [collegeOfEngineeringAndArchitectureName]: CEA,
    CCJS: CCJS,
    [collegeOfCriminalJusticeAndSciencesBuildingName]: CCJS,
    COM: COM,
    [collegeOfManagementName]: COM,
    REGISTRAR: CCISOLD,
    [registrarOfficeName]: CCISOLD,
    BALAY: BALAY,
    [balayAlumniName]: BALAY,
    RESEARCH: RESEARCH,
    [researchExtensionOfficeBuildingName]: RESEARCH,
    SOCIO: SOCIO,
    [rsuSocioCulturalCenterName]: SOCIO,
    LIBRARY: LIBRARY,
    [universityLibraryBuildingName]: LIBRARY,
    BDC: BDC,
    [businessDevelopmentCenterName]: BDC,
    ASCA: ASCA,
    [artsSocialAndCulturalAffairsName]: ASCA,
    TECHNOLOGICAL: TECHNOLOLOGY,
    [technologicalComplexBuildingName]: TECHNOLOLOGY,
    AGRITOUR: COMDEAN,
    [agriTourismBuildingName]: COMDEAN,
    SAS: SAS,
    [studentsAffairsServicesBuildingName]: SAS,
    PRESIDENT: PRESIDENT,
    [officeOfTheUniversityPresidentName]: PRESIDENT,
    ADMIN: ADMIN,
    [administrationBuildingName]: ADMIN,
    HOTEL: HOTEL,
    [universityHotelAndRestaurantBuildingName]: HOTEL,
  };

  // Hover name Container
  const getNodeDisplayName = (name) => {
    const nodeDisplayNames = {
      CCIS: ccisName,
      COED: collegeOfEducationName,
      STALL: businessStalls1Name,
      CCJS: collegeOfCriminalJusticeAndSciencesBuildingName,
      BALAY: balayAlumniName,
      CAT: collegeOfAgricultureAndTechnologyName,
      SAS: studentsAffairsServicesBuildingName,
      PRESIDENT: officeOfTheUniversityPresidentName,
      ADMIN: administrationBuildingName,
      HOTEL: universityHotelAndRestaurantBuildingName,
      COM: collegeOfManagementName,
      AGRITECH: agriTechnologyBuildingName,
      CLB: computerLaboratoryBuildingName,
      AGRITOUR: agriTourismBuildingName,
      BDC: businessStalls2Name,
      CEA: collegeOfEngineeringAndArchitectureName,
      TECHNOLOGICAL: technologicalComplexBuildingName,
      LIBRARY: universityLibraryBuildingName,
      SOCIO: rsuSocioCulturalCenterName,
      ASCA: artsSocialAndCulturalAffairsName,
      POWER: powerHouseName,
      RESEARCH: researchExtensionOfficeBuildingName,
    };
    return nodeDisplayNames[name] || name; // Return the custom name or the original name if not found
  };

  const drawNodes = (ctx, graph, sourceNode, endNode) => {
    ctx.clearRect(0, 0, 500, 300);
    ctx.font = "20px Arial";

    const nodesInfo = [];

    Object.keys(graph.nodes).forEach((node) => {
      const { x, y } = getNodePosition(node);
      const isSourceNode =
        node === sourceNode ||
        (graph.nodes[node].aliases &&
          graph.nodes[node].aliases.includes(sourceNode));
      const isEndNode =
        node === endNode || graph.nodes[node].aliases.includes(endNode);
      const isTransparent = [
        "$$$ONE",
        "$$$TWO",
        "$$$THREE",
        "$$$FOUR",
        "$$$FIVE",
        "$$$SIX",
        "$$$SEVEN",
        "$$$EIGHT",
        "$$$NINE",
        "$$$TEN",
        "$$$ELEVEN",
        "$$$TWELVE",
        "$$$THIRTEEN",
        "$$$FOURTEEN",
        "$$$FIFTEEN",
        "$$$SIXTEEN",
        "$$$SEVENTEEN",
        "$$$EIGHTEEN",
        "$$$NINETEEN",
        "$$$TWENTY",
        "$$$TWENTYONE",
      ].includes(node);

      // Push node information to the nodesInfo array
      nodesInfo.push({ name: node, x, y, isTransparent });

      ctx.beginPath();
      ctx.globalAlpha = isTransparent ? 0.0 : ctx.globalAlpha;
      ctx.arc(x, y, 14, 0, 2 * Math.PI);
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.fillStyle = "white";
      ctx.font = "13px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(nodeLabels[node], x, y);

      if (isSourceNode || isEndNode) {
        const image = new Image();
        image.src = isSourceNode ? A : B;
        image.onload = () => {
          ctx.drawImage(image, x - 25, y - 50, 50, 50);
        };
      }
      ctx.globalAlpha = isTransparent ? 1.0 : ctx.globalAlpha;

      // Attach onClick event handler to each node if endNode is not set and no node has been clicked
      if (!endNode && !nodeClicked) {
        ctx.canvas.addEventListener("click", handleClick);
      }
    });

    const handleCanvasMouseMove = (event) => {
      const rect = event.target.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;
      let isHoveringNode = false;

      nodesInfo.forEach(({ name, x, y, isTransparent }) => {
        if (
          !isTransparent &&
          Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2) <= 14
        ) {
          // Mouse is over this non-transparent node, set the hovered node name
          setHoveredNodeName(name);
          const { x, y } = getNodePosition(name);
          sethoverPosition({ x: x - 50, y: y - 55 });

          isHoveringNode = true;
        }
      });

      // Clear the hovered node name if not hovering over any node
      if (!isHoveringNode) {
        setHoveredNodeName("");
      }
    };

    // Attach mousemove event listener to the canvas
    ctx.canvas.addEventListener("mousemove", handleCanvasMouseMove);

    // Function to handle click event on nodes
    function handleClick(event) {
      const rect = ctx.canvas.getBoundingClientRect();
      const clickX = event.clientX - rect.left;
      const clickY = event.clientY - rect.top;

      Object.keys(graph.nodes).forEach((node) => {
        const { x, y } = getNodePosition(node);
        if (
          Math.pow(clickX - x, 2) + Math.pow(clickY - y, 2) <=
          Math.pow(14, 2)
        ) {
          setEndNode(node);
          setNodeClicked(true); // Set nodeClicked state to true
          ctx.canvas.removeEventListener("click", handleClick); // Remove click event listener
        }
      });
    }
  };

  // Function to fetch building name and office name
  async function fetchBuildingName() {
    const db = getDatabase();
    // Reference to your data
    const dataRef = ref(db, `buildings/buildingname`);

    let buildingNames = [];

    try {
      const snapshot = await get(dataRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const buildingOffices = [];

        for (const buildingId in data) {
          const building = data[buildingId];
          const buildingName = building.buildingname;
          const offices = building.buildingoffice;

          buildingNames.push(buildingName);

          for (const officeId in offices) {
            const office = offices[officeId];

            buildingOffices.push({
              buildingId: buildingId,
              buildingName: buildingName,
              buildingofficename: office.buildingofficename,
            });
          }

          // Check if the building name matches any of the specified buildings
          switch (buildingId) {
            case "-NvSyy98QINcuSNh_sFf":
              ccisOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT1ccjFrNKj0gO4IQC":
              coedOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT2YUjbrBN4yLofmFC":
              researchExtensionOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT26UCgT5a58seBxz9":
              engineeringArchitectureOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT2A_75VGGESyx6dok":
              comOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT2OdJ4gVxeCAdJ5oW":
              catOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT2hWOpCLtoRMEQpjk":
              rsuSocioCulturalCenterOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT2pOmCLTfkk7VLOHr":
              universityLibraryOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT31mfq_olzltwmF8M":
              businessDevelopmentCenterOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT3_q3NfqFU1Fvx9gw":
              ascaOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT3g_CoBNUYA7cj2Pf":
              technologicalComplexOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT41NHwr6euC44svfD":
              agriTourismOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT4894dkTBR2w-OpuL":
              computerLaboratoryOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT4CLBKsn3r1SEopbX":
              agriTechnologyOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT4d8sHy0sOPznmOs2":
              universityHotelRestaurantOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT4it2YpgrpV0iHGHY":
              administrationOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT4nEX7DOR6EiQyIPE":
              universityPresidentOfficeOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT4tDEoX4MPM3e-y0d":
              studentsAffairsServicesOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT55SG5bVjaYOJnSkB":
              balayAlumniOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT4zW1IbG_-NPsJCcV":
              power = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT5Ss-f-IbGMwqYrGB":
              criminalJusticeSciencesOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT55SG5bVjaYOJnSkB":
              balayAlumniOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT55SG5bVjaYOJnSkB":
              stall = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            case "-NvT5NaD7D-q8RzgGZIX":
              registrarOfficeOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              break;
            default:
              break;
          }
        }

        return buildingOffices;
      } else {
        console.log("No data available");
        return null;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    }
  }
  fetchBuildingName();

  // useEffect hook to handle canvas drawing and updates
  useEffect(() => {
    const graph = new Graph(); // Initialize the graph object
    graph.addNode("$$$ONE", []);
    graph.addNode("$$$TWO", []);
    graph.addNode("$$$THREE", []);
    graph.addNode("$$$FOUR", []);
    graph.addNode("$$$FIVE", []);
    graph.addNode("$$$SIX", []);
    graph.addNode("$$$SEVEN", []);
    graph.addNode("$$$EIGHT", []);
    graph.addNode("$$$NINE", []);
    graph.addNode("$$$TEN", []);
    graph.addNode("$$$ELEVEN", []);
    graph.addNode("$$$TWELVE", []);
    graph.addNode("$$$THIRTEEN", []);
    graph.addNode("$$$FOURTEEN", []);
    graph.addNode("$$$FIFTEEN", []);
    graph.addNode("$$$SIXTEEN", []);
    graph.addNode("$$$SEVENTEEN", []);
    graph.addNode("$$$EIGHTTEEN", []);
    graph.addNode("$$$NINETEEN", []);
    graph.addNode("$$$TWENTY", []);
    graph.addNode("$$$TWENTYONE", []);
    graph.addNode("COED", coedOffices);
    graph.addNode("CCIS", ccisOffices);
    graph.addNode("STALL", stall);
    graph.addNode("REGISTRAR", ["REGISTRAR OFFICE", registrarOfficeOffices]);
    graph.addNode("RESEARCH", researchExtensionOffices);
    graph.addNode("SOCIO", rsuSocioCulturalCenterOffices);
    graph.addNode("LIBRARY", universityLibraryOffices);
    graph.addNode("BDC", businessDevelopmentCenterOffices);
    graph.addNode("CEA", engineeringArchitectureOffices);
    graph.addNode("ASCA", ascaOffices);
    graph.addNode("TECHNOLOGICAL", technologicalComplexOffices);
    graph.addNode("AGRITOUR", agriTourismOffices);
    graph.addNode("CLB", computerLaboratoryOffices);
    graph.addNode("AGRITECH", agriTechnologyOffices);
    graph.addNode("COM", comOffices);
    graph.addNode("HOTEL", universityHotelRestaurantOffices);
    graph.addNode("ADMIN", administrationOffices);
    graph.addNode("PRESIDENT", universityPresidentOfficeOffices);
    graph.addNode("SAS", studentsAffairsServicesOffices);
    graph.addNode("CAT", catOffices);
    graph.addNode("CCJS", criminalJusticeSciencesOffices);
    graph.addNode("POWER", power);
    graph.addNode("BALAY", balayAlumniOffices);

    // Drawing on canvas
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      drawNodes(ctx, graph, sourceNode, endNode);
      drawEdges(ctx, graph, sourceNode, endNode, showEdges);
      drawShortestPath(ctx, shortestPath);
    }
  }, [shortestPath, showEdges, sourceNode, endNode]);

  // Generate the Path from source node to endnode
  const generateEdges = async () => {
    const graph = new Graph();
    // Add nodes to the graph with their aliases and edges
    graph.addNode("$$$ONE", [], { CCIS: 3, REGISTRAR: 1 });
    graph.addNode("$$$TWO", [], { REGISTRAR: 1, RESEARCH: 5 });
    graph.addNode("$$$THREE", [], { CCIS: 4 });
    graph.addNode("$$$FOUR", [], { $$$THREE: 6 });
    graph.addNode("$$$FIVE", [], { $$$FOUR: 7 });
    graph.addNode("$$$SIX", [], { SOCIO: 1 });
    graph.addNode("$$$SEVEN", [], { LIBRARY: 1 });
    graph.addNode("$$$EIGHT", [], { PRESIDENT: 1 });
    graph.addNode("$$$NINE", [], { REGISTRAR: 1 });
    graph.addNode("$$$TEN", [], { $$$NINE: 1 });
    graph.addNode("$$$ELEVEN", [], { CCIS: 1 });
    graph.addNode("$$$TWELVE", [], { $$$ELEVEN: 1 });
    graph.addNode("$$$THIRTEEN", [], { SAS: 1 });
    graph.addNode("$$$FOURTEEN", [], { $$$TEN: 1 });
    graph.addNode("$$$FIFTEEN", [], { $$$FOURTEEN: 1 });
    graph.addNode("$$$SIXTEEN", [], { POWER: 1 });
    graph.addNode("$$$SEVENTEEN", [], { $$$SIXTEEN: 2 });
    graph.addNode("$$$EIGHTEEN", [], { $$$SIXTEEN: 1 });
    graph.addNode("$$$NINETEEN", [], { $$$SEVENTEEN: 1 });
    graph.addNode("$$$TWENTY", [], { $$$NINETEEN: 1 });
    graph.addNode("$$$TWENTYONE", [], { $$$TWENTY: 1 });

    graph.addNode("CCIS", ccisOffices, { $$$ONE: 2 });
    graph.addNode("COED", coedOffices, { $$$FIVE: 162.8 });
    graph.addNode("REGISTRAR", ["REGISTRAR OFFICE", registrarOfficeOffices], {
      $$$ONE: 1,
      $$$TWO: 1,
    });
    graph.addNode("RESEARCH", researchExtensionOffices, { $$$TWO: 33.82 });
    graph.addNode("SOCIO", rsuSocioCulturalCenterOffices, { RESEARCH: 59.82 });
    graph.addNode("LIBRARY", universityLibraryOffices, { SOCIO: 113.22 });
    graph.addNode("BDC", businessDevelopmentCenterOffices, {
      $$$SEVEN: 144.92,
    });
    graph.addNode("ASCA", ascaOffices, { $$$FIFTEEN: 100.55 });
    graph.addNode("CEA", engineeringArchitectureOffices, {
      $$$SEVENTEEN: 148.56,
    });
    graph.addNode("TECHNOLOGICAL", technologicalComplexOffices, {
      $$$EIGHTEEN: 134.06,
    });
    graph.addNode("AGRITOUR", agriTourismOffices, {
      $$$INETEEN: 196.51,
    });
    graph.addNode("CLB", computerLaboratoryOffices, {
      $$$TWENTY: 188.11,
    });
    graph.addNode("AGRITECH", agriTechnologyOffices, {
      $$$TWENTYONE: 178.32,
    });
    graph.addNode("COM", comOffices, { HOTEL: 177.31 });
    graph.addNode("HOTEL", universityHotelRestaurantOffices, {
      $$$SEVEN: 130.32,
    });
    graph.addNode("ADMIN", administrationOffices, { $$$SEVEN: 130.17 });
    graph.addNode("PRESIDENT", universityPresidentOfficeOffices, {
      $$$SIX: 127.22,
    });
    graph.addNode("SAS", studentsAffairsServicesOffices, { $$$EIGHT: 147.32 });
    graph.addNode("CAT", catOffices, {
      $$$THIRTEEN: 186.32,
    });
    graph.addNode("CCJS", criminalJusticeSciencesOffices, {
      $$$TWELVE: 92.7,
    });
    graph.addNode("POWER", power, { $$$FIFTEEN: 125.57 });
    graph.addNode("BALAY", balayAlumniOffices, { CCJS: 162.8 });

    // Find the actual source node and end node from their aliases
    const actualSourceNode = Object.keys(graph.nodes).find(
      (nodeName) =>
        nodeName === sourceNode ||
        graph.nodes[nodeName].aliases.includes(sourceNode)
    );
    const actualEndNode = Object.keys(graph.nodes).find(
      (nodeName) =>
        nodeName === endNode || graph.nodes[nodeName].aliases.includes(endNode)
    );

    const distances = graph.dijkstra(actualSourceNode, actualEndNode);
    let node = actualEndNode;
    const path = [];
    while (node !== actualSourceNode) {
      path.unshift(node);
      node = Object.keys(graph.nodes[node].edges).reduce((a, b) =>
        distances[a] < distances[b] ? a : b
      );
    }
    path.unshift(actualSourceNode);

    setShortestPath(path);
    setShowEdges(true);
    setDisableInput(true);
    setShowPopover(true);
    setEndNodeAliases(graph.nodes[actualEndNode].aliases);

    const { x, y } = getNodeCoordinates(actualEndNode);
    setPopoverPosition({ x: x - -55, y: y - 200 });
  };

  // Delete the Path
  const deleteEdges = () => {
    setDisableInput(false);
    setShortestPath([]);
    setOptions([]);
    setShowEdges(false);
    setEndNode("");
    setShowPopover(false);
    setNodeClicked(false);

    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  deleteEdges();

  const handleSearchInput = async (value) => {
    const upperCaseValue = value.toUpperCase(); // Convert input value to uppercase
    const buildingOffices = await fetchBuildingName();
    const filteredOptions = buildingOffices
      .filter((office) =>
        office.buildingofficename.toUpperCase().includes(upperCaseValue)
      )
      .map((office) => ({
        value: office.buildingofficename,
        label: `${office.buildingofficename}`,
      }));
    setOptions(filteredOptions);
    setEndNode(upperCaseValue);
  };

  // Show 3D Modal
  const handleButtonClick = (node) => {
    setModalVisible(true);
    setSelectedNodeImage(nodeVideo[endNode]);
    setVideoPlaying(true);
  };
  // Close 3D Modal
  const onCancel = () => {
    setModalVisible(false);
    setVideoPlaying(false);
  };

  return (
    <div>
      <div className="absolute">
        {/* Absolute positioning for map */}
        <div className="absolute ">
          <img
            src={Map}
            alt="Map"
            style={{ width: "1306px", height: "775px" }}
          />
        </div>
        <div className="absolute">
          {/* Canvas */}
          <canvas width="1290" height="700" ref={canvasRef}></canvas>
          {hoveredNodeName && (
            <div
              className="flex items-center justify-center text-center absolute rounded-xl h-8 text-white "
              style={{
                top: hoverPosition.y,
                left: hoverPosition.x,
                backgroundColor: "#157f3d",
                padding: "5px",
              }}
            >
              {getNodeDisplayName(hoveredNodeName)}
            </div>
          )}
        </div>
      </div>

      {/* Search bar component */}
      <SearchBar
        sourceNode={sourceNode}
        endNode={endNode}
        generateEdges={generateEdges}
        deleteEdges={deleteEdges}
        disableInput={disableInput}
        handleSearchInput={handleSearchInput}
        options={options}
      />
      {/* 3D Modal Component */}
      <VideoModal
        visible={modalVisible}
        onCancel={onCancel}
        setVideoPlaying={setVideoPlaying}
        setModalVisible={setModalVisible}
        setSelectedNodeImage={setSelectedNodeImage}
        selectedNodeImage={selectedNodeImage}
        videoPlaying={videoPlaying}
      />
      {/* Node Name Popover */}
      <PopoverComponent
        showPopover={showPopover}
        popoverPosition={popoverPosition}
        endNode={endNode}
        endNodeAliases={endNodeAliases}
        handleButtonClick={handleButtonClick}
      />
      <NwssuLegend />
      <div
        className="flex absolute rounded-lg justify-center space-x-3 border-solid "
        style={{
          left: "255px",
          top: "670px",
          width: "270px",
          height: "40px",
        }}
      >
        <div className="flex items-center">
          <img src={A} alt="" className="w-7" />
          <h3 className=" text-md">LOCATION</h3>
        </div>
        <div className="flex items-center">
          <img src={B} alt="" className="w-7" />
          <h3 className="text-md">DESTINATION</h3>
        </div>
      </div>
    </div>
  );
};

export default AdminMap;
