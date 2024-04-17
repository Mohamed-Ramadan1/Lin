// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//React tostify imports
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

//Redux imports
import { store, persistor } from "./store/store.js";
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App />
      <ToastContainer position="top-center" />
    </Provider>
  </PersistGate>
);
