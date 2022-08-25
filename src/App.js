import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import "./assets/css/main.scss";
import { Router } from "react-router-dom";
import Nav from " components/navbar/Nav";
function App() {
  return (
    <Router>
      <route path="/Nav" element={<Nav></Nav>}></route>
    </Router>
  );
}

export default App;
