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
import { Helmet } from "react-helmet";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { GOOGLE_MAPS_ACCESS_TOKEN } from "./common/auth-constants";
import Routes from "./Routes";

const client = new ApolloClient({ uri: "http://localhost:6010/graphql" });

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Helmet>
          <title>ShiftRide</title>
        </Helmet>
        <Routes />
      </div>
    </ApolloProvider>
  );
}

export default App;
