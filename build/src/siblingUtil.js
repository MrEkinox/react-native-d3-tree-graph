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
function sblingLine(d, allNodes) {
    //start point
    var start = allNodes.filter(function (v) {
        if (d.source.id == v.id) {
            return true;
        }
        else {
            return false;
        }
    });
    //end point
    var end = allNodes.filter(function (v) {
        if (d.target.id == v.id) {
            return true;
        }
        else {
            return false;
        }
    });
    //define teh start coordinate and end co-ordinate
    var linedata = [
        {
            x: start[0].x,
            y: start[0].y
        },
        {
            x: end[0].x,
            y: end[0].y
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
        .interpolate("linear");
    return fun(linedata);
}
exports.sblingLine = sblingLine;
//# sourceMappingURL=siblingUtil.js.map