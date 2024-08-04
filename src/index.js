import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="21269682544-tecpha7s05ehj5g6r5usbmel4vr8hea4.apps.googleusercontent.com">
    <Provider store={Store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>
);
