import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Animated
} from "react-native";

import Svg, { Circle, G, Path, Text, Rect } from "react-native-svg";
import * as d3 from "d3";
import _ from "lodash";
import { flatten } from "./FlatNodes";
import { NodeCurves } from "./ConstructCurves";
import { DeployNodes } from "./DeployNodes";
import { SiblingCurves } from "./SiblingCurves";

var { height, width } = Dimensions.get("window");
var margin = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  },
  curves,
  siblingpath,
  rectNodes;

export default class AwesomeHierarchyGraph extends Component {
  constructor(props) {
    super(props);
  }

  drawTree() {
    const { root, siblings } = this.props;

    var allNodes = flatten(root);

    var tree = d3.layout.tree().size([width, height / 2]),
      nodes = tree.nodes(root),
      links = tree.links(nodes);

    curves = NodeCurves(links);
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
