var sumRootToLeaf = function(root) {
    function dfs(node, curr){
        if (!node) return 0;

        curr = curr * 2 + node.val;

        if (!node.left && !node.right)
            return curr;

        return dfs(node.left, curr) + dfs(node.right, curr);
    }

    return dfs(root, 0);
};