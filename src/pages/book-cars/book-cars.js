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
  const componentName = "Book Cars";
  // const query = gql``;
  //
  // return (
  //   <Query query={query}>
  //     <div id={componentName}>Book Cars</div>
  //   </Query>
  // );
  return <p>{componentName}</p>;
};
