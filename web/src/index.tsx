import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { VisibilityProvider } from "./providers/VisibilityProvider";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <VisibilityProvider>
      <HashRouter>
        <React.Suspense fallback={<div>Fetching app</div>}>
          <App />
        </React.Suspense>
      </HashRouter>
    </VisibilityProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
