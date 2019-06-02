/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

/** @jsx jsx */

import React, { useState, useEffect } from "react";
import { jsx } from "@emotion/core";

export default ({ dots = [], lines = [] }) => {
  const componentName = "MapPlot";

  useEffect(() => {
    const map = new window.google.maps.Map(
      document.getElementById(`map-${componentName}`),
      {
        center: { lat: 43.473801, lng: -80.531739 },
        zoom: 14
      }
    );
  }, []);

  return (
    <div id={componentName} css={{ height: "100%" }}>
      <div id={`map-${componentName}`} css={{ height: "100%" }} />
    </div>
  );
};
