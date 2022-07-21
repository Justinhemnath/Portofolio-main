import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import { Provider } from 'react-redux';
import Store from './Features/Store';

import App from "./App";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={Store}>
      <App />
    </Provider>
  </Router>
);