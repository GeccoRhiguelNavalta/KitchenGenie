import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
<<<<<<< Updated upstream

=======
import { Auth0Provider } from "@auth0/auth0-react";

// const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const domain = 'dev-nsmmykjm67c0wwa0.uk.auth0.com';
const clientId = 'tcsfMbSSEGLdqq2KbDnu0kGS8169GVaZ';
// const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

>>>>>>> Stashed changes
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{redirect_uri:window.location.origin}}
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
