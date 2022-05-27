import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AnswersHeadlessProvider } from "@yext/answers-headless-react";
import { answersHeadlessConfig } from "./config/answersHeadlessConfig";
import { OverlayProvider } from "./providers/OverlayProvider";

ReactDOM.render(
  <AnswersHeadlessProvider {...answersHeadlessConfig}>
    <React.StrictMode>
      <OverlayProvider>
        <App />
      </OverlayProvider>
    </React.StrictMode>
  </AnswersHeadlessProvider>,
  document.getElementById("root")
);
