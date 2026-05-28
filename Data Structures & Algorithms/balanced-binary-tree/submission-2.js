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
     * @return {boolean}
     */
    
    height(node){
        if(!node) return 0;
        let leftH=this.height(node.left);
        let rightH=this.height(node.right);

        if(leftH===-1 || rightH===-1){
            return -1;
        }

        if(Math.abs(leftH-rightH)>1) return -1;

        return Math.max(leftH,rightH)+1;
    }

    isBalanced(root) {

        return this.height(root)!==-1;
    }
}
