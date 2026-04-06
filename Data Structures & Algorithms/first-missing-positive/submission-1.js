class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        nums.sort((a,b)=>a-b);

        let i=0; let k=1;
        while(i<=nums.length){
            if(nums[i]<=0){
                i++;
            }else if(nums[i]===k){
                k++;
                i++;
            }else if(nums[i]<k){
                i++;
            }else{
                return k;
            }
        }
    }
}
