// infoContext.jsx
import React, { useContext, useState, useEffect } from "react";
import { message } from "antd";
import { app } from "../helpers/firebase";
import {
  getDatabase,
  ref,
  set,
  push,
  get,
  update,
  remove,
} from "firebase/database";
import { useForm } from "antd/es/form/Form";
// Creating a context
const InfoContext = React.createContext();

// Custom hook for using the Info context
export function useInfoContext() {
  return useContext(InfoContext);
}

export const InfoProvider = ({ children }) => {
  const [form] = useForm(); // Add BuilingInfo Form
  const [form1] = useForm(); // Add BuildingName Form
  const [form2] = useForm(); // Add Building Office Form
  const [form3] = useForm(); // Edit Building Office
  const [endNode, setEndNode] = useState(""); // container of Input endnodes names
  const [getBuildingName, setGetBuildingName] = useState([]); // Fetch Building Name
  const [getBuildingInfo, setGetBuildingInfo] = useState([]); // Fetch Building Info
  const [getBuildingOffices, setGetBuildingOffices] = useState([]); // Fetch Building Offices
  const [localStorageData, setLocalStorageData] = useState([]); // Local Storage function
  const [isBuildingName, setIsBuildingName] = useState(false); // Buildingname Modal
  const [isBuildingInfo, setIsBuildingInfo] = useState(false); // BuildingInfo Modal
  const [isBuildingOffice, setIsBuildingOffice] = useState(false); // BUildingOffice Modal
  const [editRecord, setEditRecord] = useState(null); //  Edit Record Infos
  const [isEditModalVisible, setIsEditModalVisible] = useState(false); // Edit Modal
  const [isEditOfficeModalVisible, setIsEditOfficeModalVisible] =
    useState(false); // Modal
  const [selectedBuilding, setSelectedBuilding] = useState(null); // Save Selected Building Data
  const [officeInfo, setOfficeInfo] = useState("");

  // addbuilding info into database
  const addBuildingInfo = async (values1) => {
    const db = getDatabase(app);
    const newDocRef = push(ref(db, "buildings/buildinginfo"));

    const { node, ...dataWithoutNode } = values1;

    // Save data to Firebase
    set(newDocRef, dataWithoutNode);

    setIsBuildingInfo(false);
    form1.resetFields();
    window.location.reload();
  };
  // addbuilding name into database
  const addBuildingName = async (values) => {
    // Exclude the 'node' value from the 'values' object
    const { node, ...dataWithoutNode } = values;

    const db = getDatabase(app);
    const newDocRef = push(ref(db, "buildings/buildingname"));

    // Save data to Firebase
    set(newDocRef, dataWithoutNode);

    setIsBuildingName(false);
    form.resetFields();
    window.location.reload();
  };

  const addBuildingOffice = async (values2) => {
    const db = getDatabase(app);

    if (!selectedBuilding) {
      message.error("Please select a building first!");
      return;
    }

    const buildingid = selectedBuilding.id;
    const officeId = "officeId" + Math.floor(Math.random() * 1000);

    // Query to check if the building office already exists with the provided name
    const buildingOfficesRef = ref(
      db,
      `buildings/buildingname/${buildingid}/buildingoffice`
    );

    // fetching the building office in the database
    const buildingOfficesSnapshot = await get(buildingOfficesRef);

    // Check if any office exists
    if (buildingOfficesSnapshot.exists()) {
      const buildingOfficesData = buildingOfficesSnapshot.val();

      // Check if the office with the provided name already exists
      const officeExists = Object.values(buildingOfficesData).some(
        (office) =>
          office.buildingofficename === values2.buildingofficename &&
          office.officedescription === values2.officedescription
      );
      if (officeExists) {
        message.error("Office already exists.");
        return;
      }
    }

    // Query to add building office into the database
    const newBuildingOfficeRef = ref(
      db,
      `buildings/buildingname/${buildingid}/buildingoffice/${officeId}`
    );

    await set(newBuildingOfficeRef, { ...values2, buildingid });

    setSelectedBuilding(null);
    setIsBuildingOffice(false);
    form2.resetFields();
    window.location.reload();
  };
  // fetching all the tables in the data base
  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase(app);

        // Fetch building info data from Firebase
        const data1Ref = ref(db, "buildings/buildinginfo");
        const snapshot1 = await get(data1Ref);
        const firebaseData1 = snapshot1.val();
        const formattedData1 = Object.keys(firebaseData1 || {}).map((key) => ({
          buildingid: key,
          about: firebaseData1[key].about,
          course: firebaseData1[key].course,
        }));

        // Fetch building name data
        const dataRef = ref(db, "buildings/buildingname");
        const snapshot = await get(dataRef);
        const firebaseData = snapshot.val();
        const formattedData2 = Object.keys(firebaseData || {}).map(
          (key, index) => ({
            key: index.toString(),
            buildingid: key,
            buildingname: firebaseData[key].buildingname,
            buildingoffice: Object.entries(
              firebaseData[key].buildingoffice || {}
            ).map(([officeId, office]) => ({
              buildingid: office.buildingid,
              officeId: officeId,
              buildingofficename: office.buildingofficename,
              officedescription: office.officedescription,
            })),
          })
        );

        // Set state with Firebase data
        setGetBuildingInfo(formattedData1);
        setGetBuildingName(formattedData2);
      } catch (error) {
        message.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const deleteBuildingOffice = async (buildingId, officeId) => {
    try {
      const db = getDatabase(app);
      const buildingRef = ref(
        db,
        `buildings/buildingname/${buildingId}/buildingoffice/${officeId}`
      );
      await remove(buildingRef);
      console.log("Office deleted successfully");
      window.location.reload();
    } catch (error) {
      message.error("Error deleting office: ", error.message);
    }
  };

  // update the buildingname and building info into the data in the database
  const handleEditFormSubmit = (values) => {
    if (!editRecord) {
      return;
    }

    const db = getDatabase(app);
    const updateData = {};

    if (editRecord.buildingname) {
      updateData[`buildings/buildingname/${editRecord.buildingid}`] = {
        buildingname: values.buildingname,
        buildingoffice: editRecord.buildingoffice
          .map((office) => ({
            buildingid: editRecord.buildingid,
            officeId: office.officeId,
            buildingofficename: office.buildingofficename,
            officedescription: office.officedescription,
          }))
          .filter((office) => office.buildingofficename !== undefined)
          .filter((office) => office.officedescription !== undefined), // Filter out undefined officedescription
      };
    } else if (
      editRecord.about !== undefined &&
      editRecord.course !== undefined
    ) {
      // Edit building info (about and course)
      updateData[`buildings/buildinginfo/${editRecord.buildingid}`] = {
        about: values.about,
        course: values.course,
      };
    }

    update(ref(db), updateData)
      .then(() => {
        setIsEditModalVisible(false);
        setEditRecord(null);
        form.resetFields();
      })
      .catch((error) => {
        message.error("Error updating data:", error);
      });
  };

  // update building offices in the database
  const updateBuildingOffice = async (values) => {
    if (!editRecord) {
      message.error("No record selected");
      return;
    }
    const db = getDatabase(app);
    // console.log(editRecord);
    const officeId = editRecord.officeId;
    const buildingid = editRecord.buildingid;

    const buildingOfficeRef = ref(
      db,
      `buildings/buildingname/${buildingid}/buildingoffice/${officeId}`
    );

    try {
      const snapshot = await get(buildingOfficeRef);
      if (snapshot.exists()) {
        await update(buildingOfficeRef, {
          buildingofficename: values.buildingofficename,
          officedescription: values.officedescription,
        });

        setIsEditOfficeModalVisible(false);
        form3.resetFields();
        window.location.reload();
      } else {
        console.log("Building office does not exist");
      }
    } catch (error) {
      message.error("Failed to update data:", error);
    }
  };

  const handleEditRecord = (record) => {
    form.resetFields();
    form1.resetFields();
    form2.resetFields();
    setEditRecord(record);
    setIsEditModalVisible(true);
  };

  const handleRecordOffice = (record) => {
    setEditRecord(record);
    form3.resetFields();
    setIsEditOfficeModalVisible(true);
  };

  const handleAddCancel = () => {
    form.resetFields();
    form1.resetFields();
    form2.resetFields();
    setIsBuildingInfo(false);
    setIsBuildingName(false);
    setIsBuildingOffice(false);
  };

  const handleEditCancel = () => {
    form.resetFields();
    form1.resetFields();
    form2.resetFields();
    form3.resetFields();
    setIsEditModalVisible(false);
    setIsEditOfficeModalVisible(false);
  };

  // Function to fetch building name and office name
  async function fetchBuildingData(officeName) {
    const db = getDatabase();
    // Reference to your data
    const dataRef = ref(db, `buildings/buildingname`);

    try {
      const snapshot = await get(dataRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        for (const buildingId in data) {
          const building = data[buildingId];
          const offices = building.buildingoffice;
          for (const officeId in offices) {
            const office = offices[officeId];
            const officeInfo = office.officedescription;
            if (
              office.buildingofficename.toUpperCase() ===
              officeName.toUpperCase()
            ) {
              // console.log("Building Name:", building.buildingname);
              // console.log("Office Name:", office.buildingofficename);
              // console.log("Building ID:", buildingId);
              // console.log("Office ID:", officeId);
              setOfficeInfo(officeInfo);
              return;
            }
          }
        }
      } else {
        message.log("No data available");
      }
    } catch (error) {
      message.error("Error fetching data:", error);
    }
  }
  // Example usage
  const officeName = endNode; // User input office name
  fetchBuildingData(officeName);

  const ccisBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyITi5uQej9wh2GyXNE"
  );

  const collegeOfEducation = getBuildingName.find(
    (building) => building.buildingid === "-NyIdbPWw9HOjOFQVz9Q"
  );

  const collegeOfEngineeringAndArchitecture = getBuildingName.find(
    (building) => building.buildingid === "-NyIe6ea0nCJXzeL1ejV"
  );

  const collegeOfManagement = getBuildingName.find(
    (building) => building.buildingid === "-NyIeTWtLJsk3AkJCIkc"
  );

  const collegeOfAgricultureAndTechnology = getBuildingName.find(
    (building) => building.buildingid === "-NyIff7QVfErxzdq72wV"
  );

  const researchExtensionOfficeBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyIrCZQQmvfZYRKap4w"
  );

  const collegeOfCriminalJusticeAndSciencesBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyLhfxHNAaFNq6D2Fuh"
  );

  const rsuSocioCulturalCenter = getBuildingName.find(
    (building) => building.buildingid === "-NyLkmIYYIeB_6k0zcaX"
  );

  const universityLibraryBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyLlmOoN1ujks5OetEg"
  );

  const businessDevelopmentCenter = getBuildingName.find(
    (building) => building.buildingid === "-NyLoyOrcrWj1BkNv_AN"
  );

  const artsSocialAndCulturalAffairs = getBuildingName.find(
    (building) => building.buildingid === "-NyLq8B84X3k8bJ8rbPa"
  );

  const technologicalComplexBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyLqTLv1RnEsmnFRcYz"
  );

  const agriTourismBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyLqux0XXZ5Z71JfgsE"
  );

  const computerLaboratoryBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyLraECGFCT3PBHQjFK"
  );

  const agriTechnologyBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyLrloNDc1OR05gMgTE"
  );

  const universityHotelAndRestaurantBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyLsJwDX3od4UYz-Rt4"
  );

  const administrationBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyLsqqmoqCirJOjL_CZ"
  );

  const officeOfTheUniversityPresident = getBuildingName.find(
    (building) => building.buildingid === "-NyLtw-3EVVUqNF6HLSi"
  );

  const studentsAffairsServicesBuilding = getBuildingName.find(
    (building) => building.buildingid === "-NyLv1P3wq_Qzf7SC9lC"
  );

  const powerHouse = getBuildingName.find(
    (building) => building.buildingid === "-NyLwI7XPkRUOeULiaUj"
  );

  const balayAlumni = getBuildingName.find(
    (building) => building.buildingid === "-NyLvTjwbaGmLvuolJsF"
  );

  const businessStalls1 = getBuildingName.find(
    (building) => building.buildingid === "-NyLxD7nEx8BVuv5pe7C"
  );

  const registrarOffice = getBuildingName.find(
    (building) => building.buildingid === "-NyLwwKEvwLpgIzTE7sK"
  );

  const ccisName = ccisBuilding ? ccisBuilding.buildingname : "";

  const collegeOfEducationName = collegeOfEducation
    ? collegeOfEducation.buildingname
    : "";
  const collegeOfEngineeringAndArchitectureName =
    collegeOfEngineeringAndArchitecture
      ? collegeOfEngineeringAndArchitecture.buildingname
      : "";
  const collegeOfManagementName = collegeOfManagement
    ? collegeOfManagement.buildingname
    : "";
  const collegeOfAgricultureAndTechnologyName =
    collegeOfAgricultureAndTechnology
      ? collegeOfAgricultureAndTechnology.buildingname
      : "";
  const researchExtensionOfficeBuildingName = researchExtensionOfficeBuilding
    ? researchExtensionOfficeBuilding.buildingname
    : "";
  const rsuSocioCulturalCenterName = rsuSocioCulturalCenter
    ? rsuSocioCulturalCenter.buildingname
    : "";
  const universityLibraryBuildingName = universityLibraryBuilding
    ? universityLibraryBuilding.buildingname
    : "";
  const businessDevelopmentCenterName = businessDevelopmentCenter
    ? businessDevelopmentCenter.buildingname
    : "";
  const artsSocialAndCulturalAffairsName = artsSocialAndCulturalAffairs
    ? artsSocialAndCulturalAffairs.buildingname
    : "";
  const technologicalComplexBuildingName = technologicalComplexBuilding
    ? technologicalComplexBuilding.buildingname
    : "";
  const agriTourismBuildingName = agriTourismBuilding
    ? agriTourismBuilding.buildingname
    : "";
  const computerLaboratoryBuildingName = computerLaboratoryBuilding
    ? computerLaboratoryBuilding.buildingname
    : "";
  const agriTechnologyBuildingName = agriTechnologyBuilding
    ? agriTechnologyBuilding.buildingname
    : "";
  const universityHotelAndRestaurantBuildingName =
    universityHotelAndRestaurantBuilding
      ? universityHotelAndRestaurantBuilding.buildingname
      : "";
  const administrationBuildingName = administrationBuilding
    ? administrationBuilding.buildingname
    : "";
  const officeOfTheUniversityPresidentName = officeOfTheUniversityPresident
    ? officeOfTheUniversityPresident.buildingname
    : "";
  const studentsAffairsServicesBuildingName = studentsAffairsServicesBuilding
    ? studentsAffairsServicesBuilding.buildingname
    : "";
  const powerHouseName = powerHouse ? powerHouse.buildingname : "";
  const balayAlumniName = balayAlumni ? balayAlumni.buildingname : "";
  const businessStalls1Name = businessStalls1
    ? businessStalls1.buildingname
    : "";
  const registrarOfficeName = registrarOffice
    ? registrarOffice.buildingname
    : "";
  const collegeOfCriminalJusticeAndSciencesBuildingName =
    collegeOfCriminalJusticeAndSciencesBuilding
      ? collegeOfCriminalJusticeAndSciencesBuilding.buildingname
      : "";

  // 3D Video Container

  return (
    <InfoContext.Provider
      value={{
        app,
        form,
        form1,
        form2,
        form3,
        isEditOfficeModalVisible,
        handleRecordOffice,
        updateBuildingOffice,
        selectedBuilding,
        setSelectedBuilding,
        handleEditRecord,
        addBuildingOffice,
        isBuildingOffice,
        setIsBuildingOffice,
        isBuildingName,
        setIsBuildingName,
        isBuildingInfo,
        setIsBuildingInfo,
        handleAddCancel,
        addBuildingName,
        addBuildingInfo,
        localStorageData,
        setLocalStorageData,
        getBuildingName,
        setGetBuildingName,
        getBuildingInfo,
        setGetBuildingInfo,
        setGetBuildingOffices,
        getBuildingOffices,
        handleEditFormSubmit,
        isEditModalVisible,
        setIsEditModalVisible,
        handleEditCancel,
        editRecord,
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
        officeInfo,
        setOfficeInfo,
        deleteBuildingOffice,
      }}
    >
      {children}
    </InfoContext.Provider>
  );
};
