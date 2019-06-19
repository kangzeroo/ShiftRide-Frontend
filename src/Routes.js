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

const Placeholder = pageName => () => (
  <p style={{ padding: "20px", backgroundColor: "rgba(0,0,0,0.3)" }}>
    {pageName}
  </p>
);

export default ({}) => {
  return (
    <Router>
      <Switch>
        {/**
          LOGIN PAGE
          - this page is for google login
          - after google auth, new users should be redirected to PROFILE SETUP TYPEFORM and existing users should be redirected to VEHICLES SEARCH PAGE
        */}
        <Route exact path="/login" component={Placeholder("LOGIN PAGE")} />
        {/**
          PROFILE SETUP TYPEFORM
          - this page holds a typeform for setting up an new users account details, with a `userId` in the url params
          - /?userId=111111
        */}
        <Route
          exact
          path="/profile/setup"
          component={Placeholder("PROFILE SETUP TYPEFORM")}
        />
        {/**
          VEHICLES SEARCH PAGE
          - aka home route
          - /?sidebar=open&gps=89.4,-78.4&startDate=111&endDate=222
        */}
        <Route exact path="/" component={Placeholder("VEHICLES SEARCH PAGE")} />
        {/**
          BOOK VEHICLE PAGE
          - this page is to look at a vehicle and the option to book it if its available
          - if the `BOOK NOW` button is pressed, it should redirect to the TRIP PAGE
        */}
        <Route
          exact
          path="/vehicles/:vehicleId"
          component={Placeholder("BOOK VEHICLE PAGE")}
        />
        {/**
          TRIP PAGE
          - this page is to look at the status of an active trip and the option to end it if possible
          - if the `END TRIP` button is pressed, it should redirect to the TRIP RECEIPT PAGE
        */}
        <Route
          exact
          path="/trips/:tripId"
          component={Placeholder("TRIP PAGE")}
        />
        {/**
          TRIP RECEIPT PAGE
          - this page is to look at a past trip and the option to report an issue/complaint if necessary
          - if the `REPORT ISSUE` button is pressed, it should redirect to the REPORT TRIP ISSUE TYPEFORM
        */}
        <Route
          exact
          path="/trips/:tripId/receipt"
          component={Placeholder("TRIP RECEIPT PAGE")}
        />
        {/**
          REPORT TRIP ISSUE TYPEFORM
          - this page holds a typeform for filing an complaint, with the tripId and a generated title in url params
          - /?tripId=111111&title=brief%20summary%20of%20event
          - when the typeform is completed, it should redirect back to TRIP RECIEPT PAGE
        */}
        <Route
          exact
          path="/trips/:tripId/create-issue"
          component={Placeholder("REPORT TRIP ISSUE TYPEFORM")}
        />
        {/**
          PAST TRIPS PAGE
          - this page is for showing the renter a list of their past trips
          - clicking on a trip should take you to that TRIP RECEIPT PAGE
        */}
        <Route
          exact
          path="/profile/:userId/trips"
          component={Placeholder("PAST TRIPS PAGE")}
        />
        {/**
          BILLING PAGE
          - this page handles user credit card management
          - add or remove a credit card
          - we can get here from the SETTINGS PAGE
        */}
        <Route
          exact
          path="/profile/billing"
          component={Placeholder("BILLING PAGE")}
        />
        {/**
          SETTINGS PAGE
          - this page is a table of contents that leads to various pages and typeforms
          - /?params=true
        */}
        <Route
          exact
          path="/settings"
          component={Placeholder("SETTINGS PAGE")}
        />
        {/**
          PROFILE UPDATE TYPEFORM
          - this page holds a typeform for updating user account details
          - /?userId=1111
          - we get here from the SETTINGS PAGE and return back when typeform is submitted
        */}
        <Route
          exact
          path="/profile/update"
          component={Placeholder("PROFILE UPDATE TYPEFORM")}
        />
        {/**
          CREATE SUPPORT TICKET TYPEFORM
          - this page holds a typeform for filing a support ticket not related to any trip
          - /?userId=11111
          - we get here from the SETTINGS PAGE and return back when typeform is submitted
        */}
        <Route
          exact
          path="/support/create-ticket"
          component={Placeholder("CREATE SUPPORT TICKET TYPEFORM")}
        />
      </Switch>
    </Router>
  );
};
