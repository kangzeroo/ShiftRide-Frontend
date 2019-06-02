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
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

export default ({}) => {
  const componentName = "HomePage";
  // core assumption is that when we query vehicles, we are getting only active and verified listings
  const query = gql`
    query {
      vehicles(
        lat: 43.473801
        lng: -80.531739
        startDate: "2019-06-02T08:34:50+0000"
        endDate: "2019-06-02T08:34:50+0000"
      ) {
        _id
        make
        model
        location
        owner {
          aliasName
        }
      }
    }
  `;

  return (
    <Query query={query}>
      <div id={componentName}>Home Page</div>
    </Query>
  );
};
