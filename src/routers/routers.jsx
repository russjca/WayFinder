// Landing Page
import NwssuLanding from "../pages/nwssuLanding";
import AdminLogin from "../pages/adminLogin";
import ForgotPassword from "../pages/forgotPassword";

//
import NwssuAdminLayout from "../layout/nwssuAdminLayout";
import AdminBuildingInfo from "../pages/adminBuildingInfo";
import AdminBuildingOffice from "../pages/adminBuildingOffice";

// Mainlayout
import Mainlayout from "../layout/mainlayout";
import NwssuMap from "../pages/nwssuMap";
import NwssuBuilding from "../pages/nwssuBuilding";
import NwssuUserGuide from "../pages/nwssuUserGuide";

// Ccislayout
import Ccislayout from "../layout/ccisLayout";
import CcisBuilding from "../Buildings/ccisBuilding";

// Ccjslayout
import Ccjslayout from "../layout/ccjsLayout";
import CcjsBuilding from "../Buildings/ccjsBuilding";

// Comlayout
import Comlayout from "../layout/comLayout";
import ComBuilding from "../Buildings/comBuilding";

// Cealayout
import Cealayout from "../layout/ceaLayout";
import CeaBuilding from "../Buildings/ceaBuilding";

// Coedlayout
import Coedlayout from "../layout/coedLayout";
import CoedBuilding from "../Buildings/coedBuilding";

// Catlayout
import Catlayout from "../layout/catLayout";
import CatBuilding from "../Buildings/catBuilding";

// Ccis3layout
import Ccis3layout from "../layout/ccis3Layout";
import Ccis3Building from "../Buildings/ccis3Building";

// Researchlayout
import Researchlayout from "../layout/researchLayout";
import ResearchBuilding from "../Buildings/researchBuilding";

// Socoilayout
import Sociolayout from "../layout/socioLayout";
import SocioBuilding from "../Buildings/socioBuilding";

// Librarylayout
import Librarylayout from "../layout/libraryLayout";
import LibraryBuilding from "../Buildings/libraryBuilding";

// Bcdlayout
import Bdclayout from "../layout/bdcLayout";
import BdcBuilding from "../Buildings/bdcBuilding";

// Ascalayout
import Ascalayout from "../layout/ascaLayout";
import AscaBuilding from "../Buildings/ascaBuilding";

// Tcblayout
import Tcblayout from "../layout/tcbLayout";
import TcbBuilding from "../Buildings/tcbBuilding";

// AgriTourlayout
import AgriTourlayout from "../layout/agriTourLayout";
import AgriTourBuilding from "../Buildings/agriTourBuilding";

// Adminlayout
import Adminlayout from "../layout/adminLayout";
import AdminBuilding from "../Buildings/adminBuilding";

// Hotellayout
import Hotellayout from "../layout/hotelLayout";
import HotelBuilding from "../Buildings/hotelBuilding";

// Presidentlayout
import Presidentlayout from "../layout/presidentLayout";
import PresidentBuilding from "../Buildings/presidentBuilding";

// SasLayout
import Saslayout from "../layout/sasLayout";
import SasBuilding from "../Buildings/sasBuilding";

// BalayLayout
import Balaylayout from "../layout/balayLayout";
import BalayBuilding from "../Buildings/balayBuilding";

// Error Pages
import Error500Page from "../pages/errorsPage/500";
import Error404Page from "../pages/errorsPage/404";

const Router = [
  {
    path: "/",
    element: <NwssuLanding />,
  },

  {
    path: "/adminLogin",
    element: <AdminLogin />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
  {
    element: <NwssuAdminLayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/adminBuildingOffice",
        element: <AdminBuildingOffice />,
      },
      {
        path: "/adminBuildingInfo",
        element: <AdminBuildingInfo />,
      },
    ],
  },

  {
    element: <Mainlayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/nwssuMap",
        element: <NwssuMap />,
      },
      {
        path: "/nwssuBuilding",
        element: <NwssuBuilding />,
      },
      {
        path: "/nwssuUserGuide",
        element: <NwssuUserGuide />,
      },
    ],
  },

  {
    element: <Ccislayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/CcisBuilding",
        element: <CcisBuilding />,
      },
    ],
  },

  {
    element: <Ccjslayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/CcjsBuilding",
        element: <CcjsBuilding />,
      },
    ],
  },

  {
    element: <Comlayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/ComBuilding",
        element: <ComBuilding />,
      },
    ],
  },

  {
    element: <Cealayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/CeaBuilding",
        element: <CeaBuilding />,
      },
    ],
  },

  {
    element: <Coedlayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/CoedBuilding",
        element: <CoedBuilding />,
      },
    ],
  },

  {
    element: <Catlayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/CatBuilding",
        element: <CatBuilding />,
      },
    ],
  },

  {
    element: <Ccis3layout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/Ccis3Building",
        element: <Ccis3Building />,
      },
    ],
  },

  {
    element: <Researchlayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/ResearchBuilding",
        element: <ResearchBuilding />,
      },
    ],
  },

  {
    element: <Sociolayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/SocioBuilding",
        element: <SocioBuilding />,
      },
    ],
  },

  {
    element: <Librarylayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/LibraryBuilding",
        element: <LibraryBuilding />,
      },
    ],
  },

  {
    element: <Bdclayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/BdcBuilding",
        element: <BdcBuilding />,
      },
    ],
  },

  {
    element: <Ascalayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/AscaBuilding",
        element: <AscaBuilding />,
      },
    ],
  },

  {
    element: <Tcblayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/TcbBuilding",
        element: <TcbBuilding />,
      },
    ],
  },

  {
    element: <AgriTourlayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/AgriTourBuilding",
        element: <AgriTourBuilding />,
      },
    ],
  },

  {
    element: <Hotellayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/HotelBuilding",
        element: <HotelBuilding />,
      },
    ],
  },

  {
    element: <Adminlayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/AdminBuilding",
        element: <AdminBuilding />,
      },
    ],
  },

  {
    element: <Presidentlayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/PresidentBuilding",
        element: <PresidentBuilding />,
      },
    ],
  },

  {
    element: <Saslayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/SasBuilding",
        element: <SasBuilding />,
      },
    ],
  },

  {
    element: <Balaylayout />,
    errorElement: <Error500Page />,
    children: [
      {
        path: "/BalayBuilding",
        element: <BalayBuilding />,
      },
    ],
  },

  {
    path: "*",
    element: <Error404Page />,
  },
];

export default Router;
