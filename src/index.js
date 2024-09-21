import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./features/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Provider component is used to provide the Redux store to the App component
  <Provider store={store}>
    <App />
  </Provider>
);
