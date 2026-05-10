class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let total=0;
        let n=height.length;
        let leftMax=0,rightMax=0;

        let left=0, right=n-1;

        while(left<right){
            if(height[left]<height[right]){
                if(height[left]>leftMax){
                    leftMax=height[left];
                }else{
                    total+=leftMax-height[left];
                }
                left++;
            }else{
                if(height[right]>rightMax){
                    rightMax=height[right];
                }else{
                    total+=rightMax-height[right];
                }
                right--;
            }
        }

        return total;
    }
}
