import React from "react";
import _ from "lodash";
import { JoinPaths } from "./ZigZagUtil";
import { Path } from "react-native-svg";

export function NodeCurves(links, colorLine) {
  const nodePath = _.map(links, function(d, i) {
    return (
      <Path
        key={"curves_" + i}
        d={JoinPaths(d)}
        fill="none"
        stroke={colorLine ? colorLine : "#000"}
      />
    );
  });

  return nodePath;
}
