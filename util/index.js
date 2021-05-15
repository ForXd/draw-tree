const {TreeNode} = require('../base/TreeNode');

function randomInt(n) {
    return Math.floor(Math.random()*(n + 1));
}

function randomTree(count) {
    let index = 0;
    function randomBinaryTree(n) {
        if (n === 0) return null;
        let root = new TreeNode(index++);
        // ++index;
        let leftN = randomInt(n - 1);
        root.left = randomBinaryTree(leftN);
        root.right = randomBinaryTree(n - leftN - 1);
        return root;
    }
    return randomBinaryTree(count, 'x');
}

function fullBinaryTree(level) {
    let index = 0;
    function fullTree(n) {
        if (n === 0) return null;
        let root = new TreeNode(index);
        ++index;
        root.left = fullTree((n - 1)/2);
        root.right = fullTree((n - 1)/2);
        return root;
    }
    return fullTree(Math.pow(2, level) - 1);
}

const serializer = (root) => {
    if (!root) return 'x';
    let left = serializer(root.left);
    let right = serializer(root.right);
    return root.val + ',' + left + ',' + right;
}

const deserialize = (data) => {
    const list = data.split(',');
    function buildTree(list) {
        let v = list.shift();
        if (v === 'x') return null;
        let root = new TreeNode(v);
        root.left = buildTree(list);
        root.right = buildTree(list);
        return root;
    }
    return buildTree(list);
}

const getHeight = (root) => {
    if (!root) return 0;
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

module.exports = {
    randomTree,
    fullBinaryTree,
    serializer,
    deserialize,
    getHeight
}