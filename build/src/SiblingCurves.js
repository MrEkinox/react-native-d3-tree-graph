"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const lodash_1 = __importDefault(require("lodash"));
const siblingUtil_1 = require("./siblingUtil");
const react_native_svg_1 = require("react-native-svg");
function SiblingCurves(siblings, allNodes) {
    const siblingJoins = lodash_1.default.map(siblings, function (d, i) {
        return (react_1.default.createElement(react_native_svg_1.Path, { key: "curves_" + i, d: siblingUtil_1.sblingLine(d, allNodes), fill: "none", stroke: "blue" }));
    });
    return siblingJoins;
}
exports.SiblingCurves = SiblingCurves;
//# sourceMappingURL=SiblingCurves.js.map