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

const NwssuMap = () => {
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
    registrarOfficeName,
    collegeOfCriminalJusticeAndSciencesBuildingName,
    setOfficeInfo,
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
  const [selectedNodeImage, setSelectedNodeImage] = useState(null); // State for selected node Video
  const [videoPlaying, setVideoPlaying] = useState(false); // make the 3D video Play
  const [hoveredNodeName, setHoveredNodeName] = useState(""); // hover name container
  const [hoverPosition, sethoverPosition] = useState({
    x: 0,
    y: 0,
  }); // Popover postion depends of the node positon
  const [options, setOptions] = useState([]); // office dropdown Option
  const [InfoOffice, setInfoOffice] = useState(""); // Office Information Storage

  // node Variables
  const [ccisNode, setCcisNode] = useState([]);
  const [coedNode, setCoedNode] = useState([]);
  const [researchNode, setReaserchNode] = useState([]);
  const [ceaNode, setCeaNode] = useState([]);
  const [comNode, setComNode] = useState([]);
  const [catNode, setCatNode] = useState([]);
  const [rsuNode, setRsuNode] = useState([]);
  const [libraryNode, setLibraryNode] = useState([]);
  const [bdcNode, setBdcNode] = useState([]);
  const [ascaNode, setAscaNode] = useState([]);
  const [tecnologicalNode, setTechnologicalNode] = useState([]);
  const [agriTourNode, setAgriTourNode] = useState([]);
  const [comLabNode, setComLabNode] = useState([]);
  const [agreTechNode, setAgriTechNode] = useState([]);
  const [hotelNode, setHotelNode] = useState([]);
  const [adminNode, setAdminNode] = useState([]);
  const [presidentNode, setPresidentNode] = useState([]);
  const [sasNode, setSasNode] = useState([]);
  const [balayNode, setBalayNode] = useState([]);
  const [registrarNode, setRegistrarNode] = useState([]);
  const [ccjsNode, setCcjsNode] = useState([]);
  const [power, setPower] = useState([]);
  const [stall, setStall] = useState([]);

  const nodeInfo = {
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
    BDC: businessDevelopmentCenterName,
    CEA: collegeOfEngineeringAndArchitectureName,
    TECHNOLOGICAL: technologicalComplexBuildingName,
    LIBRARY: universityLibraryBuildingName,
    SOCIO: rsuSocioCulturalCenterName,
    ASCA: artsSocialAndCulturalAffairsName,
    POWER: powerHouseName,
    RESEARCH: researchExtensionOfficeBuildingName,
    REGISTRAR: registrarOfficeName,
  };
  const nodeVideo = {
    CCIS: CCISNEW,
    [ccisName]: CCISNEW,
    ...ccisNode.reduce((acc, value) => {
      acc[value] = CCISNEW;
      return acc;
    }, {}),

    COED: COED,
    [collegeOfEducationName]: COED,

    ...coedNode.reduce((acc, value) => {
      acc[value] = COED;
      return acc;
    }, {}),
    CAT: CAT,
    [collegeOfAgricultureAndTechnologyName]: CAT,
    ...catNode.reduce((acc, value) => {
      acc[value] = CAT;
      return acc;
    }, {}),
    CEA: CEA,
    [collegeOfEngineeringAndArchitectureName]: CEA,
    ...ceaNode.reduce((acc, value) => {
      acc[value] = CEA;
      return acc;
    }, {}),
    CCJS: CCJS,
    [collegeOfCriminalJusticeAndSciencesBuildingName]: CCJS,
    ...ccjsNode.reduce((acc, value) => {
      acc[value] = CCJS;
      return acc;
    }, {}),
    COM: COM,
    [collegeOfManagementName]: COM,
    ...comNode.reduce((acc, value) => {
      acc[value] = COM;
      return acc;
    }, {}),
    REGISTRAR: CCISOLD,
    [registrarOfficeName]: CCISOLD,
    ...registrarNode.reduce((acc, value) => {
      acc[value] = BALAY;
      return acc;
    }, {}),

    BALAY: BALAY,
    [balayAlumniName]: BALAY,
    ...balayNode.reduce((acc, value) => {
      acc[value] = BALAY;
      return acc;
    }, {}),
    RESEARCH: RESEARCH,
    [researchExtensionOfficeBuildingName]: RESEARCH,

    ...researchNode.reduce((acc, value) => {
      acc[value] = RESEARCH;
      return acc;
    }, {}),
    SOCIO: SOCIO,
    [rsuSocioCulturalCenterName]: SOCIO,
    ...rsuNode.reduce((acc, value) => {
      acc[value] = SOCIO;
      return acc;
    }, {}),
    LIBRARY: LIBRARY,
    [universityLibraryBuildingName]: LIBRARY,
    ...libraryNode.reduce((acc, value) => {
      acc[value] = LIBRARY;
      return acc;
    }, {}),
    BDC: BDC,
    [businessDevelopmentCenterName]: BDC,
    ...bdcNode.reduce((acc, value) => {
      acc[value] = BDC;
      return acc;
    }, {}),

    ASCA: ASCA,
    [artsSocialAndCulturalAffairsName]: ASCA,
    ...ascaNode.reduce((acc, value) => {
      acc[value] = ASCA;
      return acc;
    }, {}),

    TECHNOLOGICAL: TECHNOLOLOGY,
    [technologicalComplexBuildingName]: TECHNOLOLOGY,
    ...tecnologicalNode.reduce((acc, value) => {
      acc[value] = TECHNOLOLOGY;
      return acc;
    }, {}),

    AGRITOUR: COMDEAN,
    [agriTourismBuildingName]: COMDEAN,
    ...agriTourNode.reduce((acc, value) => {
      acc[value] = COMDEAN;
      return acc;
    }, {}),
    SAS: SAS,
    [studentsAffairsServicesBuildingName]: SAS,
    ...sasNode.reduce((acc, value) => {
      acc[value] = SAS;
      return acc;
    }, {}),
    PRESIDENT: PRESIDENT,
    [officeOfTheUniversityPresidentName]: PRESIDENT,
    ...presidentNode.reduce((acc, value) => {
      acc[value] = PRESIDENT;
      return acc;
    }, {}),
    ADMIN: ADMIN,
    [administrationBuildingName]: ADMIN,
    ...adminNode.reduce((acc, value) => {
      acc[value] = ADMIN;
      return acc;
    }, {}),
    HOTEL: HOTEL,
    [universityHotelAndRestaurantBuildingName]: HOTEL,
    ...hotelNode.reduce((acc, value) => {
      acc[value] = HOTEL;
      return acc;
    }, {}),
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
      BDC: businessDevelopmentCenterName,
      CEA: collegeOfEngineeringAndArchitectureName,
      TECHNOLOGICAL: technologicalComplexBuildingName,
      LIBRARY: universityLibraryBuildingName,
      SOCIO: rsuSocioCulturalCenterName,
      ASCA: artsSocialAndCulturalAffairsName,
      POWER: powerHouseName,
      RESEARCH: researchExtensionOfficeBuildingName,
      REGISTRAR: registrarOfficeName,
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
        "$$$TWENTYTWO",
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
    let buildingOffices = [];

    try {
      const snapshot = await get(dataRef);
      if (snapshot.exists()) {
        const data = snapshot.val();

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
              officedescription: office.officedescription,
            });
          }

          // Check if the building name matches any of the specified buildings
          switch (buildingId) {
            case "-NyITi5uQej9wh2GyXNE":
              const ccisOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setCcisNode(ccisOffices);
              break;
            case "-NyIdbPWw9HOjOFQVz9Q":
              const coedOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setCoedNode(coedOffices);
              break;
            case "-NyIrCZQQmvfZYRKap4w":
              const researchExtensionOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setReaserchNode(researchExtensionOffices);
              break;
            case "-NyIe6ea0nCJXzeL1ejV":
              const engineeringArchitectureOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setCeaNode(engineeringArchitectureOffices);
              break;
            case "-NyIeTWtLJsk3AkJCIkc":
              const comOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setComNode(comOffices);
              break;
            case "-NyIff7QVfErxzdq72wV":
              const catOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setCatNode(catOffices);
              break;
            case "-NyLhfxHNAaFNq6D2Fuh":
              const criminalJusticeSciencesOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setCcjsNode(criminalJusticeSciencesOffices);
              break;
            case "-NyLkmIYYIeB_6k0zcaX":
              const rsuSocioCulturalCenterOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setRsuNode(rsuSocioCulturalCenterOffices);
              break;
            case "-NyLlmOoN1ujks5OetEg":
              const universityLibraryOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setLibraryNode(universityLibraryOffices);
              break;
            case "-NyLoyOrcrWj1BkNv_AN":
              const businessDevelopmentCenterOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setBdcNode(businessDevelopmentCenterOffices);
              break;
            case "-NyLq8B84X3k8bJ8rbPa":
              const ascaOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setAscaNode(ascaOffices);
              break;
            case "-NyLqTLv1RnEsmnFRcYz":
              const technologicalComplexOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setTechnologicalNode(technologicalComplexOffices);
              break;
            case "-NyLqux0XXZ5Z71JfgsE":
              const agriTourismOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setAgriTourNode(agriTourismOffices);

              break;
            case "-NyLraECGFCT3PBHQjFK":
              const computerLaboratoryOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setComLabNode(computerLaboratoryOffices);
              break;
            case "-NyLrloNDc1OR05gMgTE":
              const agriTechnologyOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setAgriTechNode(agriTechnologyOffices);
              break;
            case "-NyLsJwDX3od4UYz-Rt4":
              const universityHotelRestaurantOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setHotelNode(universityHotelRestaurantOffices);
              break;
            case "-NyLsqqmoqCirJOjL_CZ":
              const administrationOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setAdminNode(administrationOffices);
              break;
            case "-NyLtw-3EVVUqNF6HLSi":
              const universityPresidentOfficeOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setPresidentNode(universityPresidentOfficeOffices);
              break;
            case "-NyLv1P3wq_Qzf7SC9lC":
              const studentsAffairsServicesOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setSasNode(studentsAffairsServicesOffices);
              break;
            case "-NyLvTjwbaGmLvuolJsF":
              const balayAlumniOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setBalayNode(balayAlumniOffices);
              break;
            case "-NyLwI7XPkRUOeULiaUj":
              const power1 = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setPower(power1);
              break;
            case "-NyLxD7nEx8BVuv5pe7C":
              const stall1 = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setStall(stall1);
              break;
            case "-NyLwwKEvwLpgIzTE7sK":
              const registrarOfficeOffices = buildingOffices
                .filter((office) => office.buildingName === buildingName)
                .map((office) => office.buildingofficename);
              setRegistrarNode(registrarOfficeOffices);
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

  useEffect(() => {
    fetchBuildingName();
  }, []);

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
    graph.addNode("$$$TWENTYTWO", []);
    graph.addNode("COED", coedNode);
    graph.addNode("CCIS", ccisNode);
    graph.addNode("STALL", stall);
    graph.addNode("REGISTRAR", ["REGISTRAR OFFICE", registrarNode]);
    graph.addNode("RESEARCH", researchNode);
    graph.addNode("SOCIO", rsuNode);
    graph.addNode("LIBRARY", libraryNode);
    graph.addNode("BDC", bdcNode);
    graph.addNode("CEA", ceaNode);
    graph.addNode("ASCA", ascaNode);
    graph.addNode("TECHNOLOGICAL", tecnologicalNode);
    graph.addNode("AGRITOUR", agriTourNode);
    graph.addNode("CLB", comLabNode);
    graph.addNode("AGRITECH", agreTechNode);
    graph.addNode("COM", comNode);
    graph.addNode("HOTEL", hotelNode);
    graph.addNode("ADMIN", adminNode);
    graph.addNode("PRESIDENT", presidentNode);
    graph.addNode("SAS", sasNode);
    graph.addNode("CAT", catNode);
    graph.addNode("CCJS", ccjsNode);
    graph.addNode("POWER", power);
    graph.addNode("BALAY", balayNode);

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
    graph.addNode("$$$TWENTYTWO", [], { $$$NINE: 1 });

    graph.addNode("CCIS", ccisNode, { $$$ONE: 2 });
    graph.addNode("STALL", stall, { $$$TWENTYTWO: 2 });
    graph.addNode("COED", coedNode, { $$$FIVE: 162.8 });
    graph.addNode("REGISTRAR", ["REGISTRAR OFFICE", registrarNode], {
      $$$ONE: 1,
      $$$TWO: 1,
    });
    graph.addNode("RESEARCH", researchNode, { $$$TWO: 33.82 });
    graph.addNode("SOCIO", rsuNode, { RESEARCH: 59.82 });
    graph.addNode("LIBRARY", libraryNode, { SOCIO: 113.22 });
    graph.addNode("BDC", bdcNode, {
      $$$SEVEN: 144.92,
    });
    graph.addNode("ASCA", ascaNode, { $$$FIFTEEN: 100.55 });
    graph.addNode("CEA", ceaNode, {
      $$$SEVENTEEN: 148.56,
    });
    graph.addNode("TECHNOLOGICAL", tecnologicalNode, {
      $$$EIGHTEEN: 134.06,
    });
    graph.addNode("AGRITOUR", agriTourNode, {
      $$$NINETEEN: 196.51,
    });
    graph.addNode("CLB", comLabNode, {
      $$$TWENTY: 188.11,
    });
    graph.addNode("AGRITECH", agreTechNode, {
      $$$TWENTYONE: 178.32,
    });
    graph.addNode("COM", comNode, { HOTEL: 177.31 });
    graph.addNode("HOTEL", hotelNode, {
      $$$SEVEN: 130.32,
    });
    graph.addNode("ADMIN", adminNode, { $$$SEVEN: 130.17 });
    graph.addNode("PRESIDENT", presidentNode, {
      $$$SIX: 127.22,
    });
    graph.addNode("SAS", sasNode, { $$$EIGHT: 147.32 });
    graph.addNode("CAT", catNode, {
      $$$THIRTEEN: 186.32,
    });
    graph.addNode("CCJS", ccjsNode, {
      $$$TWELVE: 92.7,
    });
    graph.addNode("POWER", power, { $$$FIFTEEN: 125.57 });
    graph.addNode("BALAY", balayNode, { CCJS: 162.8 });

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
    setShowEdges(false);
    setEndNode("");
    setShowPopover(false);
    setNodeClicked(false);
    setInfoOffice("");
    setOfficeInfo("");
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  // Search Of the EndNode
  const handleSearchInput = async (value) => {
    const upperCaseValue = value.toUpperCase();
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
    setInfoOffice(nodeInfo[endNode]);
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
        setNodeClicked={setNodeClicked}
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
        InfoOffice={InfoOffice}
      />
      {/* Node Name Popover */}
      <PopoverComponent
        showPopover={showPopover}
        popoverPosition={popoverPosition}
        handleButtonClick={handleButtonClick}
        ccisNode={ccisNode}
        coedNode={coedNode}
        ccjsNode={ccjsNode}
        ceaNode={ceaNode}
        comNode={comNode}
        catNode={catNode}
        researchNode={researchNode}
        rsuNode={rsuNode}
        libraryNode={libraryNode}
        bdcNode={bdcNode}
        ascaNode={ascaNode}
        technologicalNode={tecnologicalNode}
        agriTourNode={agriTourNode}
        comLabNode={comLabNode}
        agreTechNode={agreTechNode}
        hotelNode={hotelNode}
        adminNode={adminNode}
        presidentNode={presidentNode}
        sasNode={sasNode}
        power={power}
        balayNode={balayNode}
        stall={stall}
        registrarNode={registrarNode}
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

export default NwssuMap;
