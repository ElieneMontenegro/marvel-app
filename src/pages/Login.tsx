import React, { Component } from "react";
import MarvelBox from "../components/LoginComponents/MarvelBox";
import LoginForm from "../components/LoginComponents/LoginForm";
import Delay from "../components/Delay";
import "./Login.css";

export default () => (
  <div className="login">
    <MarvelBox />
    <Delay waitBeforeShow={5000}>
      <LoginForm className="login-component" />
    </Delay>
  </div>
);
