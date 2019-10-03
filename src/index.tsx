import React from "react";
import { View, ScrollView, Dimensions } from "react-native";
import Svg, { G } from "react-native-svg";
import * as d3 from "d3";
import _ from "lodash";
import { flatten } from "./FlatNodes";
import { NodeCurves } from "./ConstructCurves";
import { DeployNodes } from "./DeployNodes";
import { SiblingCurves } from "./SiblingCurves";

var { height, width } = Dimensions.get("window");
var curves, siblingpath, rectNodes;

export default class AwesomeHierarchyGraph extends React.Component<any> {
  constructor(props) {
    super(props);
  }

  drawTree() {
    const { root, siblings, colorLine } = this.props;

    var allNodes = flatten(root);

    var tree = d3.layout.tree().size([width, height / 2]),
      nodes = tree.nodes(root),
      links = tree.links(nodes);

    curves = NodeCurves(links, colorLine);
    siblingpath = SiblingCurves(siblings, allNodes);
    rectNodes = DeployNodes(nodes);
  }

  render() {
    this.drawTree();
    return (
      <View>
        <ScrollView>
          <Svg width={width} height={height}>
            <G>
              {siblingpath}
              {rectNodes}
              {curves}
            </G>
          </Svg>
        </ScrollView>
      </View>
    );
  }
}
