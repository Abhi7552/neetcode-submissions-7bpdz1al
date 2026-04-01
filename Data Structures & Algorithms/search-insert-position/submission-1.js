class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let i=0,j=nums.length-1;
        let mid;
        while(i<=j){
            mid=Math.floor((i+j)/2);
            if(nums[mid]===target){
                return mid;
            }else if(nums[mid]<target){
                i=mid+1;
            }else{
                j=mid-1;
            }
        }
        return i;
    }
}
