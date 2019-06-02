/**
 * Copyright (c) Kangzeroo
 *
 * This template was created by Kangze Huang
 * adhering to best-practices for React 16+
 * please use with ESlint, Prettier and Flow
 */

/** @jsx jsx */

import React from "react";
import { AutoComplete } from "antd";
import { jsx } from "@emotion/core";

export default ({}) => {
  const componentName = "MyCarsFilter";
  const dataSource = ["Burns Bay Road", "Downing Street", "Wall Street"];
  return (
    <div id={componentName}>
      <AutoComplete
        style={{ width: 200 }}
        dataSource={dataSource}
        placeholder="Search cars..."
        filterOption={(inputValue, option) =>
          option.props.children
            .toUpperCase()
            .indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </div>
  );
};
