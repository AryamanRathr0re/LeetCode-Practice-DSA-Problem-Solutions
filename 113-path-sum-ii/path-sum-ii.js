/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 * this.val = (val===undefined ? 0 : val);
 * this.left = (left===undefined ? null : left);
 * this.right = (right===undefined ? null : right);
 * }
 */
/**
 * @param {TreeNode} root The root of the binary tree.
 * @param {number} targetSum The target sum to find.
 * @return {number[][]} An array of all root-to-leaf paths that sum to targetSum.
 */
const pathSum = function(root, targetSum) {
    // This array will store all the valid paths we find.
    const result = [];
    
    // We use a helper function to perform the Depth-First Search (DFS).
    // It keeps track of the current node, the sum of the path so far,
    // and the path itself (an array of node values).
    function dfs(node, currentSum, path) {
        // If the current node is null, it's the end of a branch, so we stop.
        if (!node) {
            return;
        }

        // Add the current node's value to our running path and sum.
        path.push(node.val);
        currentSum += node.val;

        // Check for the successful condition:
        // 1. Is it a leaf node (no left or right children)?
        // 2. Does the path sum equal the target sum?
        if (!node.left && !node.right && currentSum === targetSum) {
            // We found a valid path!
            // We add a *copy* of the path to our results. We must copy it
            // because the 'path' array will be modified as we backtrack.
            result.push([...path]);
        } else {
            // If it's not a valid leaf path, continue searching deeper.
            // Explore the left subtree.
            dfs(node.left, currentSum, path);
            // Explore the right subtree.
            dfs(node.right, currentSum, path);
        }

        // --- Backtracking Step ---
        // This is crucial. After exploring a node and its children, we "undo"
        // the choice of including this node in the path by removing it.
        // This allows us to correctly explore other branches of the tree
        // without this node's value carrying over.
        path.pop();
    }

    // Start the DFS from the root node with an initial sum of 0 and an empty path.
    dfs(root, 0, []);

    return result;
};