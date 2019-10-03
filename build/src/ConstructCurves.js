"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const lodash_1 = __importDefault(require("lodash"));
const ZigZagUtil_1 = require("./ZigZagUtil");
const react_native_svg_1 = require("react-native-svg");
function NodeCurves(links, colorLine) {
    const nodePath = lodash_1.default.map(links, function (d, i) {
        return (react_1.default.createElement(react_native_svg_1.Path, { key: "curves_" + i, d: ZigZagUtil_1.JoinPaths(d), fill: "none", stroke: colorLine ? colorLine : "#000" }));
    });
    return nodePath;
}
exports.NodeCurves = NodeCurves;
//# sourceMappingURL=ConstructCurves.js.map