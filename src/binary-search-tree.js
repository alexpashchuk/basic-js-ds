const { NotImplementedError } = require('../extensions/index.js')

const { Node } = require('../extensions/list-tree.js')

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this._root = null
    }

    root() {
        return this._root
    }

    add(data) {
        this._root = setData(this._root, data)

        function setData(node, value) {
            if (!node) {
                return new Node(value)
            }

            if (node.data === value) {
                return node
            }

            if (value > node.data) {
                node.right = setData(node.right, value)
            } else {
                node.left = setData(node.left, value)
            }
            return node
        }
    }

    has(data) {
        return searchData(this._root, data)

        function searchData(node, value) {
            if (!node) {
                return false
            }

            if (node.data === value) {
                return true
            }

            if (value > node.data) {
                return searchData(node.right, value)
            } else {
                return searchData(node.left, value)
            }
        }
    }

    find(data) {
        return searchNode(this._root, data)

        function searchNode(node, value) {
            if (!node) {
                return null
            }

            if (node.data === value) {
                return node
            }

            if (value > node.data) {
                return searchNode(node.right, value)
            } else {
                return searchNode(node.left, value)
            }
        }
    }

    remove(data) {
        this._root = removeNode(this._root, data)

        function removeNode(node, value) {
            if (!node) {
                return null
            }

            if (value > node.data) {
                node.right = removeNode(node.right, value)
                return node
            } else if (value < node.data) {
                node.left = removeNode(node.left, value)
                return node
            } else {
                if (!node.left && !node.right) {
                    return null
                }

                if (!node.left) {
                    node = node.right
                    return node
                }

                if (!node.right) {
                    node = node.left
                    return node
                }

                let minRight = node.right
                while (minRight.left) {
                    minRight = minRight.left
                }

                node.data = minRight.data

                node.right = removeNode(node.right, minRight.data)

                return node
            }
        }
    }

    min() {
        let node = this._root
        while (node.left !== null) {
            node = node.left
        }

        return node.data
    }

    max() {
        let node = this._root
        while (node.right !== null) {
            node = node.right
        }

        return node.data
    }
}

module.exports = {
    BinarySearchTree
}
