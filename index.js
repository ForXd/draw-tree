const {TreeNode} = require('./base/TreeNode');
const TreeDrawer = require('./base/drawer');
const {
    CanvasRender,
    SvgRender,
} = require('./render');
const {
    randomTree,
    fullBinaryTree,
    serializer,
    deserialize,
    getHeight
} = require('./util');


//  to window
global.tree = {
    TreeNode,
    TreeDrawer,
    CanvasRender,
    SvgRender,
    randomTree,
    fullBinaryTree,
    serializer,
    deserialize,
    getHeight
}

/**
 * example usage
 * let tree = deserialize("1,2,4,7,x,x,8,x,x,5,x,9,x,x,3,x,6,x,x");
 * let svgRender = new SvgRender(document.body);
 * let drawer = new TreeDrawer(svgRender);
 * drawer.draw(t);
 */