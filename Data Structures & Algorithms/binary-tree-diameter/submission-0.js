/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let diameter=0;

        function height(node){
            if(!node) return 0;

            let leftH=height(node.left);
            let rightH=height(node.right);

            diameter=Math.max(diameter,leftH+rightH);

            return 1+Math.max(leftH,rightH);
        }

        height(root);
        return diameter;
    }

    
}
