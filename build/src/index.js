"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const react_native_svg_1 = __importStar(require("react-native-svg"));
const d3 = __importStar(require("d3"));
const FlatNodes_1 = require("./FlatNodes");
const ConstructCurves_1 = require("./ConstructCurves");
const DeployNodes_1 = require("./DeployNodes");
const SiblingCurves_1 = require("./SiblingCurves");
var { height, width } = react_native_1.Dimensions.get("window");
var curves, siblingpath, rectNodes;
class AwesomeHierarchyGraph extends react_1.default.Component {
    constructor(props) {
        super(props);
    }
    drawTree() {
        const { root, siblings, colorLine } = this.props;
        var allNodes = FlatNodes_1.flatten(root);
        var tree = d3.layout.tree().size([width, height / 2]), nodes = tree.nodes(root), links = tree.links(nodes);
        curves = ConstructCurves_1.NodeCurves(links, colorLine);
        siblingpath = SiblingCurves_1.SiblingCurves(siblings, allNodes);
        rectNodes = DeployNodes_1.DeployNodes(nodes);
    }
    render() {
        this.drawTree();
        return (react_1.default.createElement(react_native_1.View, null,
            react_1.default.createElement(react_native_1.ScrollView, null,
                react_1.default.createElement(react_native_svg_1.default, { width: width, height: height },
                    react_1.default.createElement(react_native_svg_1.G, null,
                        siblingpath,
                        rectNodes,
                        curves)))));
    }
}
exports.default = AwesomeHierarchyGraph;
//# sourceMappingURL=index.js.map