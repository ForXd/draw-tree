const {getHeight} = require('../util');

class TreeDrawer {
    constructor(render) {
        this.render = render;
    }
    layout(root, nodeW, nodeH) {
        function computeWidth(root) {
            if (!root) return 0;
        
            if (!(root.left || root.right)) {
                root.width = nodeW;
                return root.width;
            }
            root.width = computeWidth(root.left) + computeWidth(root.right) + nodeW;
            return root.width;
        }

        function computePosition(root, left, right, curY = nodeH) {
            if (!root) return;
            let x;
            if (root.left) {
                x = left + root.left.width + nodeW;
            } else {
                x = left + nodeW;
            }
            root.position = [x, curY];
            computePosition(root.left, left, x, curY + nodeH);
            computePosition(root.right, x, right, curY + nodeH);

        }

        computeWidth(root);
        computePosition(root, 0, root.width);
        return root.width;
    }

    async draw(root, nodeW=40, nodeH=40) {
        let height = getHeight(root);
        let width = this.layout(root, nodeW, nodeH);
        height = height * nodeH + nodeH;
        this.render.initSize(width + nodeW, height);

        //  (x, y) ===> (x1, y1)
        const getVector = (x, y, x1, y1) => {
            let dis = Math.sqrt((x - x1) ** 2 + (y - y1) ** 2);
            return [
                (x1 - x)/dis,
                (y1 - y)/dis
            ]
        }
        const linkNode = (root, child) => {
            let [px, py] = root.position;
            let [cx, cy] = child.position;
            let [dx, dy] = getVector(px, py, cx, cy);
            this.render.renderLine(px + (nodeW/2)*dx, py + (nodeW/2)*dy,cx - (nodeW/2)*dx, cy - (nodeW/2)*dy)
        }

        const drawNode = (root) => {
            let [x, y] = root.position;
            this.render.renderNode(x, y, nodeW/2, root.val);
        }
        function draw(root) {
            if (!root) return;
            draw(root.left);
            drawNode(root);
            if (root.left) linkNode(root, root.left);
            if (root.right) linkNode(root, root.right);
            draw(root.right);
        }
        draw(root);
    } 
}

module.exports = TreeDrawer;