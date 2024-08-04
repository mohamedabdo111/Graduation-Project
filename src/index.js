import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="255532104890-jp3a3k7qpjkcm2mgvobqsn3ot9gikq5o.apps.googleusercontent.com">
    <Provider store={Store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>
);
