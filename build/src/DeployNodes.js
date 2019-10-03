"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const lodash_1 = __importDefault(require("lodash"));
const CoordinatePoints_1 = require("./CoordinatePoints");
const react_native_svg_1 = require("react-native-svg");
function DeployNodes(nodes) {
    const rectNodes = lodash_1.default.map(nodes, function (n, index) {
        let text, imageWidth, imageHeight;
        imageWidth = n.nodeImageStyle ? n.nodeImageStyle.imageWidth : 50;
        imageHeight = n.nodeImageStyle ? n.nodeImageStyle.imageHeight : 50;
        if (n.name) {
            text = (react_1.default.createElement(react_native_svg_1.Text, Object.assign({ x: CoordinatePoints_1.tx(n), y: CoordinatePoints_1.ty(n) + imageHeight }, n.nodeTextStyle), n.name));
            return (react_1.default.createElement(react_native_svg_1.G, { key: "tree_" + index },
                react_1.default.createElement(react_native_svg_1.Rect, { x: CoordinatePoints_1.kx(n), y: CoordinatePoints_1.ky(n), width: imageWidth, height: imageHeight, fillOpacity: 0, onPress: () => n.onPress && n.onPress() }),
                react_1.default.createElement(react_native_svg_1.Image, Object.assign({ x: CoordinatePoints_1.kx(n), y: CoordinatePoints_1.ky(n), width: imageWidth, height: imageHeight }, n.nodeImageStyle, n.imageUrl)),
                text));
        }
    });
    return rectNodes;
}
exports.DeployNodes = DeployNodes;
//# sourceMappingURL=DeployNodes.js.map