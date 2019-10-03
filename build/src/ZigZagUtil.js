"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const d3 = __importStar(require("d3"));
function JoinPaths(d) {
    if (d.target.no_parent) {
        return "M0,0L0,0";
    }
    var diff = d.source.y - d.target.y;
    //0.40 defines the point from where you need the line to break out change is as per your choice.
    var ny = d.target.y + diff * 0.4;
    const linedata = [
        {
            x: d.target.x,
            y: d.target.y + 50
        },
        {
            x: d.target.x,
            y: ny
        },
        {
            x: d.source.x,
            y: d.source.y + 50
        }
    ];
    var fun = d3.svg
        .line()
        .x(function (d) {
        return d.x;
    })
        .y(function (d) {
        return d.y;
    })
        .interpolate("step-after");
    return fun(linedata);
}
exports.JoinPaths = JoinPaths;
//# sourceMappingURL=ZigZagUtil.js.map