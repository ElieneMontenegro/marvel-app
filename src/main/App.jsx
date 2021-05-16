import { HashRouter } from "react-router-dom";
import React from "react";
import { MainRouter } from "../Routes";

export default (props) => (
  <HashRouter>
    <MainRouter />
  </HashRouter>
);
