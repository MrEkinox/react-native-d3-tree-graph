"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function flatten(root) {
    var n = [], i = 0;
    function recurse(node) {
        if (node.children)
            node.children.forEach(recurse);
        if (!node.id)
            node.id = ++i;
        n.push(node);
    }
    recurse(root);
    return n;
}
exports.flatten = flatten;
//# sourceMappingURL=FlatNodes.js.map