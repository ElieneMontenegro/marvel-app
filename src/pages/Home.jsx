import React, { Component } from "react";
import { HashRouter } from "react-router-dom";

import Header from "../components/Header";
import { NavRouter } from "../Routes";

export default class Home extends Component {
  componentWillMount() {
    require("./Home.css");
  }

  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <NavRouter />
        </div>
      </HashRouter>
    );
  }
}
