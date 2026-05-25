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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let inMap=new Map();

        for(let i=0;i<inorder.length;i++){
            inMap.set(inorder[i],i);
        }

        let preIndex=0;

        function build(inStart,inEnd){
            if(inStart>inEnd) return null;

            let rootVal=preorder[preIndex++];
            let root=new TreeNode(rootVal);

            let inIndex=inMap.get(rootVal);

            root.left=build(inStart,inIndex-1);
            root.right=build(inIndex+1,inEnd);

            return root;
        }
        
        return build(0,inorder.length-1);
    }
}
