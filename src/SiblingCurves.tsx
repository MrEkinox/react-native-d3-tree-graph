import React from "react";
import _ from "lodash";
import { sblingLine } from "./siblingUtil";
import { Path } from "react-native-svg";

export function SiblingCurves(siblings, allNodes) {
  const siblingJoins = _.map(siblings, function(d, i) {
    return (
      <Path
        key={"curves_" + i}
        d={sblingLine(d, allNodes)}
        fill={"none"}
        stroke={"blue"}
      />
    );
  });

  return siblingJoins;
}
