/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

/** @jsx jsx */

import React from "react";
import { jsx } from "@emotion/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/home/home";
import BookCars from "./pages/book-cars/book-cars";
import MyCars from "./pages/owner/my-cars/my-cars";

export default ({}) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={BookCars} />
        <Route exact path="/fleet" component={MyCars} />
      </Switch>
    </Router>
  );
};
