import { Switch, Route, Redirect } from "react-router";
import React from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";

import Characters from "./components/Characters";
import Movies from "./components/Movies";
import HQs from "./components/HQs";

export const MainRouter = (props) => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route path="/home" component={Home} />
    <Redirect from="*" to="/login" />
  </Switch>
);

export const NavRouter = () => {
  <Switch>
    <Route path="/chars" component={Characters} />
    <Route path="/movies" component={Movies} />
    <Route path="/hqs" component={HQs} />
    <Redirect from="*" to="/login" />
  </Switch>;
};
