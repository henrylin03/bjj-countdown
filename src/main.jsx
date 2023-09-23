import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// TODO: can create theme! use purple as before

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider theme={{}}>
    <ModalsProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ModalsProvider>
  </MantineProvider>
);
