/*
Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

Runtime: 160 ms, faster than 92.64% of JavaScript online submissions for Range Sum of BST.
Memory Usage: 67.1 MB, less than 63.92% of JavaScript online submissions for Range Sum of BST.
O(n)
*/

var rangeSumBST = function(node, l, r) {
    if (node) {
        if (node.val >= l && node.val <= r) {
            return node.val + 
                rangeSumBST(node.left, l, r) + 
                rangeSumBST(node.right, l, r);
        } else if (node.val < l) {
            return rangeSumBST(node.right, l, r);
        } else if (node.val > r) {
            return rangeSumBST(node.left, l, r);
        }
    }

    return 0;
};