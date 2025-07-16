import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MockedProvider } from "@apollo/client/testing";
import { productMocks } from "./Mockdata.js";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MockedProvider mocks={productMocks} addTypename={false}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </MockedProvider>
  </StrictMode>
);
