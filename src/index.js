import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { auth0Config } from "./auth0-config";

const { redirect_uri } = auth0Config.authorizationParams;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={auth0Config.domain}
    clientId={auth0Config.clientId}
    redirectUri={redirect_uri}
  >
    <App />
  </Auth0Provider>
);
