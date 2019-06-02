/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

/** @jsx jsx */

import React, { Fragment } from "react";
import { jsx } from "@emotion/core";
import MapPlot from "../../../components/map-plot/map-plot";
import MyCarsFilter from "./my-cars-filter";

export default ({}) => {
  const componentName = "MyCars";
  return (
    <Fragment>
      <section css={{ height: "600px" }}>
        <MapPlot />
      </section>
      <section css={{ height: "auto" }}>
        <MyCarsFilter />
      </section>
      <section css={{ height: "auto" }}>
        {[
          { id: 0, title: "Nimas Volkswagon Jetta" },
          { id: 1, title: "Amys Kia Soul" },
          { id: 2, title: "Kangzes Toyota RAV4" }
        ].map(car => (
          <div>{car.title}</div>
        ))}
      </section>
    </Fragment>
  );
};
