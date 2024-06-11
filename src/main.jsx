import React from "react";
import ReactDOM from "react-dom/client";

import "antd/dist/reset.css";
import "./index.css";
import { ConfigProvider } from "antd";
import { InfoProvider } from "./context/infoContext";
import { AuthProvider } from "./context/authContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./routers/routers";
import themeJson from "../themeJson.json";

const router = createBrowserRouter(Router);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <InfoProvider>
      <AuthProvider>
        <ConfigProvider theme={themeJson}>
          <RouterProvider router={router} />
        </ConfigProvider>
      </AuthProvider>
    </InfoProvider>
  </React.StrictMode>
);
